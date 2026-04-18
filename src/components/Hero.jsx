const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">✦ Since 1995 ✦</span>
        </div>
        <h1>
          <span className="gradient-text">Drive the Future</span>
          <br />
          With AutoElite
        </h1>
        <p>Experience the pinnacle of automotive engineering and luxury. Discover our collection of world-class vehicles.</p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Cars <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn-secondary">
            <i className="fas fa-play"></i> Watch Demo
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Luxury Models</p>
          </div>
          <div className="stat">
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>24/7</h3>
            <p>Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;