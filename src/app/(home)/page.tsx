import Container from "@/components/Container";

import {
  Banner,
  Strategise,
  Worked,
  ChooseUs,
  CardSection,
} from "./components";
import Section from "@/components/Section";
import Form from "../about-fielmente-best-hospitality-marketing-agency/components/Form";
import { PopupForm } from "../landing-page/components";

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
      <PopupForm />
    </main>
  );
}
