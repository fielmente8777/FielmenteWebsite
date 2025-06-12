import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export const BlogCard = ({
  src,
  alt,
  title,
  link,
  description,
  index,
}: {
  src?: string | StaticImageData;
  alt: string;
  title: string;
  link: string;
  description?: string;
  index?: number;
}) => {
  return (
    <Link
      href={`/${link}/`}
      className="rounded-[8px] overflow-hidden group lg:mb-0 mb-5 shadow-lg "
    >
      {src && (
        <div className="relative w-full aspect-[4/2.5] overflow-hidden rounded-sm">
          <div>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-resize group-hover:scale-110 transition duration-300"
            />
          </div>
        </div>
      )}
      <div className="px-4 py-6 flex justify-start flex-col items-start gap-4 mt-5">
        <h4 className={`text-2xl text-blue-dark line-clamp-2`}>{title}...</h4>
        <p className="text-[#787878] text-base md:text-[18px] line-clamp-4">{description}...</p>
        {/* <div className="flex justify-center mt-2">
          <Link
            href={`/${link}/`}
            className="text-base text-white bg-orange-primary border border-orange-primary hover:bg-white hover:text-orange-primary  px-4 py-2 font-normal"
          >
            READ MORE
          </Link>
        </div> */}
      </div>
    </Link>
  );
};
