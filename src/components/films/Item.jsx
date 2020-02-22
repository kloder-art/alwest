import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFilmItem = styled.div`
  img {
    max-height: 320px;
    box-shadow: 0px 0px 1px grey;
    transition: 0.2s all;

    &:hover {
      box-shadow: 0px 0px 10px black;
      transform: scale(1.02, 1.02);
    }
  }
`;

const FilmItem = ({ id, title, poster }) => (
  <StyledFilmItem>
    <Link to={`/film/${id}`}>
      <img
        src={poster.childImageSharp.original.src}
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
