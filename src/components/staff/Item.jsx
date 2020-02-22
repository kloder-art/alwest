import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledItem = styled.div`
  img {
    max-height: 320px;
    box-shadow: 0px 0px 1px grey;
    transition: 0.2s all;
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

const Item = ({ id, picture, name }) => (
  <StyledItem>
    <Link to={`/staff/${id}`}>
      <img src={picture.childImageSharp.resize.src} alt={`"${name}" Photo`} />
      <p>{name}</p>
    </Link>
  </StyledItem>
);

Item.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  picture: PropTypes.object,
};

Item.defaultProps = {
  name: '',
};

export default Item;
