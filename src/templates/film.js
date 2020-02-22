import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Map from '../components/locations/Map';
import Staff from '../components/staff/Staff';
import Tags from '../components/films/Tags';

const Film = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <h2>{frontmatter.title}</h2>

      <Tags frontmatter={frontmatter} />

      <img
        src={frontmatter.poster.childImageSharp.original.src}
        alt={frontmatter.title}
        style={{ maxHeight: '320px' }}
      />

      <p dangerouslySetInnerHTML={{ __html: html }} />

      {frontmatter.locations && frontmatter.locations.length > 0 && (
        <>
          <h3>Locations</h3>
          <Map markers={frontmatter.locations} />
        </>
      )}

      {frontmatter.staff && frontmatter.staff.length > 0 && (
        <>
          <h3>Staff</h3>
          <Staff size={'small'} items={frontmatter.staff} />
        </>
      )}
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
