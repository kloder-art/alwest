import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const LocationSlider = ({ images }) => (
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
          <img
            src={withPrefix(image.childImageSharp.original.src)}
            alt={image.name}
          />
        </div>
      );
    })}
  </Slider>
);

LocationSlider.propTypes = {
  images: PropTypes.array,
};

export default LocationSlider;
