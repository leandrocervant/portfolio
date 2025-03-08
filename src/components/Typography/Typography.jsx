import React from "react";
import { mergeClasses } from "../../utilities";

import classNames from "./Typography.module.css";

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
          classNames[as],
          headingTags && classNames.heading,
          inlineTags && classNames.inline,
          align && classNames[align],
          italic && classNames.italic,
          small && classNames.small,
          semibold && classNames.semibold,
          className
        )}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = "Typography";
