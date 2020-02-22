import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Films from '../components/films/Films';
import Map from '../components/locations/Map';

const Staff = ({ data }) => {
  const { frontmatter, html } = data.file.childMarkdownRemark;
  return (
    <Layout>
      <h2>{frontmatter.name}</h2>
      <p>
        {frontmatter.born} - {frontmatter.die}
      </p>

      <img
        src={frontmatter.picture.childImageSharp.original.src}
        alt={frontmatter.name}
        style={{ maxHeight: '320px' }}
      />

      <div dangerouslySetInnerHTML={{ __html: html }} />

      <ul>
        <li>
          <a href={frontmatter.imdb} target={'blank'}>
            IMDB
          </a>
        </li>
      </ul>

      {frontmatter.films && frontmatter.films.length > 0 && (
        <>
          <h3>Films</h3>
          <Films size={'small'} items={frontmatter.films} />
        </>
      )}

      {frontmatter.locations && frontmatter.locations.length > 0 && (
        <>
          <h3>Locations</h3>
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
