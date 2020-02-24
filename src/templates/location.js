import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Map from '../components/locations/Map';
import Staff from '../components/staff/Staff';
import Films from '../components/films/Films';
import Slider from '../components/locations/Slider';
import SEO from '../components/SEO';
import Meta from '../components/Meta';
import Container from '../components/Container';

const Location = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <Slider images={frontmatter.images} />

      <Container>
        <h2 style={{ marginBottom: 0 }}>{frontmatter.name}</h2>
        <Meta frontmatter={frontmatter} />

        <p dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      <Map popups={false} markers={[{ frontmatter }]} />

      <Container>
        {frontmatter.films && frontmatter.films.length > 0 && (
          <>
            <h3>Films</h3>
            <Films size={'small'} items={frontmatter.films} />
          </>
        )}

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

Location.propTypes = {
  data: PropTypes.object,
};

export default Location;

export const query = graphql`
  query($id: String!) {
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
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          films {
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
