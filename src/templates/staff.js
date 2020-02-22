import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Films from '../components/films/Films';
import Map from '../components/locations/Map';
import SEO from '../components/SEO';
import Tags from '../components/films/Tags';
import Container from '../components/Container';

const Staff = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.name}</h2>
        <Tags frontmatter={frontmatter} />

        <img
          src={frontmatter.picture.childImageSharp.original.src}
          alt={frontmatter.name}
          style={{ maxHeight: '320px', marginBottom: '1rem' }}
        />

        <div dangerouslySetInnerHTML={{ __html: html }} />

        {frontmatter.films && frontmatter.films.length > 0 && (
          <>
            <h3>Films</h3>
            <Films size={'small'} items={frontmatter.films} />
          </>
        )}
      </Container>

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
              original {
                src
              }
            }
          }
          films {
            frontmatter {
              id
              title
              poster {
                childImageSharp {
                  resize(width: 250, height: 320, fit: COVER) {
                    src
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
