import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledStaffShelf = styled.div`
  &{
    display: grid;
    grid-template-columns: repeat(5, 1fr);
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

const StaffShelf = (props) => {
  return (
    <StyledStaffShelf>
      {props.children}
    </StyledStaffShelf>
  );
};

StaffShelf.propTypes = {
  children: PropTypes.node,
};

export default StaffShelf;
