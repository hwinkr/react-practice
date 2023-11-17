import React from 'react';

interface Props {
  level: number;
  count: number;
}

const Normal = ({ level, count }: Props) => {
  const complexObject = {
    values: [] as Record<string, string>[],
  };
  for (let i = 0; i <= level; i++) {
    complexObject.values.push({ test: 'test' });
  }

  return <div>Benchmark level: {level}</div>;
};
export default Normal;
