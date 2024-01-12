import React from 'react';

interface ConceptProps {
  title: string;
  description: string;
  imgPath: string;
}

const Concept = ({ title, description, imgPath }: ConceptProps) => {
  return (
    <li>
      <img src={imgPath} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default Concept;
