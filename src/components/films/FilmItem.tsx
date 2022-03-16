import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import { FilmProps } from './definitions';

const StyledFilmItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  height: 230px;
`;

export const FilmItem: React.FC<FilmProps> = ({ id, title, poster }) => (
  <StyledFilmItem>
    <Link to={`/film/${id}`}>
      <Img
        fixed={poster.childImageSharp.fixed}
        objectFit={'cover'}
        objectPosition={'50% 50%'}
        alt={`"${title}" Poster`}
      />
    </Link>
  </StyledFilmItem>
);
