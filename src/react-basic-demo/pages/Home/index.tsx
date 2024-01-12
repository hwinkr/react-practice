import React, { useState } from 'react';

import Concept from '../../components/Concept';
import Header from '../../components/Header';
import TabButton from '../../components/TabButton';
import Topic from '../../components/Topic';
import { CORE_CONCEPTS, EXAMPLES } from '../../constants/component-data';

type SelectedTopic = 'components' | 'jsx' | 'props' | 'state' | null;

const Home = () => {
  const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>(null);

  const handleClick = (text: SelectedTopic) => {
    setSelectedTopic(text);
  };
  const isActiveTopic = (topic: SelectedTopic) => selectedTopic === topic;

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept, index) => (
              <Concept {...concept} key={index} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={isActiveTopic('components')}
              onClick={() => handleClick('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={isActiveTopic('jsx')}
              onClick={() => handleClick('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={isActiveTopic('props')}
              onClick={() => handleClick('props')}
            >
              Props
            </TabButton>
          </menu>
          {!selectedTopic && <p>please select topic</p>}
          {selectedTopic && <Topic {...EXAMPLES[selectedTopic]} />}
        </section>
      </main>
    </div>
  );
};

export default Home;
