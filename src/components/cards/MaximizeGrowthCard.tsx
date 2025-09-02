import { MaximizeGrowthPropsType } from "@/@types/@types";

const MaximizeGrowthCard: React.FC<MaximizeGrowthPropsType["cards"][0]> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="px-6 py-8 bg-white max-lg:md max-lg:min-h-[22rem] rounded-3xl flex flex-col gap-4">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-primary md_font_s font-semibold lg:max-w-[50%]">{title}</h3>
        <span className="w-fit">{icon}</span>
      </div>
      {/* border */}
      <div className="h-[1px] bg-secondary w-[148px]"></div>

      <p className="text-light text-xl">{description}</p>
    </div>
  );
};

export default MaximizeGrowthCard;
