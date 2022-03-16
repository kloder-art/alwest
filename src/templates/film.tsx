import * as React from 'react';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import { Layout } from '../components/Layout';
import { LocationsMap } from '../components/locations/LocationsMap';
import { Staff } from '../components/staff/Staff';
import { Meta } from '../components/Meta';
import { SEO } from '../components/SEO';
import { Container } from '../components/Container';
import { FixedObject } from 'gatsby-image';
import { MarkerProps } from '../components/locations/definitions';
import { StaffItemProps } from '../components/staff/definitions';

interface FilmPageProps {
  file: {
    childMarkdownRemark: {
      frontmatter: {
        id: string;
        title: string;
        imdb: string;
        spotify: string;
        runtime: number;
        year: number;
        poster: { childImageSharp: { fixed: FixedObject } };
        locations: MarkerProps[];
        directors: { frontmatter: StaffItemProps }[];
        actors: { frontmatter: StaffItemProps }[];
      };
      html: string;
    };
  };
}

const FilmPage = ({ data }: PageProps<FilmPageProps>) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.title}</h2>
        <Meta frontmatter={frontmatter} />

        <Img
          fixed={frontmatter.poster.childImageSharp.fixed}
          objectFit={'cover'}
          objectPosition={'50% 50%'}
          alt={frontmatter.title}
          style={{ marginBottom: '1rem' }}
        />

        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

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

export default FilmPage;

export const query = graphql`
  query ($id: String!) {
    file(childMarkdownRemark: { frontmatter: { id: { eq: $id } } }) {
      childMarkdownRemark {
        frontmatter {
          id
          title
          imdb
          spotify
          runtime
          year
          poster {
            childImageSharp {
              fixed(width: 210, height: 320) {
                ...GatsbyImageSharpFixed
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
          directors {
            frontmatter {
              id
              name
              picture {
                childImageSharp {
                  fixed(width: 150, height: 220) {
                    ...GatsbyImageSharpFixed
                  }
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
                  fixed(width: 150, height: 220) {
                    ...GatsbyImageSharpFixed
                  }
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
