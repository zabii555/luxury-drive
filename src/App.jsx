import { useState } from "react";
import "./App.css";
import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CarCard from "./components/CarCard";
import Features from "./components/Features";
import Footer from "./components/Footer";
import { carsData } from "./data/carsData";

function App() {
  const [activeSection, setActiveSection] = useState("cars");

  return (
    <div className="app">
      <CursorGlow />
      <Navbar />
      <Hero />

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">
            About <span className="gradient-text">AutoElite</span>
          </h2>
          <div className="about-content">
            <div className="about-text">
              <h3>Premium Luxury Car Dealership</h3>
              <p>
                AutoElite is a premier luxury car dealership specializing in
                high-performance vehicles from the world's most prestigious
                manufacturers. Since 1995, we have been providing exceptional
                service to car enthusiasts and collectors worldwide.
              </p>
              <p>
                Our showroom features an exclusive collection of supercars,
                hypercars, and luxury vehicles, each meticulously inspected and
                certified by our expert technicians.
              </p>
              <div className="about-stats">
                <div className="about-stat">
                  <i className="fas fa-calendar-alt"></i>
                  <span>30+ Years</span>
                  <p>of Excellence</p>
                </div>
                <div className="about-stat">
                  <i className="fas fa-smile"></i>
                  <span>5000+</span>
                  <p>Happy Clients</p>
                </div>
                <div className="about-stat">
                  <i className="fas fa-trophy"></i>
                  <span>50+</span>
                  <p>Industry Awards</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1764013290728-b4ccc4c87fad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fEx1eHVyeSUyMENhciUyMFNob3dyb29tfGVufDB8fDB8fHww"
                alt="Luxury Car Showroom"
              />
              {/* <div className="about-image-overlay">
                <i className="fas fa-play-circle"></i>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Tools Section */}
      <section id="tools" className="tools-section">
        <div className="container">
          <h2 className="section-title">
            Luxury <span className="gradient-text">Tools & Services</span>
          </h2>
          <p className="section-subtitle">
            Experience premium services designed for elite clientele
          </p>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>Custom Configuration</h3>
              <p>
                Personalize your dream car with unlimited customization options,
                from leather stitching to carbon fiber accents.
              </p>
              <span className="tool-tag">Premium</span>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-headset"></i>
              </div>
              <h3>24/7 Concierge</h3>
              <p>
                Dedicated personal assistant available around the clock for all
                your automotive needs and inquiries.
              </p>
              <span className="tool-tag">Elite</span>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-tools"></i>
              </div>
              <h3>White-Glove Service</h3>
              <p>
                At-home delivery, maintenance, and pickup service. We come to
                you, wherever you are.
              </p>
              <span className="tool-tag">Luxury</span>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Investment Advisory</h3>
              <p>
                Expert guidance on classic and limited-edition vehicles as
                alternative investment assets.
              </p>
              <span className="tool-tag">Expert</span>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Extended Warranty</h3>
              <p>
                Comprehensive warranty coverage up to 7 years with global
                roadside assistance included.
              </p>
              <span className="tool-tag">Protection</span>
            </div>
            <div className="tool-card">
              <div className="tool-icon">
                <i className="fas fa-exchange-alt"></i>
              </div>
              <h3>Trade-In Program</h3>
              <p>
                Seamless trade-in process with fair market value assessment and
                instant offers.
              </p>
              <span className="tool-tag">Flexible</span>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Collection Section */}
      <section id="cars" className="cars-section">
        <div className="container">
          <h2 className="section-title">
            Our <span className="gradient-text">Premium Collection</span>
          </h2>
          <p className="section-subtitle">
            Discover the world's most exclusive luxury vehicles
          </p>
          <div className="cars-grid">
            {carsData.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container">
          <h2 className="section-title">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="section-subtitle">
            What our elite clients say about us
          </p>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>
                "AutoElite provided an exceptional experience. The team's
                attention to detail and professionalism is unmatched. Highly
                recommended!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Client"
                />
                <div>
                  <h4>James Anderson</h4>
                  <span>CEO, Anderson Group</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>
                "The custom configuration process was seamless. My dream car was
                delivered exactly as imagined. Thank you, AutoElite!"
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/women/68.jpg"
                  alt="Client"
                />
                <div>
                  <h4>Sarah Williams</h4>
                  <span>Entrepreneur</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <i className="fas fa-quote-left"></i>
              <p>
                "Best luxury car dealership I've ever worked with. Their
                investment advisory helped me secure a rare collector's piece."
              </p>
              <div className="testimonial-author">
                <img
                  src="https://randomuser.me/api/portraits/men/45.jpg"
                  alt="Client"
                />
                <div>
                  <h4>Michael Chen</h4>
                  <span>Investor</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h3>
              Subscribe to <span className="gradient-text">Luxury Updates</span>
            </h3>
            <p>
              Be the first to know about new arrivals, exclusive events, and
              special offers.
            </p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email address" />
              <button>
                Subscribe <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Features />
      <Footer />
    </div>
  );
}

export default App;
