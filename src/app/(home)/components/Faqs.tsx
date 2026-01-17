import { FaqsPropsType } from "@/@types/@types";
import { Accordion } from "@/components/cards";
import Form1 from "@/components/Forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";

const Faqs: React.FC<FaqsPropsType> = ({ title, cards }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:bg-[url('/home/bgred.png')] after:bg-cover after:bg-repeat after:opacity-20 after:w-full after:h-full after:-top-[18%] after:right-0 after:z-[-2]">
      <div className="flex flex-col w-full flex-shrink-0 gap-6 md:gap-10">
        <div className="lg:space-y-14 space-y-8">
          <h2 className="text-primary lg_font_s font-medium">{title}</h2>
          <div className="divide-y divide-light border-y border-light">
            {cards.map((card, index) => (
              <Accordion key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="lg:col-span-1 max-w-5xl mx-auto w-full">
          <Form1 />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Faqs;
