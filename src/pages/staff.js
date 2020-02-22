import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Staff from '../components/staff/Staff';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
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
                    resize(width: 250, height: 320, fit: COVER) {
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
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <Staff items={data.allFile.edges.map(x => x.node.childMarkdownRemark)} />
    </Layout>
  );
};

export default IndexPage;
