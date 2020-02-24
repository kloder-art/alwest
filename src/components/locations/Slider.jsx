import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Img from 'gatsby-image/withIEPolyfill';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LocationSlider = ({ images }) => (
  <>
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
    >
      {images.map((image, idx) => {
        return (
          <div key={idx}>
            <Img fluid={image.childImageSharp.fluid} alt={image.name} />
          </div>
        );
      })}
    </Slider>
    <div style={{ marginBottom: '1rem' }} />
  </>
);

LocationSlider.propTypes = {
  images: PropTypes.array,
};

export default LocationSlider;
