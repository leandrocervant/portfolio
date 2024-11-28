import React from "react";
import { mergeClasses } from "../../utilities";

import "./Button.css";

const classNames = {
  root: "Button",
};

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
      `${classNames.root}--${appearance}`,
      `${classNames.root}--${shape}`,
      `${classNames.root}--${size}`,
      className
    );

    return <button ref={ref} {...rest} className={buttonClasses} />;
  }
);

Button.displayName = "Button";
