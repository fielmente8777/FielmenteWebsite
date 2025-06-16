import Image from "next/image";
import { IndustryWeServeProps } from "../IndustryWeServe";

const IndustryWeServeCard: React.FC<IndustryWeServeProps["items"][0]> = ({
  image,
  title,
}) => {
  return (
    <div className="relative w-full md:aspect-[4/4] aspect-[4/3.8]">
      <Image
        src={image?.src}
        alt={image?.alt}
        fill
        className="object-cover"
        sizes="100%"
      />

      <div className="absolute inset-0 flex items-center justify-center  gap-6 md:px-12 px-10">
        <div>
          <h2 className="text-white text-center font-semibold playfair text-2xl tracking-wide">
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default IndustryWeServeCard;
