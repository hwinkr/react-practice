import React from 'react';

interface TabsProps {
  children: React.ReactNode;
  buttons: JSX.Element;
  ButtonContainer: keyof JSX.IntrinsicElements | React.FunctionComponent;
}

const Tabs = ({ children, buttons, ButtonContainer }: TabsProps) => {
  return (
    <>
      <ButtonContainer>{buttons}</ButtonContainer>
      {children}
    </>
  );
};

export default Tabs;
