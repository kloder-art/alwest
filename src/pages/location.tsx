import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { LocationsMap } from '../components/locations/LocationsMap';
import { Container } from '../components/Container';
import { MarkerProps } from '../components/locations/definitions';

interface LocationsPageProps {
  allFile: {
    edges: { node: { childMarkdownRemark: MarkerProps } }[];
  };
}

const LocationsPage = ({ data }: PageProps<LocationsPageProps>) => (
  <Layout>
    <SEO title="Locations" />

    <LocationsMap
      scrollWheelZoom={true}
      markers={data.allFile.edges.map((x) => x.node.childMarkdownRemark)}
    />

    <Container>
      <ul>
        {data.allFile.edges.map(({ node }) => (
          <li key={node.childMarkdownRemark.frontmatter.id}>
            <Link to={`/location/${node.childMarkdownRemark.frontmatter.id}`}>
              {node.childMarkdownRemark.frontmatter.name}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  </Layout>
);

export default LocationsPage;

export const query = graphql`
  query {
    allFile(
      filter: {
        sourceInstanceName: { eq: "location" }
        extension: { eq: "md" }
      }
      sort: { fields: [childMarkdownRemark___frontmatter___name], order: ASC }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              id
              name
              lat
              lon
            }
            html
          }
        }
      }
    }
  }
`;
