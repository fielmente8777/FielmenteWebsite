import { OurProductsProps } from "../OurProduct";

const ProductCard: React.FC<OurProductsProps["items"][0]> = ({icon,title,subTitle}) => {
    return (
        <div className="flex flex-col gap-4 text-center bg-white shadow-md hover:shadow-none rounded-3xl md:px-5 px-[1rem] py-8">
            <div className="flex items-center justify-center">{icon}</div>
            <h2 className="font-semibold text-2xl text-[#110D3C] ">{title}</h2>
            <p className="text-lg text-gray-primary">{subTitle}</p>
        </div>
    );
}

export default ProductCard;