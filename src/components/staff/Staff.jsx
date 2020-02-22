import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Item from './Item';

const sizes = {
  small: '100px',
  normal: '150px',
};

const StyledStaff = styled.div`
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

const Staff = ({ items, size }) => {
  return (
    <StyledStaff size={size}>
      {items.map(x => (
        <Item {...x.frontmatter} key={x.frontmatter.id} />
      ))}
    </StyledStaff>
  );
};

Staff.propTypes = {
  items: PropTypes.array,
  size: PropTypes.oneOf(['small', 'normal']),
};

Staff.defaultProps = {
  size: 'normal',
};

export default Staff;
