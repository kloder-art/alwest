import * as React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { Films } from '../components/films/Films';
import { Container } from '../components/Container';
import { FilmProps } from '../components/films/definitions';

interface FilmsPageProps {
  allFile: {
    edges: { node: { childMarkdownRemark: { frontmatter: FilmProps } } }[];
  };
}

const FilmsPage = ({ data }: PageProps<FilmsPageProps>) => (
  <Layout>
    <SEO title="Films" />
    <Container>
      <Films
        items={data.allFile.edges.map((x) => x.node.childMarkdownRemark)}
      />
    </Container>
  </Layout>
);

export default FilmsPage;

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
                  fixed(width: 150, height: 230) {
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
