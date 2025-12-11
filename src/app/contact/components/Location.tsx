import { Card, Container, LazyLoadedMap, Section } from "@/components";
import Link from "next/link";

const Location: React.FC<{ src: string }> = ({ src }) => {
  return (
    <Section>
      <Container>
        <div className="">
          {/* <h2 className="text-2xl lg:text-[2rem]/[2.5rem] font-semibold text-blue-primary text-center">
            {title}
          </h2> */}
        </div>
        <div className="mt-8">
          <LazyLoadedMap src={src} />
        </div>
        {/* <div className="flex justify-center items-center mt-8 w-full">
          <Link
            href={"#contact"}
            className="flex gap-2 px-6 capitalize bg-blue-primary hover:bg-white hover:text-blue-primary hover:scale-x-110 duration-700 transition rounded-lg py-3 font-medium border border-solid border-blue-primary bg-primary text-white"
          >
            Get in touch
          </Link>
        </div> */}
      </Container>
    </Section>
  );
};

export default Location;
