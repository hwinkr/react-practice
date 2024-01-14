import React from 'react';

interface TopicProps {
  title: string;
  description: string;
  code: string;
}

const Topic = ({ title, description, code }: TopicProps) => {
  return (
    <div id="tab-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <pre>{code}</pre>
    </div>
  );
};

export default Topic;
