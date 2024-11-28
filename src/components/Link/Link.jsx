import { mergeClasses } from "../../utilities";
import { Stack } from "../Stack";

import "./Link.css";

const classNames = {
  root: "Link",
};

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
      className={mergeClasses(
        classNames.root,
        `${classNames.root}--${appearance}`
      )}
      onClick={handleClick}
    >
      <Component />
    </Stack.Row>
  );
};
