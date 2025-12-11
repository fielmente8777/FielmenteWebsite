import Link from "next/link";

export interface ChooseCardProsData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  subIconTitle?: string;
  link: {
    label: string;
    href: string;
  };
}

export const OurServiceCard = ({
  title,
  subTitle,
  icon,
  subIconTitle,
  link,
}: ChooseCardProsData) => {
  return (
    <div
      className={`flex w-full flex-col gap-4 min-h-[25rem] shadow-md hover:shadow-none rounded-xl p-6 bg-white poppins ${subIconTitle && `border-[0.5px] border-orange-primary`}`}
    >
      <div className="flex items-center">{icon}</div>
      {subIconTitle && (
        <p className="text-[#F26633] uppercase">{subIconTitle}</p>
      )}

      <h2 className="font-semibold text-2xl text-[#110D3C] ">{title}</h2>

      <p className="text-base text-gray-primary">{subTitle}</p>

      <Link href={link.href} target="_blank" rel="noopener noreferrer" className="inline-block w-fit mt-auto bg-orange-primary font-medium text-white text-lg/[18px] py-3 px-4 rounded-md">{link.label}</Link>
    </div>
  );
};
