"use client";
import { countries } from "@/utils/countryCode";
import { FillMail, FillPhone, FillUser } from "@/utils/icons";
import { OutlineDrpopdown } from "@/utils/newIcons";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";

// Constants
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const DEFAULT_COUNTRY_CODE = "+91";
const PHONE_LENGTH = 10;

// API Endpoints (consider moving to env variables)
const PRODUCTION_WEBHOOK =
  "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook";
// const TEST_WEBHOOK = "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/jncSLqGC#generic-webhook";

// Types
interface FormField {
  tag: string;
  icon: JSX.Element;
  type?: string;
  name: string;
  placeholder: string;
  required: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  content?: JSX.Element;
}

interface FormData {
  firstName: string;
  lastName: string;
  userEmail: string;
  brandName: string;
  userMessage: string;
  userPhone: string;
  countryCode: string;
  agreeToTerms: boolean;
}

const ContactForm = () => {
  const router = useRouter();
  const [formState, setFormState] = useState<FormData>({
    firstName: "",
    lastName: "",
    userEmail: "",
    brandName: "",
    userMessage: "",
    userPhone: "",
    countryCode: DEFAULT_COUNTRY_CODE,
    agreeToTerms: false,
  });

  const [formRes, setFormRes] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Handle form field changes
  const handleChange = useCallback(
    (field: keyof FormData) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) => {
        const value =
          e.target.type === "checkbox"
            ? (e.target as HTMLInputElement).checked
            : e.target.value;

        setFormState((prev) => ({ ...prev, [field]: value }));

        // Clear errors when user starts typing
        if (field === "userEmail") setEmailError("");
        if (field === "userPhone") setPhoneError("");
      },
    []
  );

  // Special phone handler
  const handlePhoneChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters

      if (value.length <= PHONE_LENGTH) {
        setFormState((prev) => ({ ...prev, userPhone: value }));

        // Show error only if incomplete but not empty
        if (value.length > 0 && value.length < PHONE_LENGTH) {
          setPhoneError("Please enter a valid 10-digit number");
        } else {
          setPhoneError("");
        }
      }
    },
    []
  );

  // Special email handler
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormState((prev) => ({ ...prev, userEmail: value }));

      if (!EMAIL_REGEX.test(value) && value.length > 0) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
    },
    []
  );

  // Form validation
  const validateForm = useCallback((): boolean => {
    let isValid = true;

    if (formState.userPhone.length !== PHONE_LENGTH) {
      setPhoneError("Phone number must be exactly 10 digits");
      isValid = false;
    }

    if (!EMAIL_REGEX.test(formState.userEmail)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!formState.agreeToTerms) {
      alert("Please agree to the terms and conditions.");
      isValid = false;
    }

    return isValid;
  }, [formState]);

  // Form submission
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (!validateForm()) {
        setFormRes(false);
        return;
      }

      setFormRes(true);

      try {
        const payload = {
          name: `${formState.firstName} ${formState.lastName}`.trim(),
          email: formState.userEmail,
          phone: `${formState.countryCode}${formState.userPhone}`,
          brandName: formState.brandName,
          message: formState.userMessage,
          agreeToTerms: formState.agreeToTerms,
        };

        const { data } = await axios.post(PRODUCTION_WEBHOOK, payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (data.success) {
          // Reset form
          setFormState({
            firstName: "",
            lastName: "",
            userEmail: "",
            brandName: "",
            userMessage: "",
            userPhone: "",
            countryCode: DEFAULT_COUNTRY_CODE,
            agreeToTerms: false,
          });

          window.open("/thank-you/", "_blank");
        } else {
          alert("Something went wrong! Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Failed to submit form. Please try again.");
      } finally {
        setFormRes(false);
      }
    },
    [formState, validateForm]
  );

  // Memoized form fields configuration
  const formFields = useMemo<FormField[]>(
    () => [
      {
        tag: "input",
        icon: <FillUser />,
        type: "text",
        name: "firstName",
        placeholder: "First Name",
        required: true,
        value: formState.firstName,
        onChange: handleChange("firstName"),
      },
      {
        tag: "input",
        icon: <FillUser />,
        type: "text",
        name: "lastName",
        placeholder: "Last Name",
        required: true,
        value: formState.lastName,
        onChange: handleChange("lastName"),
      },
      {
        tag: "div",
        icon: <FillPhone />,
        name: "phone",
        placeholder: "Your Phone",
        required: true,
        content: (
          <div className="flex gap-2 text-base border border-gray-300 rounded-[12px] p-4 focus-within:ring-2 focus-within:ring-blue-500">
            <div className="relative ">
              <select
                id="countryCode"
                name="countryCode"
                value={formState.countryCode}
                onChange={handleChange("countryCode")}
                className="w-auto bg-transparent text-[#333333] focus:outline-none appearance-none"
                style={{ inlineSize: `${formState.countryCode.length + 3}ch` }}
                aria-label="Country Code"
              >
                {countries.map((country, index) => (
                  <option
                    key={`${country.code}-${index}`}
                    value={country.code}
                    className="text-black bg-gray-100"
                  >
                    {country.code}
                  </option>
                ))}
              </select>
              <span className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none">
                <OutlineDrpopdown />
              </span>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              inputMode="numeric"
              maxLength={PHONE_LENGTH}
              placeholder="Type here..."
              value={formState.userPhone}
              onChange={handlePhoneChange}
              className="w-full bg-transparent rounded-md placeholder:text-gray-600 text-black focus:outline-none"
              aria-invalid={!!phoneError}
              aria-describedby={phoneError ? "phone-error" : undefined}
            />
          </div>
        ),
      },
      {
        tag: "input",
        icon: <FillMail />,
        type: "text",
        name: "brandName",
        placeholder: "Business Name",
        required: false,
        value: formState.brandName,
        onChange: handleChange("brandName"),
      },
      {
        tag: "input",
        icon: <FillMail />,
        type: "email",
        name: "email",
        placeholder: "Business Email",
        required: true,
        value: formState.userEmail,
        onChange: handleEmailChange,
      },
    ],
    [formState, handleChange, handlePhoneChange, handleEmailChange, phoneError]
  );

  return (
    <div className="bg-white/10 relative after:absolute after:inset-0 after:blur-xl after:z-[-1] rounded-[40px] md:p-8">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-md:px-4 rounded-[2rem] p-6 border border-[#110D3C] max-md:mt-6 text-base w-full bg-[#F5F5F5]"
        noValidate
      >
        <h2 className="text-2xl lg:text-[2.75rem]/[3.5rem] max-w-md font-normal text-blue-dark">
          Book Your FREE Consultation Today!
        </h2>

        {formFields.map((field) => (
          <div key={field.name} className="flex flex-col gap-1">
            <div className="flex flex-col gap-2 text-gray-primary">
              <label
                htmlFor={field.name}
                className="md:text-xl text-lg text-[#363636]"
              >
                {field.placeholder}
                {field.required && <span className="text-red-500 ml-1">*</span>}
              </label>

              {field.tag === "div" ? (
                field.content
              ) : (
                <input
                  id={field.name}
                  type={field.type}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="Type here..."
                  required={field.required}
                  autoComplete="off"
                  spellCheck="false"
                  className="w-full bg-transparent border border-gray-300 p-4 md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[12px]"
                  aria-invalid={
                    (field.name === "email" && !!emailError) ||
                    (field.name === "phone" && !!phoneError)
                  }
                  aria-describedby={
                    field.name === "email" && emailError
                      ? "email-error"
                      : field.name === "phone" && phoneError
                        ? "phone-error"
                        : undefined
                  }
                />
              )}
            </div>

            {/* Error messages */}
            {field.name === "phone" && phoneError && (
              <p id="phone-error" className="text-sm text-red-500 mt-1">
                {phoneError}
              </p>
            )}
            {field.name === "email" && emailError && (
              <p id="email-error" className="text-sm text-red-500 mt-1">
                {emailError}
              </p>
            )}
          </div>
        ))}

        {/* Message field */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="userMessage"
            className="md:text-xl text-lg text-[#363636]"
          >
            Message
          </label>
          <textarea
            id="userMessage"
            name="userMessage"
            value={formState.userMessage}
            onChange={handleChange("userMessage")}
            placeholder="Type your message here..."
            rows={3}
            className="w-full bg-transparent border border-gray-300 p-4 md:text-xl focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-[12px] resize-none"
          />
        </div>

        {/* Terms checkbox */}
        <div className="flex gap-3 items-start">
          <input
            type="checkbox"
            id="agreeToTerms"
            name="agreeToTerms"
            checked={formState.agreeToTerms}
            onChange={handleChange("agreeToTerms")}
            className="mt-1 h-5 w-5 accent-orange-primary"
            required
            aria-describedby="terms-description"
          />
          <label htmlFor="agreeToTerms" className="md:text-md text-gray-700">
            I agree to receive calls, emails, and WhatsApp messages from
            Fielmente, including updates, promotional offers, and communication
            from our sales team. I understand that I can opt out or manage my
            preferences at any time.{" "}
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-primary hover:underline"
            >
              Privacy Policy.
            </Link>
            <span id="terms-description" className="sr-only">
              Required to submit the form
            </span>
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={formRes}
          className="w-full text-center bg-orange-primary text-white justify-center border-orange-primary text-md px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-primary duration-300 active:scale-95 hover:scale-[1.02] border border-blue-primary disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all"
        >
          {formRes ? (
            <span className="flex items-center justify-center gap-2">
              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Submitting...
            </span>
          ) : (
            <span className="flex gap-2 items-center justify-center">
              <CallIcon /> Book A Call
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

// Memoized SVG component
export const CallIcon = React.memo(() => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M19.95 21C17.8667 21 15.8083 20.5458 13.775 19.6375C11.7417 18.7292 9.89167 17.4417 8.225 15.775C6.55833 14.1083 5.27083 12.2583 4.3625 10.225C3.45417 8.19167 3 6.13333 3 4.05C3 3.75 3.1 3.5 3.3 3.3C3.5 3.1 3.75 3 4.05 3H8.1C8.33333 3 8.54167 3.07917 8.725 3.2375C8.90833 3.39583 9.01667 3.58333 9.05 3.8L9.7 7.3C9.73333 7.56667 9.725 7.79167 9.675 7.975C9.625 8.15833 9.53333 8.31667 9.4 8.45L6.975 10.9C7.30833 11.5167 7.70417 12.1125 8.1625 12.6875C8.62083 13.2625 9.125 13.8167 9.675 14.35C10.1917 14.8667 10.7333 15.3458 11.3 15.7875C11.8667 16.2292 12.4667 16.6333 13.1 17L15.45 14.65C15.6 14.5 15.7958 14.3875 16.0375 14.3125C16.2792 14.2375 16.5167 14.2167 16.75 14.25L20.2 14.95C20.4333 15.0167 20.625 15.1375 20.775 15.3125C20.925 15.4875 21 15.6833 21 15.9V19.95C21 20.25 20.9 20.5 20.7 20.7C20.5 20.9 20.25 21 19.95 21Z"
      fill="currentColor"
    />
  </svg>
));

CallIcon.displayName = "CallIcon";
