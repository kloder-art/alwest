import React from 'react';
import Slider from 'react-slick';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Image {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
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
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={image.name}
            />
          </div>
        );
      })}
    </Slider>
    <div style={{ marginBottom: '1rem' }} />
  </>
);
