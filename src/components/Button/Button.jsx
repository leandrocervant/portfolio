import React from "react";
import { mergeClasses } from "../../utilities";

import classNames from "./Button.module.css";

export const Button = React.forwardRef(
  (
    {
      className,
      appearance = "primary",
      shape = "rounded",
      size = "medium",
      ...rest
    },
    ref
  ) => {
    const buttonClasses = mergeClasses(
      classNames.root,
      classNames[appearance],
      classNames[shape],
      classNames[size],
      className
    );

    return <button ref={ref} {...rest} className={buttonClasses} />;
  }
);

Button.displayName = "Button";
