import styled from 'styled-components';

export const StyledMenu = styled.ul`
  list-style: none;
  margin: 0;

  li {
    display: inline-block;
    margin-right: 16px;

    a {
      text-decoration: none;
    }
    a.active {
      font-weight: bold;
    }
  }
`;

