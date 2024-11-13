import { Container, Section } from "@/components";
import Image from "next/image";

const Banner = () => {
  return (
    <Section>
      <Container>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="lg:col-span-2 flex flex-col gap-4 tracking-wider">
            <p className="text-lg text-blue-dark">We&apos;re focused on creating helpful content for hoteliers.</p>
            <h1 className="lg:text-5xl text-3xl text-blue-dark">
              Expert Advice from{" "}
              <strong className="text-orange-primary">Fielmente.</strong>
            </h1>
            <p className="text-base text-blue-dark">
              Explore our blog for actionable insights and tactics to stay ahead
              in hospitality marketing. Learn what really works and get ahead of
              the game!
            </p>
          </div>

          <div className="">
            <Image
              src="/images/blogsbanner.webp"
              alt="alt"
              width={448}
              height={336}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
