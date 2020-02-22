import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Films from '../components/films/Films';

const FilmsPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Films items={data.allFile.edges.map(x => x.node.childMarkdownRemark)} />
  </Layout>
);

FilmsPage.propTypes = {
  data: PropTypes.object,
};

export default FilmsPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "film" }, extension: { eq: "md" } }
      sort: { fields: [childMarkdownRemark___frontmatter___year], order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              title
              poster {
                childImageSharp {
                  original {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
