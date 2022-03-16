import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface StaffItemProps {
  id: string;
  picture: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
  name?: string;
}
