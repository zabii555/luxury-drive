const features = [
  { icon: "fas fa-bolt", title: "Instant Performance", desc: "Lightning-fast acceleration and responsive handling" },
  { icon: "fas fa-shield-alt", title: "Premium Safety", desc: "Advanced safety systems for complete protection" },
  { icon: "fas fa-crown", title: "Luxury Interior", desc: "Handcrafted interiors with premium materials" },
  { icon: "fas fa-headset", title: "24/7 Concierge", desc: "Dedicated support for all your needs" },
];

const Features = () => {
  return (
    <section id="features" className="features">
      <h2 className="section-title">Why Choose <span className="gradient-text">AutoElite</span></h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <i className={feature.icon}></i>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;