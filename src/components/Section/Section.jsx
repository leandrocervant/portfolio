import React from "react";
import { mergeClasses } from "../../utilities";
import { Stack } from "../Stack";

import "./Section.css";

const classNames = {
  root: "Section",
  content: "Section__content",
};

export const Section = React.forwardRef(
  ({ children, className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={mergeClasses(classNames.root, className)}
        {...rest}
      >
        <Stack.Col className={classNames.content}>{children}</Stack.Col>
      </section>
    );
  }
);

Section.displayName = "Section";
