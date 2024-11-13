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
    <div className="rounded-sm group lg:mb-0 mb-5 hover:shadow-lg p-4 border border-gray-400">
      {src && (
        <div className="relative w-full aspect-[4/2.5] overflow-hidden rounded-sm">
          <Link href={`/${link}/`}>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover group-hover:scale-110 transition duration-300"
            />
          </Link>
        </div>
      )}
      <div className="flex justify-start flex-col items-start gap-4 mt-5">
        <Link href={`/${link}/`} className={`${index === 0 ? "text-4xl" : "text-xl"} text-blue-dark  font-semibold`}>
          {title}
        </Link>
        <p className="text-[#787878] text-base">{description}</p>
        <div className="flex justify-center mt-2">
          <Link
            href={`/${link}/`}
            className="text-base text-white bg-orange-primary border border-orange-primary hover:bg-white hover:text-orange-primary  px-4 py-2 font-normal"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};
