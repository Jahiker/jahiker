import React, { Fragment } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./styles.css";
import { Card } from "./styles";

import html from "@logos/html.png";
import css from "@logos/css.png";
import js from "@logos/js.png";

export const Skills = () => {

  const options = {
    rewind: true,
    width: '80vw',
    gap: "1rem",
    type: "loop",
    perPage: 3,
    perMove: 1,
    pagination: false,
    breakpoints: {
      769: {
        perPage: 2,
        width: '60vw'
      },
      426: {
        perPage: 1,
        width: '60vw'
      },
    }
  };

  return (
    <div id="skills">
      <Splide
        aria-label="My Favorite Images"
        options={options}
      >
        <SplideSlide>
          <Card>
            <a href="#">
              <figure>
                <img src={html} alt="Image 1" />
              </figure>
            </a>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <a href="#">
              <figure>
                <img src={css} alt="Image 2" />
              </figure>
            </a>
          </Card>
        </SplideSlide>
        <SplideSlide>
          <Card>
            <a href="#">
              <figure>
                <img src={js} alt="Image 3" />
              </figure>
            </a>
          </Card>
        </SplideSlide>
      </Splide>
    </div>
  );
};
