import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import { features } from "../data/features";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white" id="why-choose-us">
      <Container>
        <SectionTitle
          title="Why Choose Nurtured Knots"
          subtitle="Every creation is designed to bring joy, warmth, and lasting memories."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              {...feature}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}