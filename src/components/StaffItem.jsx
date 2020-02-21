import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledStaffItem = styled.div`
  img {
    max-height: 320px;
    box-shadow: 0px 0px 1px grey;
    transition: .2s all;
    margin-bottom: 0;

    &:hover {
      box-shadow: 0px 0px 10px black;
      transform: scale(1.02, 1.02);
    }
  }

  p {
    text-align: center;
  }

`;

const StaffItem = (props) => {
  const imgSrc = require(`../data/staff/${props.slug}.jpg`);
  return (
    <StyledStaffItem>
      <Link to={`/staff/${props.slug}`}>
        <img src={imgSrc} alt={`"${props.title}" Photo`} />
        <p>{props.title}</p>
      </Link>
    </StyledStaffItem>
  );
};

StaffItem.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string
};

StaffItem.defaultProps = {
  title: '',
};

export default StaffItem;
