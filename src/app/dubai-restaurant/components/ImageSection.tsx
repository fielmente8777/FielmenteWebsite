import { Container, Section } from "@/components";
import Image from "next/image";

const ImageSection = () => {
  const data = [
    {
      src: "/dubai/bestdigital.png",
      alt: "Best Digital Agency",
    },
    {
      src: "/dubai/google.png",
      alt: "Google",
    },
    {
      src: "/dubai/trustpilot.png",
      alt: "Trustpilot",
    },
  ];
  return (
    <Section className="border-t border-b border-gray-200">
      <Container>
        <div className="grid lg:grid-cols-3 gap-4 items-center">
          {data.map((item, index) => (
            <div key={index} className="relative aspect-[4/1.5] w-full">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain object-center"
              />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ImageSection;
