import React from 'react'
import'../card/card.css'
import { SlActionRedo } from "react-icons/sl";
import { useState } from 'react';

const Card = (props) => {
let [count, setCount] = useState(10)

// let count = 0;
let Inc = () => {
    // count = count + 1
    // console.log("count", count)

    setCount(count = count + 1)
}

// let [count, setCount] = useState(10)
let Dec = () => {
    // count = count + 1
    // console.log("count", count)

    setCount(count = count - 1)
}

    console.log ("props", props)
  return (
    <>
    <div className="card">
            <h1>{props.name}</h1>
            <h2>{props.course}</h2>
            <SlActionRedo />

            <div className="count">
                {/* //Storing Variable Dynamically */}
                <h1>{count}</h1>
                <button className='btn' onClick={() =>Inc()}>INC +</button>
                <button className='btn' onClick={() =>Dec()}>DEC -</button>
                {/* <button onClick={Inc}>INC</button> */}
            </div>
        </div>
    </>
  )
}


// const Card = ({name, course}) => {
//     return (
//       <>
//       <div className="card">
//               <h1>{name}</h1>
//               <h2>{course}</h2>
              
//           </div>
//       </>
//     )
//   }

export default Card