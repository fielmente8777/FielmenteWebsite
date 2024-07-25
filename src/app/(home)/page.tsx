import Container from "@/components/Container";
import Form from "../about/components/Form";
import {
  Banner,
  Strategise,
  Worked,
  ChooseUs,
  CardSection,
} from "./components";
import Section from "@/components/Section";

export async function generateStaticParams() {
  return [
    { params: {} },
  ];
}

export default function Home() {
  return (
    <main>
      <Banner />
      <Strategise />
      <Worked />
      <ChooseUs />
      <CardSection />
      <Section className="bg-blue-dark">
        <Container>
          <Form title="Schedule a meeting with our marketing consultant" />
        </Container>
      </Section>
    </main>
  );
}
