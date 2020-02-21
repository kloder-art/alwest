import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import LocationsMap from '../components/LocationsMap';
import StaffShelf from '../components/StaffShelf';
import StaffItem from '../components/StaffItem';
import FilmShelf from '../components/FilmShelf';
import FilmItem from '../components/FilmItem';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Location = ({ data }) => {
  const detail = data.allLocationsJson.edges[0].node;
  return (
    <Layout>
      <h2>{detail.title}</h2>
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
      >
        {detail.images.map((image, idx) => {
          return (
            <div key={idx}>
              <img
                src={require(`../data/locations/${image.relativePath}`)}
                alt={detail.title}
              />
            </div>
          );
        })}
      </Slider>
      <LocationsMap popups={false} markers={[detail]} />
      <p dangerouslySetInnerHTML={{ __html: detail.description }} />

      <ul>
        <li>
          <a href={detail.wikipedia} target={'blank'}>Wikipedia</a>
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

Location.propTypes = {
  data: PropTypes.object,
};

export default Location;

export const query = graphql`
  query($slug: String!) {
    allLocationsJson(filter: { slug: { eq: $slug } } ) {
      edges {
        node {
          id
          slug
          title
          lat
          lon
          description
          wikipedia
          images {
            relativePath
          }
          films {
            id
            slug
            title
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
