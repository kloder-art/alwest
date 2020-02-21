import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import LocationsMap from '../components/LocationsMap';

const LocationsPage = () => {
  const data = useStaticQuery(graphql`
    query Locations {
      allLocationsJson(
        sort: {
          fields: [title]
          order: ASC
        }
      ) {
        edges {
          node {
            title,
            slug,
            lat,
            lon,
            description
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Locations" />
      <LocationsMap markers={data.allLocationsJson.edges.map(x => x.node)} />

      <ul>
        {data.allLocationsJson.edges.map(({node}) => (
          <li key={node.slug}>
            <Link to={`/locations/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default LocationsPage;
