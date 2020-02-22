import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const StyledStaff = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Staff = ({ items }) => {
  return (
    <StyledStaff>
      {items.map(x => (
        <Item {...x.frontmatter} key={x.frontmatter.id} />
      ))}
    </StyledStaff>
  );
};

Staff.propTypes = {
  items: PropTypes.array,
};

export default Staff;
