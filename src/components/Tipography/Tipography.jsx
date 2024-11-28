import React from "react";
import { mergeClasses } from "../../utilities";

import "./Tipography.css";

const classNames = {
  root: "Tipography",
};

export const Tipography = React.forwardRef(
  (
    { as, align, italic, small, semibold, className, children, ...rest },
    ref
  ) => {
    const headingTags =
      as === "h1" ||
      as === "h2" ||
      as === "h3" ||
      as === "h4" ||
      as === "h5" ||
      as === "h6";

    const inlineTags =
      as === "span" || as === "small" || as === "em" || as === "strong";

    const Component = as;

    return (
      <Component
        ref={ref}
        {...rest}
        className={mergeClasses(
          classNames.root,
          headingTags && as,
          inlineTags && as,
          align && `Tipography--${align}`,
          italic && "Tipography--italic",
          small && "Tipography--small",
          semibold && "Tipography--semibold",
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Tipography.displayName = "Tipography";
