import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { LocationsMap } from '../components/locations/LocationsMap';
import { Staff } from '../components/staff/Staff';
import { Films } from '../components/films/Films';
import { LocationSlider } from '../components/locations/LocationSlider';
import { SEO } from '../components/SEO';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';
import { StaffItemProps } from '../components/staff/definitions';
import { FilmProps } from '../components/films/definitions';

interface LocationPageProps {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        id: string;
        name: string;
        lat: number;
        lon: number;
        wikipedia: string;
        images: {
          childImageSharp: { gatsbyImageData: IGatsbyImageData };
          name: string;
        }[];
        films: { frontmatter: FilmProps }[];
        directors: { frontmatter: StaffItemProps }[];
        actors: { frontmatter: StaffItemProps }[];
      };
      html: string;
    };
  };
}

const LocationPage = ({ data }: PageProps<LocationPageProps>) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <LocationSlider images={frontmatter.images} />

      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.name}</h2>
        <Meta frontmatter={frontmatter} />

        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      <LocationsMap popups={false} markers={[{ frontmatter }]} />

      {frontmatter.films && frontmatter.films.length > 0 && (
        <Container>
          <h3>Films</h3>
          <Films items={frontmatter.films} />
        </Container>
      )}

      {frontmatter.directors && frontmatter.directors.length > 0 && (
        <Container>
          <h3>Directors</h3>
          <Staff items={frontmatter.directors} />
        </Container>
      )}

      {frontmatter.actors && frontmatter.actors.length > 0 && (
        <Container>
          <h3>Actors</h3>
          <Staff items={frontmatter.actors} />
        </Container>
      )}
    </Layout>
  );
};

export default LocationPage;

export const query = graphql`
  query ($id: String!) {
    file(childMarkdownRemark: { frontmatter: { id: { eq: $id } } }) {
      childMarkdownRemark {
        frontmatter {
          id
          name
          lat
          lon
          wikipedia
          images {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
          films {
            frontmatter {
              id
              title
              poster {
                childImageSharp {
                  gatsbyImageData(width: 150, height: 230, layout: FIXED)
                }
              }
            }
          }
          directors {
            frontmatter {
              id
              name
              picture {
                childImageSharp {
                  gatsbyImageData(width: 150, height: 220, layout: FIXED)
                }
              }
            }
          }
          actors {
            frontmatter {
              id
              name
              picture {
                childImageSharp {
                  gatsbyImageData(width: 150, height: 220, layout: FIXED)
                }
              }
            }
          }
        }
        html
      }
    }
  }
`;
