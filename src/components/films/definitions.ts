import { IGatsbyImageData } from 'gatsby-plugin-image';

export interface FilmProps {
  id: string;
  title: string;
  poster: {
    childImageSharp: { gatsbyImageData: IGatsbyImageData };
  };
}
