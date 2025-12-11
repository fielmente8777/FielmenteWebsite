import Container from "./Container";
import Form from "./Form";
import Section from "./Section";

const ConsultationForm2 = () => {
  return (
    <section className="lg:py-36 bg-white max-w-[1540px] mx-auto w-full">
      <Section className="bg-blue-dark">
        <Container>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 lg:relative">
            <div>
              <h2 className="text-white lg:text-4xl/snug text-2xl">
                Are You Looking for the Best Cloud Kitchen Marketing{" "}
                <b className="text-orange-primary">Agency?</b>
              </h2>
              <p className="text-white lg:text-xl text-base  mt-4">
                For effective cloud kitchen marketing that stands out, fill out
                the form to get in touch with us today! Let’s elevate your brand
                together!
              </p>
            </div>
            <div className="lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 lg:right-0">
              <Form />
            </div>
          </div>
        </Container>
      </Section>
    </section>
  );
};

export default ConsultationForm2;
