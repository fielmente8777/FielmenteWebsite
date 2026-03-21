import { FaqsPropsType } from "@/@types/@types";
import { Accordion } from "@/components/cards";
import Form1 from "@/components/Forms/Form1";
import { SectionWithContainer } from "@/components/sectionComponants";

const Faqs: React.FC<FaqsPropsType> = ({ title, cards }) => {
  return (
    <SectionWithContainer sectionClassName="relative after:absolute after:bg-[url('/home/bgred.png')] after:bg-cover after:bg-repeat after:opacity-20 after:w-full after:h-full after:-top-[18%] after:right-0 after:z-[-2]">
      <h2 className="text-primary lg_font_s font-medium">{title}</h2>
      <div className="grid lg:grid-cols-[2fr_1fr] w-full gap-6 md:gap-10 mt-6">
        <div className="lg:space-y-14 space-y-8">
          <div className="divide-y divide-light border-y border-light">
            {cards.map((card, index) => (
              <Accordion key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="w-full">
          <Form1 />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Faqs;
