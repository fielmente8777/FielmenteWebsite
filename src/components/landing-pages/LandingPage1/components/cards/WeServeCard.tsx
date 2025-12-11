import Image from "next/image";
import { IndustryWeServeProps } from "../IndustryWeServe";

const IndustryWeServeCard: React.FC<IndustryWeServeProps["items"][0]> = ({
  image,
  title,
}) => {
  return (
    <div className="relative group w-full md:aspect-[4/4] aspect-[4/3.8] overflow-hidden">
      <Image
        src={image?.src}
        alt={image?.alt}
        fill
        className="object-cover group-hover:scale-125 duration-500"
        sizes="100%"
      />

      <div className="absolute inset-0 flex items-center justify-center gap-6 md:px-12 px-10">
        <div>
          <h2 className="text-white text-center font-semibold playfair text-2xl tracking-wide poppins">
            {title}
          </h2>
        </div>
      </div>
      {image?.desc && (
        <div className="absolute bottom-0 w-full bg-black/40 translate-y-full group-hover:translate-y-0 py-4 px-6 duration-200 transition-all ease-in-out">
          <p className="md:text-lg text-white">{image.desc}</p>
        </div>
      )}
    </div>
  );
};

export default IndustryWeServeCard;
