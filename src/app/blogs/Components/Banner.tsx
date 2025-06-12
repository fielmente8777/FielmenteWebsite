import { Container, Section } from "@/components";
import Image from "next/image";

const Banner = () => {
  return (
    <Section className="bg-blue-dark">
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="flex flex-col gap-4 tracking-wider">
            {/* <p className="text-lg text-blue-dark">We&apos;re focused on creating helpful content for hoteliers.</p> */}
            <h1 className="lg:text-5xl/tight text-3xl text-white">
              Tailored Expert Advice <br /> from {" "}
              <strong className="relative after:absolute after:content-[''] after:w-[100%] after:bg-contain after:bg-no-repeat after:bg-[url('/underline.png')] after:-bottom-4 after:h-[20px] after:left-0 after:z-10 ">
                Fielmente.
              </strong>
            </h1>
            <p className="text-base text-white md:pr-20">
              Explore our blog for actionable insights and tactics to stay ahead
              in hospitality marketing. Learn what really works and get ahead of
              the game!
            </p>
          </div>

          <div className="w-full relative h-full md:h-[320px]">
            <div className="md:absolute -top-20 left-0 w-full h-full z-10">
              <div className="relative w-full aspect-[4/3.5]">
                <Image
                  src="/images/blogsbanner.webp"
                  alt="alt"
                  fill
                  className="object-cover object-right-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
