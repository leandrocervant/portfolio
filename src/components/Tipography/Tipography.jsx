import React from "react";
import { mergeClasses } from "../../utilities";

import "./Typography.css";

const classNames = {
  root: "Typography",
};

export const Typography = React.forwardRef(
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
          as,
          headingTags && "Typography--heading",
          inlineTags && "Typography--inline",
          align && `Typography--${align}`,
          italic && "Typography--italic",
          small && "Typography--small",
          semibold && "Typography--semibold",
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
