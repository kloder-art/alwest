import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Map from '../components/locations/Map';
import Staff from '../components/staff/Staff';
import Meta from '../components/Meta';
import SEO from '../components/SEO';
import Container from '../components/Container';

const Film = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.title}</h2>
        <Meta frontmatter={frontmatter} />

        <img
          src={frontmatter.poster.childImageSharp.original.src}
          alt={frontmatter.title}
          style={{ maxHeight: '320px', marginBottom: '1rem' }}
        />

        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      {frontmatter.locations && frontmatter.locations.length > 0 && (
        <>
          <Container>
            <h3>Locations</h3>
          </Container>
          <Map markers={frontmatter.locations} />
        </>
      )}

      <Container>
        {frontmatter.staff && frontmatter.staff.length > 0 && (
          <>
            <h3>Staff</h3>
            <Staff size={'small'} items={frontmatter.staff} />
          </>
        )}
      </Container>
    </Layout>
  );
};

Film.propTypes = {
  data: PropTypes.object,
};

export default Film;

export const query = graphql`
  query($id: String!) {
    file(childMarkdownRemark: { frontmatter: { id: { eq: $id } } }) {
      childMarkdownRemark {
        frontmatter {
          id
          title
          imdb
          spotify
          recaudation
          duration
          year
          poster {
            childImageSharp {
              original {
                src
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
          staff {
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