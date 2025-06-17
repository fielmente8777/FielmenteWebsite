import Container from '@/components/Container';
import Section from '@/components/Section'
import React from 'react'
import { OurServiceCard } from './cards/OurServiceCard';


interface ChopseUsProps {
    title: string;
    subTitle?: string;
    description?: string;
    //   button?: {
    //     label: string;
    //     href: string;
    //   };
    items: { title: string; subTitle: string; icon: React.ReactNode, subIconTitle: string }[];
}
const ChooseUs = ({ title, subTitle, description, items }: ChopseUsProps) => {

    return (
        <Section>
            <Container>
                <div className="max-w-5xl mx-auto text-center space-y-8">
                    <h2 className="bg-[#FFE7DE] text-orange-primary uppercase text-sm rounded-full px-4 w-fit mx-auto py-2">
                        {title}
                    </h2>
                    <div className='flex flex-col gap-1'>
                        <h3 className="md:text-5xl leading-[16rem] font-medium text-[#110D3C]">
                            AI-Driven Innovations for the
                        </h3>
                        <h3 className="md:text-5xl leading-[16rem] font-bold text-[#110D3C]">
                            Hospitality Industry
                        </h3>
                    </div>

                </div>

                <div className="w-full  p-2 mt-12 grid grid-cols-3 gap-5">
                    {items.map((item, index) => (
                        <OurServiceCard key={index} {...item} />
                    ))}
                </div>

                {/* <div className="max-w-2xl mx-auto mt-12 text-center space-y-12">
                    <Link
                        className="inline-block bg-orange-primary text-white px-4 py-2 rounded-md"
                        href={`${button?.href}`}
                    >
                        {button?.label}
                    </Link>
                </div> */}
            </Container>
        </Section>
    )
}

export default ChooseUs