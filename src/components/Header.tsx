import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import { Menu } from './Menu';

const StyledHeader = styled.header`
  padding: 1rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a.home {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

interface HeaderProps {
  siteTitle: string;
}

export const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link to={'/'} className={'home'}>
        {siteTitle}
      </Link>
    </h1>
    <Menu />
  </StyledHeader>
);
