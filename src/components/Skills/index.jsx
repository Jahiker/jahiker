import React, { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import html from '@logos/html.png';
import css from '@logos/css.png';
import js from '@logos/js.png';

export const Skills = () => {
  return (
    <Fragment>
      <Splide 
        aria-label="My Favorite Images"
        options={ {
            rewind: true,
            width : 800,
            gap   : '1rem',
          } }
      >
        <SplideSlide>
          <img src={ html } alt="Image 1" />
        </SplideSlide>
        <SplideSlide>
          <img src={ css } alt="Image 2" />
        </SplideSlide>
        <SplideSlide>
          <img src={ js } alt="Image 2" />
        </SplideSlide>
      </Splide>
    </Fragment>
  );
};
