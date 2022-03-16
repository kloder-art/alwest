import * as React from 'react';

interface LinkProps {
  label?: string;
  href?: string;
  icon?: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({ href = '', label = '', icon }) => (
  <a href={href} target={'_blank'} rel={'noopener noreferrer'} title={label}>
    {icon ? icon : label}
  </a>
);
