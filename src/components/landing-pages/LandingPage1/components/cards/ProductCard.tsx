import { OurProductsProps } from "../OurProduct";

const ProductCard: React.FC<OurProductsProps["items"][0]> = ({icon,title,subTitle}) => {
    return (
        <div className="flex flex-col gap-4 max-sm:min-h-[21.4rem] text-center bg-white shadow-md hover:shadow-none rounded-3xl md:px-5 px-3 py-8">
            <div className="flex items-center justify-center">{icon}</div>
            <h2 className="font-semibold max-sm:px-8 text-2xl text-[#110D3C] ">{title}</h2>
            <p className="md:text-lg text-gray-primary">{subTitle}</p>
        </div>
    );
}

export default ProductCard;