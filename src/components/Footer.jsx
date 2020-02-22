import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 1rem 1rem;
`;

const Layout = ({ siteTitle }) => (
  <StyledFooter>
    © {new Date().getFullYear()} {siteTitle}
  </StyledFooter>
);

Layout.propTypes = {
  siteTitle: PropTypes.string,
};

export default Layout;
