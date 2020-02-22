import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Films from '../components/films/Films';
import Container from '../components/Container';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Films items={data.allFile.edges.map(x => x.node.childMarkdownRemark)} />
    </Container>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object,
};

export default IndexPage;

export const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "film" }, extension: { eq: "md" } }
      sort: { fields: childMarkdownRemark___frontmatter___year, order: DESC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              title
              poster {
                childImageSharp {
                  resize(width: 250, height: 400, fit: COVER, quality: 50) {
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
