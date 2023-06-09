import React from "react";
import { useReflow } from "@react-three/flex";
import { Text as TextImpl } from "@react-three/drei";
import "../App.css";

export default function Text({
  bold = false,
  anchorX = "left",
  anchorY = "top",
  textAlign = "left",
  ...props
}) {
  const reflow = useReflow();
  const font = bold ? "/Inter-Bold.woff" : "/Inter-Regular.woff";
  return (
    <TextImpl
      anchorX={anchorX}
      anchorY={anchorY}
      textAlign={textAlign}
      font={font}
      onSync={reflow}
      {...props}
    />
  );
}

// font-family: "lores-9-plus-narrow", sans-serif;
//   font-weight: 700;
//   font-style: normal;
