import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFilmShelf = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  margin: 0 1rem;
`;

const FilmShelf = props => {
  return <StyledFilmShelf>{props.children}</StyledFilmShelf>;
};

FilmShelf.propTypes = {
  children: PropTypes.node,
};

export default FilmShelf;
