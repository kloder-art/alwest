import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Map from '../components/locations/Map';

const LocationsPage = ({ data }) => (
  <Layout>
    <SEO title="Locations" />

    <Map
      scrollWheelZoom={true}
      markers={data.allFile.edges.map(x => x.node.childMarkdownRemark)}
    />

    <ul>
      {data.allFile.edges.map(({ node }) => (
        <li key={node.childMarkdownRemark.frontmatter.id}>
          <Link to={`/location/${node.childMarkdownRemark.frontmatter.id}`}>
            {node.childMarkdownRemark.frontmatter.name}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

LocationsPage.propTypes = {
  data: PropTypes.object,
};

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
