import React from "react";
import { Connector as ConnectorType } from "./types"
interface ConnectorProps {
  connector: ConnectorType;
  width: number;
  height: number;
}

export const Connector = ({ connector, width, height }: ConnectorProps):JSX.Element => {
  const [x1, y1, x2, y2] = connector;

  return (
    <i
      style={{
        position: "absolute",
        width: Math.max(1, (x2 - x1) * width + 1),
        height: Math.max(1, (y2 - y1) * height + 1),
        background: `#999`,
        transform: `translate(${x1 * width}px, ${y1 * height}px)`,
        pointerEvents: "none",
      }}
    />
  );
};
