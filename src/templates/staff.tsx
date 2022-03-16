import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Layout } from '../components/Layout';
import { Films } from '../components/films/Films';
import { LocationsMap } from '../components/locations/LocationsMap';
import { SEO } from '../components/SEO';
import { Meta } from '../components/Meta';
import { Container } from '../components/Container';
import { FilmProps } from '../components/films/definitions';
import { MarkerProps } from '../components/locations/definitions';

interface LocationPageProps {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        id: string;
        name: string;
        born: string;
        imdb: string;
        picture: { childImageSharp: { gatsbyImageData: IGatsbyImageData } };
        director: { frontmatter: FilmProps }[];
        actor: { frontmatter: FilmProps }[];
        locations: MarkerProps[];
      };
      html: string;
    };
  };
}

const StaffPage = ({ data }: PageProps<LocationPageProps>) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.name}</h2>
        <Meta frontmatter={frontmatter} />

        <GatsbyImage
          image={frontmatter.picture.childImageSharp.gatsbyImageData}
          objectFit={'cover'}
          objectPosition={'50% 50%'}
          alt={frontmatter.name}
          style={{ marginBottom: '1rem' }}
        />

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      {frontmatter.director && frontmatter.director.length > 0 && (
        <Container>
          <h3>Director in</h3>
          <Films items={frontmatter.director} />
        </Container>
      )}

      {frontmatter.actor && frontmatter.actor.length > 0 && (
        <Container>
          <h3>Actor in</h3>
          <Films items={frontmatter.actor} />
        </Container>
      )}

      {frontmatter.locations && frontmatter.locations.length > 0 && (
        <>
          <Container>
            <h3>Locations</h3>
          </Container>
          <LocationsMap markers={frontmatter.locations} />
        </>
      )}
    </Layout>
  );
};

export default StaffPage;

export const query = graphql`
  query ($id: String!) {
    file(childMarkdownRemark: { frontmatter: { id: { eq: $id } } }) {
      childMarkdownRemark {
        frontmatter {
          id
          name
          born
          imdb
          picture {
            childImageSharp {
              gatsbyImageData(width: 210, height: 320, layout: FIXED)
            }
          }
          director {
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
          actor {
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
          locations {
            frontmatter {
              id
              name
              lat
              lon
            }
            html
          }
        }
        html
      }
    }
  }
`;
