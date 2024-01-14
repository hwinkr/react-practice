import React from 'react';

import { CORE_CONCEPTS } from '../../constants/component-data';
import Section from '../../Section';
import Concept from '../Concept';

const CoreConcepts = () => {
  return (
    <Section title="Core Concepts" id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((concept, index) => (
          <Concept {...concept} key={index} />
        ))}
      </ul>
    </Section>
  );
};

export default CoreConcepts;
