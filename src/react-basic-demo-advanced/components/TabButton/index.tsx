import React, { HTMLAttributes } from 'react';

type StaticPropsWithChildren<T = unknown> = T & { children: React.ReactNode };

interface TabButtonProps extends HTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
}

const TabButton = ({
  children,
  isSelected,
  ...props
}: StaticPropsWithChildren<TabButtonProps>) => {
  return (
    <li>
      <button className={isSelected ? 'active' : ''} {...props}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
