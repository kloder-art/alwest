import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import { StaffItemProps } from './definitions';

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

export const Item: React.FC<StaffItemProps> = ({ id, picture, name = '' }) => (
  <StyledItem>
    <Link to={`/staff/${id}`}>
      <GatsbyImage
        image={picture.childImageSharp.gatsbyImageData}
        objectFit={'cover'}
        objectPosition={'50% 50%'}
        alt={`"${name}" Photo`}
      />
      <p>{name}</p>
    </Link>
  </StyledItem>
);
