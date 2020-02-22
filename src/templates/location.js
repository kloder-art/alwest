import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Map from '../components/locations/Map';
import Staff from '../components/staff/Staff';
import Films from '../components/films/Films';
import Slider from '../components/locations/Slider';
import SEO from '../components/SEO';

const Location = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <SEO title={frontmatter.name} />
      <Map popups={false} markers={[{ frontmatter }]} />

      <h2>{frontmatter.name}</h2>

      <p dangerouslySetInnerHTML={{ __html: html }} />

      <ul>
        <li>
          <a href={frontmatter.wikipedia} target={'blank'}>
            Wikipedia
          </a>
        </li>
      </ul>

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

      <Slider images={frontmatter.images} />
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
          staff {
            frontmatter {
              id
              name
              picture {
                childImageSharp {
                  resize(width: 250, height: 320, fit: COVER) {
                    src
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
