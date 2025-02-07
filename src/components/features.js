import React from "react";
import "./features.css"; 

const features = [
  {
    title: "Why BIZDOOR?",
    description:
      "BIZDOOR is a tech-enabled, AI-driven platform where our dedicated professionals offer top-tier legal and financial services to clients.",
    icon: "📊",
  },
  {
    title: "India's Largest Legal Tech Company",
    description:
      "BIZDOOR specializes in business registration, taxation, and licensing services. We boast a vast network of experienced professionals.",
    icon: "🏛️",
  },
  {
    title: "99.9% Client Satisfaction",
    description:
      "We continuously strive to enhance the quality of services provided by our industry experts to meet your specific requirements.",
    icon: "✅",
  },
  {
    title: "Excellent Advisory Services",
    description:
      "With the largest professional network, we offer top-notch advisory services, ensuring you encounter no complications.",
    icon: "💼",
  },
];

const Features = () => {
  return (
    <section className="why-choose-section">
      <h2>
        Why Choose <span>BIZDOOR</span>
      </h2>
      <p>
        <strong>BIZDOOR</strong> is a dynamic platform dedicated to offering
        professional services across India. Our commitment to excellence is
        evident in the exceptional services we deliver to our clients.
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-box">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
