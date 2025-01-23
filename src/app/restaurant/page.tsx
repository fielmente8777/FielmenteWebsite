import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "@/restaurant-lp-components";
import { restaurantLandingPageData } from "@/utils/restaurantLandingPageData";

const page = () => {
  return (
    <main className="bg-white poppins">
      <Banner {...restaurantLandingPageData.banner} />
      <ImageSection images={restaurantLandingPageData.images} />
      <OurServices {...restaurantLandingPageData.services} />
      <WhyChooseUs {...restaurantLandingPageData.whyChooseUs} />
      <OurClients {...restaurantLandingPageData.ourClients} />
      <Testimonial {...restaurantLandingPageData.testimonial} />
    </main>
  );
};

export default page;
