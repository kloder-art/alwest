import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Staff from '../components/staff/Staff';
import Container from '../components/Container';

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Staff items={data.allFile.edges.map(x => x.node.childMarkdownRemark)} />
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
      filter: { sourceInstanceName: { eq: "staff" }, extension: { eq: "md" } }
      sort: { fields: [childMarkdownRemark___frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          childMarkdownRemark {
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
      }
    }
  }
`;
