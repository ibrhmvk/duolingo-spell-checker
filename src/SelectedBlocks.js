import React, { Component } from "react";

const Line = () => (
  <div
    style={{ background: "#ccc", width: "100%", height: 2, margin: "50px 0" }}
  />
);

const SelectedBlocks = ({ blocks, selectedBlockIds, unselectBlock,showMovingBlock }) => {
  const selectedBlockSet = selectedBlockIds.map((blockId) =>
    blocks.find((b) => b.id === blockId)
  );
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: "30%",
        position: "relative",
        alignItems: "flex-start",
        alignContent: "flex-start",
        visibility: "hidden",
      }}
    >
      <div style={{ position: "absolute", width: "100%", zIndex: -1 }}>
        <Line />
        <Line />
        <Line />
      </div>
      {selectedBlockSet.map((block) => (
        <div
          key={block.id}
          style={{
            background: "white",
            color: "black",
            padding: 10,
            margin: 5,
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => {
            showMovingBlock(block.id);
            unselectBlock(block.id);
          }}
          id={`selected-block-${block.id}`}
        >
          {block.text}
        </div>
      ))}
    </div>
  );
};

export default SelectedBlocks;
