import { FixedObject } from 'gatsby-image';

export interface StaffItemProps {
  id: string;
  picture: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
  name?: string;
}
