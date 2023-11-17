import React, { useMemo } from 'react';

interface Props {
  level: number;
  count: number;
}

const Memo = ({ level, count }: Props) => {
  const complexObject = useMemo(() => {
    const result = {
      values: [] as Record<string, string>[],
    };

    for (let i = 0; i <= level; i++) {
      result.values.push({ test: 'mytest' });
    }
    return result;
  }, [level]);

  return <div>Benchmark with memo level: {level}</div>;
};
export default Memo;
