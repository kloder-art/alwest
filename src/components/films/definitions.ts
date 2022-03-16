import { FixedObject } from 'gatsby-image';

export interface FilmProps {
  id: string;
  title: string;
  poster: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}
