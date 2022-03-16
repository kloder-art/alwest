import styled from 'styled-components';

export const StyledHeader = styled.header`
  padding: 1rem 1.0875rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 1999;
  width: 100%;
  background-color: #111;
  top: 0;

  a.home {
    text-decoration: none;
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;
