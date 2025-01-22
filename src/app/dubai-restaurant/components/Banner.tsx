import { Container, Form2, Section } from "@/components";

const Banner = () => {
  return (
    <Section className="bg-banner" >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="col-span-1 lg:col-span-2 flex flex-col justify-center gap-4 w-full max-w-[47rem] lg:pe-12">
            <p className="text-sm text-orange-primary">
              Dubai’s #1 Rated Restaurant Marketing Agency
            </p>
            <h1 className="text-3xl lg:text-5xl/tight text-blue-dark ">
              <strong>Outsmart the competition</strong> with{" "}
              <b>
                <span className="text-orange-primary">
                  best-in-class restaurant
                </span>{" "}
                marketing services
              </b>
              .
            </h1>
            <p className="text-gray-tertiary">
              Acquire more customers. Increase your sales.{" "}
              <strong>Fielmente</strong> works for restaurants of all sizes.
            </p>
          </div>
          <div className="col-span-1 lg:col-span-1">
            <Form2
              title="Grow Your Restaurant!"
              bold="Partner with Fielmente"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Banner;
