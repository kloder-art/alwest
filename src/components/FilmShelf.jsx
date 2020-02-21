import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledFilmShelf = styled.div`
  &{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 16px 16px;
    justify-items: center;
    align-items: center;
  }

  @media (max-width: 480px) {
    &{
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 8px 8px;
    }
  }
`;

const FilmShelf = (props) => {
  return (
    <StyledFilmShelf>
      {props.children}
    </StyledFilmShelf>
  );
};

FilmShelf.propTypes = {
  children: PropTypes.node,
};

export default FilmShelf;
