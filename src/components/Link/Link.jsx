import { mergeClasses } from "../../utilities";
import { Stack } from "../Stack";

import classNames from "./Link.module.css";

export const Link = ({ icon, appearance = "neutral", href }) => {
  const Component = icon;

  const handleClick = () => {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.click();
    anchor.remove();
  };

  return (
    <Stack.Row
      className={mergeClasses(classNames.root, classNames[appearance])}
      onClick={handleClick}
    >
      <Component />
    </Stack.Row>
  );
};
