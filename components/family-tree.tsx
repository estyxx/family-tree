import React from "react";
import {Connector} from "./connector";
import {calcTree}  from "./calcTree";

export const ReactFamilyTree = ({...props}) => {
  const data = calcTree(props.nodes, {
    rootId: props.rootId,
    placeholders: props.placeholders,
  });

  const width = props.width / 2;
  const height = props.height / 2;

  return (
    <div
      className={props.className}
      style={{
        position: "relative",
        width: data.canvas.width * width,
        height: data.canvas.height * height,
      }}
    >
      {data.connectors.map((connector, idx) => (
        <Connector key={idx} connector={connector} width={width} height={height} />
      ))}
      {data.nodes.map(props.renderNode)}
    </div>
  );
};
