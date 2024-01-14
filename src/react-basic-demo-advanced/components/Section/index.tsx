import React, { HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
