import * as React from 'react';
import { Link } from 'gatsby';

import { Menu } from '../Menu';
import { StyledHeader } from './StyledHeader';

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
