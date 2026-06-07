const testimonials = [
  {
    name: "Ramesh Kumar",
    location: "Bengaluru",
    review:
      "The spices are fresh and authentic. It reminds me of my village food."
  },
  {
    name: "Priya Shetty",
    location: "Mangalore",
    review:
      "Excellent quality products. The honey and pepper are my favorites."
  },
  {
    name: "Suresh Naik",
    location: "Hubli",
    review:
      "Fast delivery and natural products. Highly recommended."
  }
];

function Testimonials() {
  return (
    <section className="testimonial-section">
      <div className="container">

        <h2 className="section-title">
          What Our Customers Say
        </h2>

        <p className="section-subtitle">
          Trusted by families who love authentic natural products.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <h4>{item.name}</h4>

              <span>{item.location}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;