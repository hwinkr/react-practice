import React from 'react';
import './index.css';

const getRandomDescription = () => {
  const REACT_DESCRIPTIONS = ['Fundemental', 'Crucial', 'Core'];
  const randomIndex = Math.floor(Math.random() * 3);

  return REACT_DESCRIPTIONS[randomIndex];
};

const Header = () => {
  const randomDescription = getRandomDescription();

  return (
    <header>
      <img src="/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
};

export default Header;
