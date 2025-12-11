import Link from "next/link";
import { OurProductsProps } from "../OurProduct";

const ProductCard: React.FC<OurProductsProps["items"][0]> = ({
  icon,
  title,
  subTitle,
  link,
}) => {
  return (
    <div className="flex flex-col gap-4 max-sm:min-h-[24.4rem] min-h-[25rem] text-center bg-white shadow-md hover:shadow-none rounded-3xl md:px-5 px-3 py-8">
      <div className="flex items-center justify-center">{icon}</div>
      <h2 className="font-semibold max-sm:px-8 text-2xl text-[#110D3C] ">
        {title}
      </h2>
      <p className="md:text-lg text-gray-primary">{subTitle}</p>
      <Link
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-fit mx-auto mt-auto bg-orange-primary font-medium text-white text-lg/[18px] py-3 px-4 rounded-md"
      >
        {link.label}
      </Link>
    </div>
  );
};

export default ProductCard;
