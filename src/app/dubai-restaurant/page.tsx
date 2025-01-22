import {
  Banner,
  ImageSection,
  OurServices,
  WhyChooseUs,
  OurClients,
  Testimonial,
} from "./components";

const page = () => {
  return (
    <main className="bg-white">
      <Banner />
      <ImageSection />
      <OurServices />
      <WhyChooseUs />
      <OurClients />
      <Testimonial />
    </main>
  );
};

export default page;
