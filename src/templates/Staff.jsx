import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import FilmShelf from '../components/FilmShelf';
import FilmItem from '../components/FilmItem';
import LocationsMap from '../components/LocationsMap';

const Staff = ({ data }) => {
  const detail = data.allStaffJson.edges[0].node;
  return (
    <Layout>
      <h2>{detail.title}</h2>
      <p>{detail.born} - {detail.die}</p>
      
      <img
        src={require(`../data/staff/${detail.slug}.jpg`)}
        alt={detail.title}
        style={{ maxHeight: '320px' }}
      />

      {detail.bio && (
        <p>{detail.bio} (IMDB)</p>
      )}

      <ul>
        <li>
          <a href={detail.imdb} target={'blank'}>IMDB</a>
        </li>
      </ul>
      
      {(detail.films && detail.films.length > 0) && (
        <>
          <h3>Films</h3>
          <FilmShelf>
            {detail.films.map(x => (
              <FilmItem {...x} key={x.slug} />
            ))}
          </FilmShelf>
        </>
      )}

      {(detail.locations && detail.locations.length > 0) && (
        <>
          <h3>Locations</h3>
          <LocationsMap markers={detail.locations} />
        </>
      )}

    </Layout>
  );
};

Staff.propTypes = {
  data: PropTypes.object,
};

export default Staff;

export const query = graphql`
  query($slug: String!) {
    allStaffJson(filter: { slug: { eq: $slug } } ) {
      edges {
        node {
          id
          slug
          title
          born
          die
          bio
          imdb
          films {
            id
            slug
            title
          }
          locations {
            id
            slug
            title
            lat
            lon
            description
          }
        }
      }
    }
  }
`;
