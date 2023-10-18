import React from 'react';

interface ByeProps {
  name: string;
}

const Bye = ({ name }: ByeProps) => {
  return <div>Bye {name}</div>;
};

export default Bye;
