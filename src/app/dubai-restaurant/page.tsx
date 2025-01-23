import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "@/restaurant-lp-components";
import { dubaiRestaurantLandingPageData } from "@/utils/restaurantLandingPageData";

const page = () => {
  return (
    <main className="bg-white poppins">
      <Banner {...dubaiRestaurantLandingPageData.banner} />
      <ImageSection images={dubaiRestaurantLandingPageData.images}/>
      <OurServices {...dubaiRestaurantLandingPageData.services}/>
      <WhyChooseUs {...dubaiRestaurantLandingPageData.whyChooseUs}/>
      <OurClients {...dubaiRestaurantLandingPageData.ourClients}/>
      <Testimonial {...dubaiRestaurantLandingPageData.testimonial}/>
    </main>
  );
};

export default page;
