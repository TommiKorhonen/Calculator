import React from 'react';
import { ACTIONS } from "../calculator/Calculator"
const Digits = ({ dispatch, digit }) => {
    // const createDigits = () => {
    //     const digits = [];
    //     for (let digit = 1; digit < 10; digit++) {
    //         digits.push(
    //             <button className='hover:opacity-5' key={digit} onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
    //         )
    //     }
    //     return digits
    // }

    return (
        <button onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
    )
};

export default Digits;
