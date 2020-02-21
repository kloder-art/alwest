import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import FilmItem from '../components/FilmItem';
import FilmShelf from '../components/FilmShelf';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query Films {
      allFilmsJson (
        sort: {
          fields: [year]
          order: DESC
        }
      ) {
        edges {
          node {
            title,
            slug,
            year
          }
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <FilmShelf>
        {data.allFilmsJson.edges.map(x => (
          <FilmItem {...x.node} key={x.node.slug} />
        ))}
      </FilmShelf>
    </Layout>
  );
};

export default IndexPage;
