"use client";
import { usePathname } from "next/navigation";
import axios from "axios";
import React, {
  useState,
  useCallback,
  useMemo,
  FormEvent,
  ChangeEvent,
  useRef,
} from "react";
import { countries } from "@/utils/countryCode";
import {
  OutlineCallIcon,
  OutlineDrpopdown,
  OutlineMail,
  OutlineMessageIcon,
  OutlineUserIcon,
  WhatsAppIcon,
} from "@/utils/icons";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";
import CustomCaptchaForm from "./CaptchaForm";
import { contacts } from "../../../contact";

interface FormState {
  userName: string;
  userEmail: string;
  userMessage: string;
  userPhone: string;
  countryCode: string;
}

interface ValidationErrors {
  email?: string;
  phone?: string;
  captcha?: string;
}

const PopUpForm = () => {
  const pathname = usePathname();
  const [formState, setFormState] = useState<FormState>({
    userName: "",
    userEmail: "",
    userMessage: "",
    userPhone: "",
    countryCode: "+91",
  });

  const [formRes, setFormRes] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {}
  );
  const [isOpen, setIsOpen] = useState(false);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");

  const codeRef = useRef<HTMLDivElement>(null);

  // Constants
  const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const FORM_API =
    "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/7lHAUjtz#generic-webhook";
  const UK_NO = "+447438375533";
  const IND_NO =
    contacts.phone.length > 1 ? contacts.phone[1] : contacts.phone[0];

  // Custom hook for click outside
  useClickOutside(codeRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  // Validation functions
  const validatePhone = useCallback((phone: string): string => {
    if (!phone) return "Phone number is required";
    if (phone.length !== 10) return "Please enter a valid number";
    if (!/^\d+$/.test(phone)) return "Phone number must contain only digits";
    return "";
  }, []);

  const validateEmail = useCallback((email: string): string => {
    if (!email) return "Email is required";
    if (!EMAIL_REGEX.test(email)) return "Please enter a valid email address";
    return "";
  }, []);

  const validateCaptcha = useCallback(
    (input: string, correct: string): string => {
      if (!input) return "CAPTCHA is required";
      if (input !== correct) return "CAPTCHA incorrect. Please try again.";
      return "";
    },
    []
  );

  // Event handlers
  const handlePhoneChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/\D/g, "").slice(0, 10);
      setFormState((prev) => ({ ...prev, userPhone: value }));

      if (value.length > 0) {
        setValidationErrors((prev) => ({
          ...prev,
          phone: validatePhone(value),
        }));
      }
    },
    [validatePhone]
  );

  const handleEmailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormState((prev) => ({ ...prev, userEmail: value }));

      if (value.length > 0) {
        setValidationErrors((prev) => ({
          ...prev,
          email: validateEmail(value),
        }));
      }
    },
    [validateEmail]
  );

  const handleCaptchaInputChange = useCallback(
    (value: string) => {
      setCaptchaInput(value);
      if (value.length > 0) {
        setValidationErrors((prev) => ({
          ...prev,
          captcha: validateCaptcha(value, captcha),
        }));
      }
    },
    [captcha, validateCaptcha]
  );

  const toggleCountryCodeDropdown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  }, []);

  const handleCountryCodeSelect = useCallback((code: string) => {
    setFormState((prev) => ({ ...prev, countryCode: code }));
    setIsOpen(false);
  }, []);

  // Form submission
  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Validate all fields
      const errors: ValidationErrors = {
        phone: validatePhone(formState.userPhone),
        email: validateEmail(formState.userEmail),
        captcha: validateCaptcha(captchaInput, captcha),
      };

      setValidationErrors(errors);

      // Check if any errors exist
      if (Object.values(errors).some((error) => error)) {
        return;
      }

      setFormRes(true);

      try {
        const { data } = await axios.post(
          `https://nexon.eazotel.com/eazotel/addcontacts`,
          // FORM_API,
          {
              // email: formState.userEmail,
              // name: formState.userName,
              // phone: `${formState.countryCode}${formState.userPhone}`,
              // message: formState.userMessage,
              Domain: contacts.formDomain,
              email: formState.userEmail,
              Name: formState.userName,
              Contact: `${formState.countryCode}${formState.userPhone}`,
              Description: formState.userMessage,
              created_from: "webform",
              source_url: window.location.href
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        // if (data.success) {
        if (data.status) {
          // Reset form
          setFormState({
            userName: "",
            userEmail: "",
            userMessage: "",
            userPhone: "",
            countryCode: "+91",
          });
          setCaptchaInput("");
          setValidationErrors({});

          // Open thank you page
          window.open("/thank-you/", "_blank");
        } else {
          alert("Something went wrong! Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("An error occurred. Please try again later.");
      } finally {
        setFormRes(false);
      }
    },
    [
      formState,
      captchaInput,
      captcha,
      validateEmail,
      validatePhone,
      validateCaptcha,
    ]
  );

  // Memoized form configuration
  const formData = useMemo(
    () => [
      {
        tag: "input" as const,
        icon: <OutlineUserIcon />,
        type: "text",
        name: "name",
        placeholder: "Your Name*",
        required: true,
        value: formState.userName,
        onChange: (e: ChangeEvent<HTMLInputElement>) =>
          setFormState((prev) => ({ ...prev, userName: e.target.value })),
      },
      {
        tag: "div" as const,
        icon: <OutlineCallIcon />,
        name: "phone",
        placeholder: "Your Phone*",
        required: true,
        content: (
          <div className="flex gap-px text-base">
            {/* Custom country code dropdown */}
            <div
              ref={codeRef}
              className="relative border-white bg-transparent h-auto"
            >
              <button
                onClick={toggleCountryCodeDropdown}
                className="w-max pr-2 h-full flex items-center justify-between gap-2"
              >
                <span className="text-start text-blue-dark md:text-lg">
                  {formState.countryCode}
                </span>
                <OutlineDrpopdown
                  className={`text-orange-primary transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute top-full left-0 right-0 shadow-lg z-10 overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "max-h-40 opacity-100 pointer-events-auto w-28 overflow-y-auto hide-scrollbar rounded"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                {countries.map((country) => (
                  <button
                    key={country.name}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCountryCodeSelect(country.code);
                    }}
                    className={`w-full px-1 bg-white text-nowrap py-2 border-b border-clr6 text-left uppercase text-sm font-medium hover:text-clr2 hover:border-clr2 transition-colors duration-300 ease-in-out ${
                      formState.countryCode === country.code
                        ? "text-clr2 border-clr2 bg-blue-800"
                        : ""
                    }`}
                  >
                    {country.name} ({country.code})
                  </button>
                ))}
              </div>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              max="9999999999"
              placeholder="Your Phone Number*"
              value={formState.userPhone}
              onChange={handlePhoneChange}
              className="w-full bg-transparent rounded-md placeholder:text-black-primary text-black no-spinner focus:outline-none"
            />
          </div>
        ),
      },
      {
        tag: "input" as const,
        icon: <OutlineMail />,
        type: "email",
        name: "email",
        placeholder: "Your Email Id*",
        required: true,
        value: formState.userEmail,
        onChange: handleEmailChange,
      },
      {
        tag: "textarea" as const,
        icon: <OutlineMessageIcon />,
        type: "text",
        name: "message",
        placeholder: "Your Message*",
        required: true,
        value: formState.userMessage,
        onChange: (e: ChangeEvent<HTMLTextAreaElement>) =>
          setFormState((prev) => ({ ...prev, userMessage: e.target.value })),
      },
    ],
    [
      formState,
      isOpen,
      toggleCountryCodeDropdown,
      handleCountryCodeSelect,
      handlePhoneChange,
      handleEmailChange,
    ]
  );

  // WhatsApp URL based on pathname
  const whatsappUrl = `https://wa.me/${(pathname === "/uk" ? UK_NO : IND_NO).replace(/\s+/g, "")}?text=Hi%20Fielmente%20Team!%20I%20would%20like%20to%20know%20more%20about%20your%20hospitality%20marketing%20services.`;

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 max-md:px-4 p-6 text-base w-full"
    >
      <div className="flex flex-col gap-px items-center justify-center">
        <h2 className="text-xl lg:text-[1.8rem]/[2.5rem] font-normal text-blue-dark helv">
          CONTACT US
        </h2>
        <p className="text-gray-primary md:text-lg poppins">
          Our Team is Just a Message Away!
        </p>
      </div>

      {formData.map((data, index) => (
        <div key={index} className="flex flex-col gap-1">
          <div className="flex gap-2 text-gray-primary p-3 bg-white box_shadow2">
            <label
              htmlFor={data.name}
              className={data.tag === "textarea" ? "mt-1" : ""}
            >
              {data.icon}
            </label>
            {data.tag === "div"
              ? data.content
              : React.createElement(data.tag, {
                  id: data.name,
                  type: data.type,
                  name: data.name,
                  value: data.value,
                  onChange: data.onChange,
                  placeholder: data.placeholder,
                  required: data.required,
                  autoComplete: "off",
                  spellCheck: "false",
                  rows: data.tag === "textarea" ? 3 : undefined,
                  className:
                    "w-full bg-transparent no-spinner resize-none focus:outline-none rounded-md valid:outline-blue-primary invalid:outline-Saffron-primary",
                })}
          </div>

          {data.name === "phone" && validationErrors.phone && (
            <p className="text-sm text-red-500 mt-2">
              {validationErrors.phone}
            </p>
          )}
          {data.name === "email" && validationErrors.email && (
            <p className="text-sm text-red-500 mt-2">
              {validationErrors.email}
            </p>
          )}
        </div>
      ))}

      {/* CAPTCHA Component */}
      <CustomCaptchaForm
        isOpen={true}
        captcha={captcha}
        setCaptcha={setCaptcha}
        setCaptchaInput={handleCaptchaInputChange}
        captchaInput={captchaInput}
        error={validationErrors.captcha || ""}
      />

      <button
        type="submit"
        disabled={formRes}
        className="w-full text-center bg-orange-primary text-white justify-center border-orange-primary text-md px-8 py-3 md:text-lg font-semibold rounded-md hover:bg-white hover:text-orange-primary duration-300 active:scale-75 hover:scale-105 border border-blue-primary disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {formRes ? "Loading..." : "Get a Free Consultation"}
      </button>

      <Link
        target="_blank"
        href={whatsappUrl}
        className="text-blue-dark flex items-center justify-center gap-1 text-md font-semibold px-8 py-2 duration-300 active:scale-75 hover:scale-105 group"
      >
        <span className="mr-2">
          <WhatsAppIcon />
        </span>
        <span className="underline group-hover:no-underline">WhatsApp Now</span>
      </Link>
    </form>
  );
};

export default PopUpForm;
