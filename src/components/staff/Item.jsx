import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { Link, withPrefix } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

const StyledItem = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  height: 260px;
  background-color: black;

  p {
    text-align: center;
  }

  a {
    color: white;
    text-decoration: none;
  }
`;

const Item = ({ id, picture, name }) => (
  <StyledItem>
    <Link to={`/staff/${id}`}>
      <Img
        fixed={picture.childImageSharp.fixed}
        objectFit={'cover'}
        objectPosition={'50% 50%'}
        alt={`"${name}" Photo`}
      />
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
