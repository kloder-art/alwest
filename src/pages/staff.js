import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import StaffItem from '../components/StaffItem';
import StaffShelf from '../components/StaffShelf';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Staff {
      allStaffJson (
        sort: {
          fields: [title]
          order: ASC
        }
      ) {
        edges {
          node {
            title,
            slug
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <StaffShelf>
        {data.allStaffJson.edges.map(x => (
          <StaffItem {...x.node} key={x.node.slug} />
        ))}
      </StaffShelf>
    </Layout>
  );
};

export default IndexPage;
