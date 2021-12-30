import React, { ReactNode } from "react";
import { Connector } from "./connector";
import { calcTree } from "./calcTree";
import { Node, ExtNode } from "./types"

type ReactFamilyTreeProps = {
  nodes: Node[];
  rootId: string;
  width: number;
  height: number;
  placeholders?: boolean;
  className?: string;
  renderNode: (node: ExtNode) => ReactNode;
};

export const ReactFamilyTree = ({
  nodes,
  rootId,
  placeholders,
  width,
  height,
  className,
  renderNode,
}: ReactFamilyTreeProps): JSX.Element => {
  const data = calcTree(nodes, {
    rootId: rootId,
    placeholders: placeholders,
  });

  return (
    <div
      className={className}
      style={{
        position: "relative",
        width: data.canvas.width * width,
        height: data.canvas.height * height,
      }}
    >
      {data.connectors.map((connector, idx) => (
        <Connector
          key={idx}
          connector={connector}
          width={width / 2}
          height={height / 2}
        />
      ))}
      {data.nodes.map(renderNode)}
    </div>
  );
};
