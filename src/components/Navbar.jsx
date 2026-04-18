import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h2><i className="fas fa-car"></i> AutoElite</h2>
      </div>
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#cars">Cars</a>
        <a href="#features">Features</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;