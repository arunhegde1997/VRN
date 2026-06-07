import {
  FaLeaf,
  FaTractor,
  FaShieldAlt,
  FaHandsHelping
} from "react-icons/fa";

const features = [
  {
    icon: <FaLeaf />,
    title: "100% Natural",
    description: "Pure and natural products with no artificial additives."
  },
  {
    icon: <FaTractor />,
    title: "Farm Fresh",
    description: "Directly sourced from trusted farmers in Uttara Kannada."
  },
  {
    icon: <FaShieldAlt />,
    title: "Chemical Free",
    description: "Free from harmful chemicals and preservatives."
  },
  {
    icon: <FaHandsHelping />,
    title: "Direct from Farmers",
    description: "Supporting local farmers and sustainable agriculture."
  }
];

function WhyChooseUs() {
  return (
    <section className="why-section">
      <div className="container">

        <h2 className="section-title">
          Why Choose VedanthRam Naturals?
        </h2>

        <p className="section-subtitle">
          We are committed to delivering authentic, healthy and natural products.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;