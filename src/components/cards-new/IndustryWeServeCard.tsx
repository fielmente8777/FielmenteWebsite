import { IndustryWeServeDataTypes } from "@/@types/@homeType";
import Image from "next/image";

const IndustryWeServeCard: React.FC<
  IndustryWeServeDataTypes["cards"][0] & { index: number; activeSlide: number }
> = ({ title, imgSrc, desc, index, activeSlide }) => {
  return (
    <div
      className={`w-full  relative overflow-hidden rounded-2xl transition-all duration-300 aspect-[4/4.75] ${index === activeSlide ? "md:aspect-[4/4.75]" : "md:aspect-[4/4.5] md:mt-3"}`}
    >
      <Image
        src={imgSrc}
        alt={title}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
        {index !== activeSlide && (
          <div className="absolute inset-x-0 top-0 h-25 bg-linear-to-b from-black/80 to-black/10" />
        )}
        {index !== activeSlide && (
          <div className="absolute inset-x-0 bottom-0 h-25 bg-linear-to-t from-black/80 to-black/10" />
        )}
        {index !== activeSlide && (
          <div className="absolute inset-0 bg-black/40" />
        )}
         
      <div className="absolute inset-0 flex flex-col font-medium justify-between p-6 text-white">
        <h3 className="text-xl md:text-[27.64px] font-semibold">{title}</h3>
        <p className="md:text-lg text-[17.85px] font-medium">{desc}</p>
      </div>
    </div>
  );
};

export default IndustryWeServeCard;
