import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 1rem;
`;

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
