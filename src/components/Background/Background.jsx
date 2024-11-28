import { useEffect, useRef } from "react";
import { Stack } from "../Stack";

import "./Background.css";

const classNames = {
  root: "Background",
  particle: "Background__particle",
};

const PARTICLE_COUNT = 50;
const PARTICLE_SIZE = 1;
const PARTICLE_SPEED = 1;

export const Background = () => {
  const ref = useRef();

  useEffect(() => {
    const style = document.createElement("style");
    document.head.appendChild(style);
    const sheet = style.sheet;
    for (let i = 1; i < PARTICLE_COUNT; i += 1) {
      const rule = createRule({ index: i });
      sheet.insertRule(rule, 0);
    }

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <Stack.Col ref={ref} className={classNames.root}>
      {[...Array(PARTICLE_COUNT)].map((_, index) => (
        <span key={index} className={classNames.particle}></span>
      ))}
    </Stack.Col>
  );
};

export function createRule({ index }) {
  let rule = "";

  const speedValue = 500 - PARTICLE_SPEED * 10;
  const randomTop = Math.floor(Math.random() * 100 + 1);
  const randomLeft = Math.floor(Math.random() * 100 + 1);
  const randomDuration =
    (Math.floor(Math.random() * speedValue + 1) * 10) / 10 + 5;
  const randomDelay =
    ((Math.floor(Math.random() * speedValue + 1) * 10) / 10) * -1;
  const randomTransition1 = Math.floor(Math.random() * 50 + 1) - 25;
  const randomTransition2 = Math.floor(Math.random() * 50 + 1) - 25;
  const blurRadius = Math.random() + 0.5 * PARTICLE_SIZE * 0.5;
  const x = Math.random() < 0.5 ? -1 : 1;
  const boxShadow = PARTICLE_SIZE * 2 * x;

  rule += `
.${classNames.particle}:nth-child(${index}) {
    top: ${randomTop}%;
    left: ${randomLeft}%;
    animation-duration: ${randomDuration}s;
    animation-delay: ${randomDelay}s;
    transform-origin: ${randomTransition1}vw ${randomTransition2}vh;
    box-shadow: ${boxShadow}vmin 0 ${blurRadius}vmin currentColor;
}`;

  return rule;
}
