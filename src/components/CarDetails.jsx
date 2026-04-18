import { useEffect } from 'react';

const CarDetails = ({ car, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        <div className="modal-image">
          <img src={car.image} alt={car.name} />
        </div>
        <div className="modal-info">
          <div className="modal-brand">{car.brand}</div>
          <h2>{car.name}</h2>
          <div className="modal-price">{car.price}</div>
          <div className="modal-specs">
            <div className="spec">
              <i className="fas fa-microchip"></i>
              <span>{car.engine}</span>
            </div>
            <div className="spec">
              <i className="fas fa-tachometer-alt"></i>
              <span>{car.horsepower}</span>
            </div>
            <div className="spec">
              <i className="fas fa-clock"></i>
              <span>{car.acceleration}</span>
            </div>
            <div className="spec">
              <i className="fas fa-gauge-high"></i>
              <span>{car.topSpeed}</span>
            </div>
          </div>
          <p className="modal-description">{car.description}</p>
          <button className="btn-primary">Inquire Now <i className="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;