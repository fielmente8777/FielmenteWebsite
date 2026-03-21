import Headings from "./Headings";

interface SectionHeadingDescProps {
  title?: string;
  subTitle?: string;
  description?: string;
  descriptionColor?: string;
  textcenter?: boolean;
  titleColor?: string;
  subTitleColor?: string;
  smTextCenter?: boolean;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
  descriptionClassName?: string;
  mdTextCenter?: boolean;
  tagLevel?: number;
}

const SectionHeadingDesc: React.FC<SectionHeadingDescProps> = ({
  title,
  subTitle,
  description,
  descriptionColor,
  textcenter = false,
  titleColor,
  subTitleColor,
  smTextCenter = false,
  mdTextCenter = false,
  wrapperClassName = "",
  titleClassName = "",
  subTitleClassName = "",
  descriptionClassName = "",
  tagLevel,
}) => {
  return (
    <div className={`flex flex-col w-full gap-4 ${wrapperClassName}`}>
      {title && (
        <Headings
          level={tagLevel ?? 2}
          className={`${titleClassName} ${
            mdTextCenter ? "md:text-center md:mx-auto" : ""
          } ${textcenter ? "text-center mx-auto" : ""} ${
            smTextCenter ? "max-md:text-center" : ""
          } ${
            titleColor ? `text-${titleColor} bg-white` : "text-white bg-[#1c1c1c]"
          }  shadow-inner uppercase font-semibold text-lg py-2 px-4 w-fit rounded-full`}
          heading={title}
        />
      )}

      {subTitle && (
        <Headings
          // if tagLevel is provided (e.g., 1), subtitle becomes next level (2)
          // otherwise default to 3
          level={tagLevel ? tagLevel + 1 : 3}
          className={`${subTitleClassName} ${
            mdTextCenter ? "md:text-center" : ""
          } ${textcenter ? "text-center" : ""} ${
            smTextCenter ? "max-md:text-center" : ""
          } ${
            subTitleColor ? `text-${subTitleColor}` : "text-primary"
          } lg_font_s font-semibold`}
          heading={subTitle}
        />
      )}

      {description && (
        <p
          className={`${descriptionClassName} ${
            textcenter ? "text-center" : ""
          } ${smTextCenter ? "max-md:text-center" : ""} ${
            descriptionColor ? `text-${descriptionColor}` : "text-[#1c1c1c]"
          } md:text-lg text-base`}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  );
};

export default SectionHeadingDesc;
