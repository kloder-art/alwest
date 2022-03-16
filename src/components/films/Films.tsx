import * as React from 'react';
import styled from 'styled-components';

import { FilmItem } from './FilmItem';
import { FilmProps } from './definitions';

const StyledFilms = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

interface FilmsProps {
  items: { frontmatter: FilmProps }[];
}

export const Films: React.FC<FilmsProps> = ({ items }) => (
  <StyledFilms>
    {items
      .filter((x) => !!x)
      .map((x) => (
        <FilmItem {...x.frontmatter} key={x.frontmatter.id} />
      ))}
  </StyledFilms>
);
