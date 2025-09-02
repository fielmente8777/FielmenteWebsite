import { ServicesPropsType } from "@/@types/@types";
import Image from "next/image";

const AIPoweredServicesCard: React.FC<ServicesPropsType["cards"][0]> = ({
  imgSrc,
  title,
  description,
  imgClassName,
  imgWrapperClassName,
}) => {
  return (
    <div className="rounded-3xl min-h-[32rem] bg-white flex flex-col items-center px-6 py-8 gap-6">
      <div className="flex flex-col gap-4">
        <div className="w-full aspect-[4/3] md:aspect-[4/1.5] relative">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
        <h3 className="text-primary md_font_s font-semibold text-center">
          {title}
        </h3>
        {/* <div className="md:flex hidden items-center w-full">
            <div className="w-full aspect-[4/3] relative">
              <Image
                src={imgSrc}
                alt={title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div> */}
        {/* <div
            className={`absolute lg:block hidden ${imgWrapperClassName ? imgWrapperClassName : "right-2 -top-16 z-20"}`}
          >
            <div className={`relative ${imgClassName}`}>
              <Image
                src={imgSrc}
                alt={title}
                fill
                className="object-contain"
                priority
                sizes="100vw"
              />
            </div>
          </div> */}
      </div>
      <div className="h-[1px] bg-secondary w-[148px] mx-auto"></div>

      <p className="text-light text-xl text-center">{description}</p>
    </div>
  );
};

export default AIPoweredServicesCard;
