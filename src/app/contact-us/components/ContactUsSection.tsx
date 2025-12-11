import ContactForm from "@/components/Forms/ConactForm";
import {
    SectionWithContainer
} from "@/components/sectionComponants";
import Link from "next/link";
import { FC } from "react";

interface formDataTypeProps {
  title: string;
  listOfLinks: {
    title: string;
    links: {
      label: string;
      href: string;
      icon: JSX.Element;
    }[];
  }[];
}
const ContactUsSection: FC<formDataTypeProps> = ({ title, listOfLinks }) => {
  return (
    <SectionWithContainer sectionClassName="contact_us_section max-md:!py-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-14">
        {/* content */}
        <div className="md:col-span-2 md:space-y-12 space-y-6 max-w-md max-md:order-2">
          <h2 className="text-white lg_font_s text-color font-medium md:max-w-sm" dangerouslySetInnerHTML={{ __html: title }} />
          {listOfLinks.map((item, index) => (
            <div key={index} className="flex flex-col gap-8">
              <h3 className="text-white md_font_s font-semibold">{item.title}</h3>
              <div className="flex flex-col gap-6">
                {item.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex md:text-xl gap-2 text-white"
                  >
                    <span className="mt-1">{link.icon}</span>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* form */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ContactUsSection;
