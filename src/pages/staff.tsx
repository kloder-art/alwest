import React from 'react';
import { graphql, PageProps } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Staff } from '../components/staff/Staff';
import { Container } from '../components/Container';
import { StaffItemProps } from '../components/staff/definitions';

interface SraffPageProps {
  allFile: {
    edges: {
      node: {
        childMarkdownRemark: { frontmatter: StaffItemProps };
      };
    }[];
  };
}

const StaffPage = ({ data }: PageProps<SraffPageProps>) => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <Staff
        items={data.allFile.edges.map((x) => x.node.childMarkdownRemark)}
      />
    </Container>
  </Layout>
);

export default StaffPage;

export const query = graphql`
  {
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
                  gatsbyImageData(width: 150, height: 220, layout: FIXED)
                }
              }
            }
          }
        }
      }
    }
  }
`;
