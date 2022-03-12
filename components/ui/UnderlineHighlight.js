import React from "react";
import { RoughNotation } from "react-rough-notation";

export const UnderlineHighlight = ({ color, children }) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(30 * children.length);

  return (
    <RoughNotation
      type="underline"
      multiline={true}
      padding={[2, 2]}
      iterations={2}
      animationDuration={animationDuration}
      color={color}
      strokeWidth={3}
    >
      {children}
    </RoughNotation>
  );
};
