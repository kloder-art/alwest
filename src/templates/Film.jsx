import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import LocationsMap from '../components/LocationsMap';
import StaffShelf from '../components/StaffShelf';
import StaffItem from '../components/StaffItem';

const Film = ({ data }) => {
  const detail = data.allFilmsJson.edges[0].node;
  return (
    <Layout>
      <h2>{detail.title}</h2>
      <p>{detail.year}</p>
      <img
        src={require(`../data/films/${detail.slug}.jpg`)}
        alt={detail.title}
        style={{ maxHeight: '320px' }}
      />
      
      <p dangerouslySetInnerHTML={{ __html: detail.sinopsis }} />

      <ul>
        {detail.imdb && (
          <li>
            <a href={detail.imdb} target={'blank'}>IMDB</a>
          </li>
        )}
        {detail.spotify && (
          <li>
            <a href={detail.spotify} target={'blank'}>Spotify: BSO</a>
          </li>
        )}
        {detail.recaudation && (
          <li>
            <strong>Recaudation:</strong> {detail.recaudation}
          </li>
        )}
        {detail.duration && (
          <li>
            <strong>Duration:</strong> {detail.duration} m.
          </li>
        )}
        {detail.direction && (
          <li>
            <strong>Direction:</strong> {detail.direction}<br />
            <span style={{color: 'red'}}>
              (TODO: Move to staff as stuff or something like this)
            </span>
          </li>
        )}
      </ul>

      {(detail.locations && detail.locations.length > 0) && (
        <>
          <h3>Locations</h3>
          <LocationsMap markers={detail.locations} />
        </>
      )}

      {(detail.staff && detail.staff.length > 0) && (
        <>
          <h3>Staff</h3>
          <StaffShelf>
            {detail.staff.map(x => (
              <StaffItem {...x} key={x.slug} />
            ))}
          </StaffShelf>
        </>
      )}

    </Layout>
  );
};

Film.propTypes = {
  data: PropTypes.object,
};

export default Film;

export const query = graphql`
  query($slug: String!) {
    allFilmsJson(filter: { slug: { eq: $slug } } ) {
      edges {
        node {
          id
          slug
          title
          imdb
          spotify
          sinopsis
          recaudation
          duration
          direction
          year
          locations {
            id
            slug
            title
            lat
            lon
            description
          }
          staff {
            id
            slug
            title
          }
        }
      }
    }
  }
`;
