import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image/withIEPolyfill';

import Layout from '../components/Layout';
import Films from '../components/films/Films';
import Map from '../components/locations/Map';
import SEO from '../components/SEO';
import Meta from '../components/Meta';
import Container from '../components/Container';

const Staff = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.name}</h2>
        <Meta frontmatter={frontmatter} />

        <Img
          fixed={frontmatter.picture.childImageSharp.fixed}
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
          <Films size={'small'} items={frontmatter.director} />
        </Container>
      )}

      {frontmatter.actor && frontmatter.actor.length > 0 && (
        <Container>
          <h3>Actor in</h3>
          <Films size={'small'} items={frontmatter.actor} />
        </Container>
      )}

      {frontmatter.locations && frontmatter.locations.length > 0 && (
        <>
          <Container>
            <h3>Locations</h3>
          </Container>
          <Map markers={frontmatter.locations} />
        </>
      )}
    </Layout>
  );
};

Staff.propTypes = {
  data: PropTypes.object,
};

export default Staff;

export const query = graphql`
  query($id: String!) {
    file(childMarkdownRemark: { frontmatter: { id: { eq: $id } } }) {
      childMarkdownRemark {
        frontmatter {
          id
          name
          born
          imdb
          picture {
            childImageSharp {
              fixed(width: 210, height: 320) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          director {
            frontmatter {
              id
              title
              poster {
                childImageSharp {
                  fixed(width: 150, height: 230) {
                    ...GatsbyImageSharpFixed
                  }
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
                  fixed(width: 150, height: 230) {
                    ...GatsbyImageSharpFixed
                  }
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
