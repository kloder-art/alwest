import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const sizes = {
  small: '100px',
  normal: '170px',
};

const StyledFilms = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(${props => sizes[props.size]}, 1fr)
  );
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`;

const Films = ({ items, size }) => (
  <StyledFilms size={size}>
    {items.map(x => (
      <Item {...x.frontmatter} key={x.frontmatter.id} />
    ))}
  </StyledFilms>
);

Films.propTypes = {
  items: PropTypes.array,
  size: PropTypes.oneOf(['small', 'normal']),
};

Films.defaultProps = {
  size: 'normal',
};

export default Films;
