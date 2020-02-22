import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const StyledHeader = styled.header`
  margin-bottom: 1.45rem;
  padding: 1rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a.home {
    text-decoration: none;
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <h1 style={{ margin: 0 }}>
      <Link to={'/'} className={'home'}>
        {siteTitle}
      </Link>
    </h1>
    <Menu />
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
