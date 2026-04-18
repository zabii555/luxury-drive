import { useState } from 'react';
import CarDetails from './CarDetails';

const CarCard = ({ car }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="car-card" onClick={() => setShowDetails(true)}>
        <div className="car-image">
          <img src={car.image} alt={car.name} loading="lazy" />
          <div className="car-overlay">
            <button className="view-details-btn">View Details <i className="fas fa-arrow-right"></i></button>
          </div>
        </div>
        <div className="car-info">
          <div className="car-brand">{car.brand}</div>
          <h3>{car.name}</h3>
          <div className="car-price">{car.price}</div>
          <div className="car-specs">
            <span><i className="fas fa-tachometer-alt"></i> {car.horsepower}</span>
            <span><i className="fas fa-clock"></i> {car.acceleration.split('in')[1]?.trim() || car.acceleration}</span>
          </div>
        </div>
      </div>
      {showDetails && <CarDetails car={car} onClose={() => setShowDetails(false)} />}
    </>
  );
};

export default CarCard;