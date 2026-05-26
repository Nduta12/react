import ServiceCard from "./ServiceCard";

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-grid">
        <ServiceCard
          title="Web Development"
          description="Modern websites built with React."
        />

        <ServiceCard
          title="UI/UX Design"
          description="Clean interfaces that users understand quickly."
        />

        <ServiceCard
          title="Backend Systems"
          description="APIs, databases, and business logic for real apps."
        />
      </div>
    </section>
  );
}

export default Services;
