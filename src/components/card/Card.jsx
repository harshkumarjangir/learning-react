import React from 'react'
import '../card/card.css'
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

    console.log("props", props)
    return (
        <>
            <div className="card">
                <h1>{props.name}</h1>
                <h2>{props.course}</h2>
                <SlActionRedo />

                <div className="count">
                    {/* //Storing Variable Dynamically */}
                    <h1>{count}</h1>
                    <button className='btn' onClick={() => Inc()}>INC +</button>
                    <button className='btn' onClick={() => Dec()}>DEC -</button>
                    {/* <button onClick={Inc}>INC</button> */}
                </div>
            </div>
            <div className="card-with-img">
                <div className="card">
                    <div className="card-img">
                        <img src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="" />
                    </div>
                    <div className="card-content">
                        <span className="tag">Nature</span>
                        <span className="tag">Lake</span>
                        <div className="heading">Nature is Beauty</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore cum perferendis.</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
            {/* <div className="card-with-img">
                <div className="card">
                    <div className="card-img">
                        <img width="200px" src="https://images.unsplash.com/photo-1536323760109-ca8c07450053" alt="" />
                    </div>
                    <div className="card-content">
                        <span className="tag">Nature</span>
                        <span className="tag">Lake</span>
                        <div className="heading">Nature is Beauty</div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque inventore cum perferendis.</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div> */}
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