import { Container, Section } from "@/components";
import { Tick } from "@/utils/icons";
import Image from "next/image";

const WhyChooseUs = () => {
  const data = {
    src: "/dubai/WhyChooseUs.png",
    title: "Why Choose Us",
    mainTitle: "10+ Years Of Experience In Restaurant Marketing",
    description:
      "We are a top-rated restaurant marketing agency specializing in restaurants, cafes, bars, fine dining, and cloud kitchens in Dubai, UAE.",
    items: [
      {
        title: "Boost your Organic Reach by 30% with the Latest Trends",
        description:
          "We deliver a minimum of 30% enhanced organic reach by utilizing the latest trends and a deep understanding of algorithms.",
      },
      {
        title: "50% Higher Coverage of Digital Platforms",
        description:
          "We focus on all key complementary platforms, such as Google My Business and visually impressive websites.",
      },
    ],
  };
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="relative w-full aspect-[4/2.8] flex items-center justify-center">
            <Image
              src={data.src}
              alt={data.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-sm text-orange-primary">{data.title}</p>
            <h2 className="text-2xl lg:text-4xl/tight font-semibold text-blue-dark">
              {data.mainTitle}
            </h2>
            <p className="text-[#3B3B3B]">{data.description}</p>
            {data.items.map((item, index) => (
              <div
                key={index}
                className={`flex gap-4 px-4 py-6 ${index === 1 && "bg-[#E8F1F2] rounded-2xl"}`}
              >
                <span>
                  <Tick />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="lg:text-lg  font-semibold text-blue-dark">
                    {item.title}
                  </h3>
                  <p className="text-[#3B3B3B] lg:text-base text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default WhyChooseUs;
