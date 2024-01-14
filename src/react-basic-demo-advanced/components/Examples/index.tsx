import React, { useState } from 'react';

import { EXAMPLES } from '../../constants/component-data';
import Section from '../../Section';
import Tabs from '../../Tabs';
import TabButton from '../TabButton';
import Topic from '../Topic';

type SelectedTopic = 'components' | 'jsx' | 'props' | 'state' | null;

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState<SelectedTopic>(null);

  const handleClick = (text: SelectedTopic) => {
    setSelectedTopic(text);
  };
  const isActiveTopic = (topic: SelectedTopic) => selectedTopic === topic;

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
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
            <TabButton
              isSelected={isActiveTopic('state')}
              onClick={() => handleClick('state')}
            >
              State
            </TabButton>
          </>
        }
      >
        {!selectedTopic && <p>please select topic</p>}
        {selectedTopic && <Topic {...EXAMPLES[selectedTopic]} />}
      </Tabs>
    </Section>
  );
};

export default Examples;
