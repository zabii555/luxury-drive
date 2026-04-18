const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3><i className="fas fa-car"></i> AutoElite</h3>
          <p>Experience the pinnacle of automotive luxury and performance.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#cars">Cars</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Dubai, UAE</li>
            <li><i className="fas fa-phone"></i> +971 50 123 4567</li>
            <li><i className="fas fa-envelope"></i> info@autoelite.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Newsletter</h4>
          <p>Subscribe for latest updates</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button><i className="fas fa-paper-plane"></i></button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 AutoElite. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;