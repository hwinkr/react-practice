import React from 'react';

type StaticPropsWithChildren<T = unknown> = T & { children: React.ReactNode };

interface TabButtonProps {
  onClick: () => void;
  isSelected: boolean;
}

const TabButton = ({
  children,
  onClick,
  isSelected,
}: StaticPropsWithChildren<TabButtonProps>) => {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} onClick={onClick}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
