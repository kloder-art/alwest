import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Menu from './Menu';

const StyledHeader = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
  
  .container {
    margin: 0 auto;
    max-width: 960px;
    padding: 1.45rem 1.0875rem;

    a.home {
      color: white;
      text-decoration: none;
    }
  }
`;

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <div className={'container'}>
      <h1 style={{ margin: 0 }}>
        <Link to={'/'} className={'home'}>
          {siteTitle}
        </Link>
      </h1>
      <Menu />
    </div>
  </StyledHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
