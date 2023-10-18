import React, { useState } from 'react';

import ParentMemo from './Parent&Child/Parent';

function App() {
  console.log('app component rerendered');
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <ParentMemo>
        <div>hello, world</div>
      </ParentMemo>
      <button onClick={() => setOpen((prev) => !prev)}>리렌더링 트리거</button>
    </>
  );
}

export default App;
