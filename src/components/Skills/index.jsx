import React from "react";

import { Section } from "../Section";
import { Title } from "../Title";
import { Slider } from "../Slider";

import { skillsItems } from "../../data";

export const Skills = () => {
  const items = skillsItems;

  const options = {
    rewind: true,
    width: "80vw",
    gap: "1rem",
    type: "loop",
    autoplay: "play",
    perPage: 5,
    perMove: 1,
    pagination: false,
    breakpoints: {
      1025: {
        perPage: 4,
        width: "75vw",
      },
      769: {
        perPage: 3,
        width: "70vw",
      },
      426: {
        perPage: 2,
        width: "60vw",
      },
    },
  };

  return (
    <Section id="skills">
      <div className="header">
        <Title text={"My Skills"} h2 />
      </div>
      <Slider items={items} options={options} label="My Skills" />
    </Section>
  );
};
