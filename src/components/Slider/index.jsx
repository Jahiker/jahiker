import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import "./styles.css";
import { Card } from "./styles";

export const Slider = ({ items, options, label }) => {
  return (
    <Splide aria-label={label} options={options}>
      {items.map((item) => (
        <SplideSlide key={item.name} title={item.name}>
          <Card largerIcon={item.largerIcon ? true : false}>
            <a href={item.url}>
              <figure>
                <img src={item.logo} alt={item.name} />
              </figure>
            </a>
          </Card>
        </SplideSlide>
      ))}
    </Splide>
  );
};
