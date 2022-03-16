import React from 'react';

import { StyledFooter } from './StyledFooter';

interface LayoutProps {
  siteTitle: string;
}

export const Footer: React.FC<LayoutProps> = ({ siteTitle }) => (
  <StyledFooter>
    © {new Date().getFullYear()} {siteTitle}
  </StyledFooter>
);
