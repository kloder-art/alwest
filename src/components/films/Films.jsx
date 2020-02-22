import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const StyledFilms = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
`;

const Films = ({ items }) => (
  <StyledFilms>
    {items.map(x => (
      <Item {...x.frontmatter} key={x.frontmatter.id} />
    ))}
  </StyledFilms>
);

Films.propTypes = {
  items: PropTypes.array,
};

export default Films;
