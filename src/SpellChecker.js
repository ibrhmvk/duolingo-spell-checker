import React, { useState,useRef,useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";

function SpellChecker() {
  const [position, setPosition] = useState(0);
  const [position1, setPosition1] = useState(0);
  const [position2, setPosition2] = useState(0);
  const [position3, setPosition3] = useState(0);
  const [position4, setPosition4] = useState(0);

  const [positionx, setPositionx] = useState(0);
  const [positionx1, setPositionx1] = useState(0);
  const [positionx2, setPositionx2] = useState(0);
  const [positionx3, setPositionx3] = useState(0);
  const [positionx4, setPositionx4] = useState(0);

  const [wordOrder, setWordOrder] = useState([])

  const wordOrderFn = (id) => {
    if (wordOrder.includes(id)) {
        //remove from array
        console.log(id)
        setWordOrder(prev => prev.filter(i => i != id))
    } else {
        //add to array
        console.log(id)
        setWordOrder(prev => [...prev, id])


    }
}
console.log(wordOrder)

//   const [emptyElements,setEmptyElements] = useState([

//   ])

//   const boxRef = useRef();

//   // X
//   const [x, setX] = useState();

//   // Y
//   const [y, setY] = useState();

//   // This function calculate X and Y
//   const getPosition = () => {
//     const x = boxRef.current.getBoundingClientRect();
    
// console.log(x,'bounding')
//     const y = boxRef.current.offsetTop;
//     setY(y);
//   };

//   // Get the position of the red box in the beginning
//   useEffect(() => {
//     getPosition();
//   }, [position]);


// useEffect(() => {
  
// }, [])

  const toggleOn = () => {
    setPosition(position === 0 ? -120 : 0);
    setPositionx(positionx === 0 ? 70 : 0);
    wordOrderFn(1)
  };

  console.log(position + positionx)
  const toggleOn1 = () => {
    setPosition1(position1 === 0 ? -120 : 0);
    setPositionx1(positionx1 === 0 ? 0 : 0);
    wordOrderFn(2)
  };
  const toggleOn2 = () => {
    setPosition2(position2 === 0 ? -120 : 0);
    setPositionx2(positionx2 === 0 ? -70 : 0);
    wordOrderFn(3)
  };
  const toggleOn3 = () => {
    setPosition3(position3 === 0 ? -120 : 0);
    setPositionx3(positionx3 === 0 ? -140 : 0);
    wordOrderFn(4)
  };
  const toggleOn4 = () => {
    setPosition4(position4 === 0 ? -120 : 0);
    setPositionx4(positionx4 === 0 ? -210 : 0);
    wordOrderFn(5)
  };


  return (
    <div className="grid place-items-center w-full h-[50vh] bg-slate-200">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl font-bold">Complete this Sentence</h1>
        <p className="mt-5 text-base font-semibold">I will go to</p>
      </div>
      <div className="flex ">
        <div className="bg-slate-400 ml-20">
          <motion.button
            onTap={toggleOn}
            animate={{
              y: position,
              x: positionx
            }}
            // ref={boxRef}
            className="bg-white p-3 "
          >
            for
          </motion.button>
        </div>
        <div className="bg-slate-400 ml-20">
          <motion.button
            onTap={toggleOn1}
            animate={{
              y: position1,
              x: positionx1
            }}
            className="bg-white p-3 "
          >
            today
          </motion.button>
        </div>

        <div className="bg-slate-400 ml-20 ">
          <motion.button
            onTap={toggleOn2}
            animate={{
              y: position2,
              x: positionx2
            }}
            className="bg-white p-3 "
          >
            home
          </motion.button>
        </div>

        <div className="bg-slate-400 ml-20">
          <motion.button
            onTap={toggleOn3}
            animate={{
              y: position3,
              x : positionx3
            }}
            className="bg-white p-3 "
          >
            my
          </motion.button>
        </div>

        <div className="bg-slate-400 ml-20">
          <motion.button
            onTap={toggleOn4}
            animate={{
              y: position4,
              x : positionx4
            }}

            className="bg-white p-3 "
          >
            dinner
          </motion.button>
        </div>
      </div>
      
    </div>
  );
}

export default SpellChecker;
