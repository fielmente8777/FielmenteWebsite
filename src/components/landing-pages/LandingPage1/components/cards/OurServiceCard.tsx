export interface ChooseCardProsData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  subIconTitle?: string;
}

export const OurServiceCard = ({
  title,
  subTitle,
  icon,
  subIconTitle,
}: ChooseCardProsData) => {
  return (
    <div
      className={`flex w-full flex-col gap-4 shadow-md hover:shadow-none rounded-xl p-6 min-h-72 bg-white poppins ${subIconTitle && `border-[0.5px] border-orange-primary`}`}
    >
      <div className="flex items-center">{icon}</div>
      {subIconTitle && (
        <p className="text-[#F26633] uppercase">{subIconTitle}</p>
      )}

      <h2 className="font-semibold text-2xl text-[#110D3C] ">{title}</h2>

      <p className="text-base text-gray-primary">{subTitle}</p>
    </div>
  );
};
