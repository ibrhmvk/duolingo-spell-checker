import React, { useState, useRef, useEffect } from "react";
import { LayoutGroup, motion, useMotionValue } from "framer-motion";
import UnselectedBlocks from "./UnselectedBlocks";
import SelectedBlocks from "./SelectedBlocks";

function SpellCheckerWIP() {

  const ref = useRef(null)
  const data = [
    { id: "1", text: "for" },
    { id: "2", text: "today" },
    { id: "3", text: "home" },
    { id: "4", text: "dinner" },
    { id: "5", text: "my" },
  ];
  const [selectedBlockIds, setSelectedBlockIds] = useState([]);
  const initialCordinate = {
    x: 0,
    y: 0
  }
  const [movingCoordinate, setmovingCoordinate] = useState(initialCordinate);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const showMovingBlock = async (id, isBeingSelected) => {
    const startTime = Date.now();
    const duration = 100;
    console.log(!document.getElementById(`selected-block-${id}`), "element");
    while (
      !document.getElementById(`selected-block-${id}`) ||
      !document.getElementById(`unselected-block-${id}`)
    ) {
      await sleep(0);
    }
    let startEl = document.getElementById(`selected-block-${id}`);
    let endEl = document.getElementById(`unselected-block-${id}`);
    if (isBeingSelected) [startEl, endEl] = [endEl, startEl];
    const [{ x: startX, y: startY }, { x: endX, y: endY }] = [
      startEl,
      endEl,
    ].map((e) => e.getBoundingClientRect());
    const [dx, dy] = [endX - startX, endY - startY];
    endEl.style.visibility = "hidden";
    setmovingCoordinate({ x: endX, y: endY })
    endEl.style.visibility = "initial";
    // setmovingCoordinate(initialCordinate)


    return;

    const movingBlock = document.createElement("div");
    movingBlock.textContent = startEl.textContent;
    movingBlock.style.position = "absolute";
    movingBlock.style.left = startX + "px";
    movingBlock.style.top = startY + "px";
    movingBlock.style.padding = "10px";
    movingBlock.style.background = "white";
    document.body.appendChild(movingBlock);

    (function moveBlock() {
      const now = Date.now();
      if (now >= startTime + duration) {
        endEl.style.visibility = "initial";
        return movingBlock.parentNode.removeChild(movingBlock);
      }
      const percentage = (now - startTime) / duration;
      const x = startX + dx * percentage;
      const y = startY + dy * percentage;
      movingBlock.style.left = x + "px";
      movingBlock.style.top = y + "px";
      requestAnimationFrame(moveBlock);
    })();
  };

  return (

    <div className="w-full h-screen bg-slate-200 border-4">

      <div className="border-2 bg-slate-300 relative h-[50vh] w-full">
        <motion.div
        initial={{ x:100,y:100}}
          animate={{
            x: movingCoordinate.x, y: movingCoordinate.y,
            
          }}
          className="w-8 h-8 bg-amber-500">
        </motion.div>
        <SelectedBlocks
          showMovingBlock={(blockId) => showMovingBlock(blockId, false)}
          blocks={data}
          selectedBlockIds={selectedBlockIds}
          unselectBlock={(blockId) =>
            setSelectedBlockIds((prev) => prev.filter((id) => id !== blockId))
          }
        />

        <UnselectedBlocks
          showMovingBlock={(blockId) => showMovingBlock(blockId, true)}
          selectedBlockIds={selectedBlockIds}
          selectBlock={(blockId) =>
            setSelectedBlockIds((prev) => prev.concat(blockId))
          }
          blocks={data}
        />

      </div>
     
    </div >
  );
}

export default SpellCheckerWIP;
