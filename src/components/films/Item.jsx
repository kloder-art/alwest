import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const StyledFilmItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  height: 230px;
`;

const FilmItem = ({ id, title, poster }) => (
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

FilmItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  poster: PropTypes.object,
};

export default FilmItem;
