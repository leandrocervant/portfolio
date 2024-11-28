import React from "react";
import { mergeClasses } from "../../utilities";

const classNames = {
  row: "Stack__row",
  col: "Stack__col",
};

const Row = React.forwardRef(
  (
    { children, gap, alignItems, justifyContent, style, className, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "row",
          gap,
          alignItems,
          justifyContent,
          ...style,
        }}
        {...rest}
        className={mergeClasses(classNames.row, className)}
      >
        {children}
      </div>
    );
  }
);

Row.displayName = "Row";

const Col = React.forwardRef(
  (
    { children, gap, alignItems, justifyContent, className, style, ...rest },
    ref
  ) => {
    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          gap,
          alignItems,
          justifyContent,
          ...style,
        }}
        {...rest}
        className={mergeClasses(classNames.col, className)}
      >
        {children}
      </div>
    );
  }
);

Col.displayName = "Col";

export const Stack = { Row, Col };
