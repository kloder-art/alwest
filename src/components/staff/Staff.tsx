import * as React from 'react';
import styled from 'styled-components';
import { StaffItemProps } from './definitions';

import { Item } from './Item';

const StyledStaff = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

interface StaffProps {
  items: { frontmatter: StaffItemProps }[];
}

export const Staff: React.FC<StaffProps> = ({ items }) => (
  <StyledStaff>
    {items
      .filter((x) => !!x)
      .map((x) => (
        <Item {...x.frontmatter} key={x.frontmatter.id} />
      ))}
  </StyledStaff>
);
