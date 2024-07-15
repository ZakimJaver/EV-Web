import React, { useState } from 'react';
import './EVSelector.css';

const EVSelector: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const handleSelection = (type: string) => {
    setSelectedType(type);
    console.log("Selected " + selectedType)
  };

  const evTypes = [
    'Sedan', 'Minivan', 'Hatchback', 'SUV', 'Coupe', 'Wagon', 'Crossover', 'Truck', 'Undecided',
    'Hybrid', 'Convertible', 'Electric Sedan', 'Electric SUV', 'Electric Truck'
  ];

  return (
    <div className="ev-selector">
      <div className="header">
        <button className="menu-btn">☰</button>
        <nav>
          <a href="#browser">BROWSER</a>
          <a href="#incentives">INCENTIVES</a>
          <a href="#industry-map">INDUSTRY MAP</a>
          <a href="#service-providers">SERVICE PROVIDERS</a>
          <a href="#sustainability-tracker">SUSTAINABILITY TRACKER</a>
        </nav>
      </div>
      <h1>Select EV Make</h1>
      <div className="options-container">
        <div className="options">
          {evTypes.map((type) => (
            <button
              key={type}
              className={`option ${selectedType === type ? 'selected' : ''}`}
              onClick={() => handleSelection(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
      <div className="navigation">
        <button className="nav-btn">BACK</button>
        <button className="nav-btn">NEXT</button>
      </div>
    </div>
  );
};

export default EVSelector;
