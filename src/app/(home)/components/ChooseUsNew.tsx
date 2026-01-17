import { ChooseUsPropsType } from "@/@types/@types";
import { ChooseUsCard } from "@/components/cards";
import { SectionWithContainer } from "@/components/sectionComponants";
import { SectionHeadingDesc } from "@/components/typography";

const ChooseUsNew: React.FC<ChooseUsPropsType> = ({
  title,
  subTitle,
  cards,
  description,
  contentData,
}) => {
  return (
    <SectionWithContainer sectionClassName="md:relative md:before:content-[''] before:-right-2 overflow-hidden before:bottom-4 md:before:bg-[url('/home/waves.png')] before:bg-contain before:bg-no-repeat before:w-[153px] before:h-[30px] before:z-[-1] md:before:absolute ">
      <div className="md:space-y-14 space-y-8">
        <SectionHeadingDesc
          title={title}
          subTitle={subTitle}
          textcenter
          wrapperClassName="max-w-5xl mx-auto "
        />
        <div className="space-y-4 max-w-7xl mx-auto  w-full">
          {description.map((item, index) => (
            <p
              key={index}
              className="text-lg text-center text-[#6F6F6F]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
          {contentData.map((item, index) => (
            <div className="space-y-4" key={index}>
              <h3
                className="text-primary md_font_s font-semibold"
                dangerouslySetInnerHTML={{ __html: item.heading }}
              />
              <p
                className="md:text-xl"
                dangerouslySetInnerHTML={{ __html: item.body }}
              />
              <ul className="space-y-2 list-disc pl-6">
                {item.points.map((point, index) => (
                  <li
                    className="text-lg text-[#6F6F6F]"
                    key={index}
                    dangerouslySetInnerHTML={{ __html: point }}
                  />
                ))}
              </ul>
              {item?.description && (
                <p
                  className="md:text-lg text-[#6F6F6F]"
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                />
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <ChooseUsCard key={index} {...card} />
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default ChooseUsNew;
