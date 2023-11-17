import React, { Profiler, ProfilerOnRenderCallback, useState } from 'react';

import Memo from './Memo';
import Normal from './Normal';

const Test = () => {
  const [count, setCount] = useState<number>(0);

  const timesToRender = 10000;
  const renderTimes: number[] = [];
  const calculateAvgTime = () => {
    const totalTime = renderTimes.reduce((acc, cur) => acc + cur, 0);
    return totalTime / timesToRender;
  };
  const logAvgTime = () => {
    const totalTime = calculateAvgTime();
    console.log(renderTimes.length);
    console.log(totalTime);
  };

  const renderProfiler: ProfilerOnRenderCallback = (
    id: string,
    phase: 'mount' | 'update',
    actualDuration: number,
  ) => {
    const renderTime = actualDuration;
    renderTimes.push(renderTime);
  };

  return (
    <p>
      <button onClick={logAvgTime}>show avg Time</button>
      <button onClick={() => setCount((count) => count + 1)}>rerender</button>
      {[...Array(timesToRender)].map((_, index) => {
        return (
          <Profiler
            id={`normal-${index}`}
            key={`normal-${index}`}
            onRender={renderProfiler}
          >
            {/* <Normal level={1000} count={count} /> */}
            <Memo level={1000} count={count} />
          </Profiler>
        );
      })}
    </p>
  );
};

// 0.015229999998211861
// 0.07553999999687076

export default Test;
