import React from "react";

const UnselectedBlocks = ({
  blocks,
  selectedBlockIds,
  selectBlock,
  showMovingBlock,
}) => {
  return (
    <div className="h-[30vh] flex items-center">
      {blocks.map((block) => {
        const isSelected = selectedBlockIds.includes(block.id);
        return (
          <div
            key={block.id}
            style={{
              background: isSelected ? "#aaa" : "white",
              color: isSelected ? "#aaa" : "black",
              padding: 10,
              margin: 5,
              cursor: "pointer",
              userSelect: "none",
            }}
            onClick={() => {
              if (!isSelected) {
                showMovingBlock(block.id);
                selectBlock(block.id);
              }
            }}
            id={`unselected-block-${block.id}`}
          >
            {block.text}
          </div>
        );
      })}
    </div>
  );
};

export default UnselectedBlocks;
