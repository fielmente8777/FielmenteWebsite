import { Section } from "@/components";
import Image from "next/image";
import Slider from "./Slider";

const Banner = () => {
  const imagesUpper = [
    "/upper/upper1.jpg",
    "/upper/upper2.jpg",
    "/upper/upper3.jpg",
    "/upper/upper4.jpg",
    "/upper/upper5.jpg",
    "/upper/upper6.jpg",
  ];
  const imagesLower = [
    "/lower/lower1.jpg",
    "/lower/lower2.jpg",
    "/lower/lower3.jpg",
    "/lower/lower4.jpg",
    "/lower/lower5.jpg",
    "/lower/lower6.jpg",
  ];

  return (
    <Section className="grid lg:grid-cols-[1.2fr_1fr_1.2fr] grid-cols-1 items-center !p-0 max-md:gap-8">
      <div className="relative w-full aspect-[4/3.49] max-lg:hidden">
        <Image src="/Frame-0.png" alt="blog 1" fill className="object-cover" />
      </div>
      <div className="lg:hidden block">
        <Slider offersTitle={imagesUpper} direction="rtl" />
      </div>
      {/* content */}
      <div className="w-full flex flex-col gap-1">
        <p className="text-orange-primary text-center">EXPLORE OUR BLOGS</p>
        <h1 className="lg:text-4xl text-center text-3xl text-blue-dark ">
          Tailored Expert Advice from{" "}
          <span className="font-bold relative after:absolute after:content-[''] after:w-[100%] after:bg-contain after:bg-no-repeat after:bg-[url('/underline.png')] after:-bottom-4 after:h-[20px] after:left-0 after:z-10">
            Fielmente
          </span>
        </h1>
      </div>
      <div className="relative w-full aspect-[4/3.489] max-lg:hidden">
        <Image src="/Frame-1.png" alt="blog 1" fill className="object-cover" />
      </div>
      <div className="lg:hidden block">
        <Slider offersTitle={imagesLower} />
      </div>
    </Section>
  );
};

export default Banner;

//  <Container>
//         <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
//           <div className="flex flex-col gap-4 tracking-wider">
//             <h1 className="lg:text-5xl/tight text-3xl text-white">
//               Tailored Expert Advice <br className="md:block hidden" /> from {" "}
//               <strong className="relative after:absolute after:content-[''] after:w-[100%] after:bg-contain after:bg-no-repeat after:bg-[url('/underline.png')] after:-bottom-4 after:h-[20px] after:left-0 after:z-10 ">
//                 Fielmente.
//               </strong>
//             </h1>
//             <p className="text-base text-white md:pr-20">
//               Explore our blog for actionable insights and tactics to stay ahead
//               in hospitality marketing. Learn what really works and get ahead of
//               the game!
//             </p>
//           </div>

//           <div className="w-full relative md:h-[320px] h-[140px]">
//             <div className="absolute md:-top-20 -top-8 left-0 w-full h-full z-10">
//               <div className="relative w-full aspect-[4/3.5]">
//                 <Image
//                   src="/images/blogsbanner.webp"
//                   alt="alt"
//                   fill
//                   className="object-cover object-right-bottom"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
