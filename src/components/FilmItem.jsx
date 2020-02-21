import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledFilmItem = styled.div`
  img {
    max-height: 320px;
    box-shadow: 0px 0px 1px grey;
    transition: .2s all;

    &:hover {
      box-shadow: 0px 0px 10px black;
      transform: scale(1.02, 1.02);
    }
  }

`;

const FilmItem = (props) => {
  const imgSrc = require(`../data/films/${props.slug}.jpg`);
  return (
    <StyledFilmItem>
      <Link to={`/films/${props.slug}`}>
        <img src={imgSrc} alt={`"${props.title}" Poster`} />
      </Link>
    </StyledFilmItem>
  );
};

FilmItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
};

FilmItem.defaultProps = {
  title: '',
};

export default FilmItem;
