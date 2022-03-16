import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin: 0 1rem;
`;

export const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
