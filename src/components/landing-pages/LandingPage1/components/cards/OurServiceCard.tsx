export interface ChooseCardProsData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
}

export const OurServiceCard = ({
  title,
  subTitle,
  icon,
}: ChooseCardProsData) => {
  return (
    <div className="flex flex-col gap-4 shadow-md hover:shadow-none rounded-xl p-6 bg-white">
      <div className="flex items-center">{icon}</div>

      <h2 className="font-semibold text-2xl ">{title}</h2>

      <p className="text-base text-gray-primary">{subTitle}</p>
    </div>
  );
};
