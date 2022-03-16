import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 1rem 1rem;
`;

interface LayoutProps {
  siteTitle: string;
}

export const Footer: React.FC<LayoutProps> = ({ siteTitle }) => (
  <StyledFooter>
    © {new Date().getFullYear()} {siteTitle}
  </StyledFooter>
);
