import * as React from 'react';

import { StyledContainer } from './StyledContainer';

export const Container: React.FC = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);
