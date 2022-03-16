import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { FilmProps } from './definitions';

const StyledFilmItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  height: 230px;
`;

export const FilmItem: React.FC<FilmProps> = ({ id, title, poster }) => (
  <StyledFilmItem>
    <Link to={`/film/${id}`}>
      <GatsbyImage
        image={poster.childImageSharp.gatsbyImageData}
        objectFit={'cover'}
        objectPosition={'50% 50%'}
        alt={`"${title}" Poster`}
      />
    </Link>
  </StyledFilmItem>
);
