import React from 'react';
import Slider from 'react-slick';
import Img from 'gatsby-image/withIEPolyfill';
import { FluidObject } from 'gatsby-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
  childImageSharp: {
    fluid: FluidObject;
  };
  name: string;
}

interface LocationSliderProps {
  images: Image[];
}

export const LocationSlider: React.FC<LocationSliderProps> = ({ images }) => (
  <>
    <Slider
      dots={true}
      infinite={true}
      speed={500}
      slidesToShow={1}
      slidesToScroll={1}
      adaptiveHeight={true}
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
