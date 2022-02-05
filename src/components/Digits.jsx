import React from 'react';
import { ACTIONS } from "../calculator/Calculator"
const Digits = ({ dispatch }) => {
    const createDigits = () => {
        const digits = [];
        for (let digit = 1; digit < 10; digit++) {
            digits.push(
                <button className='hover:opacity-5' key={digit} onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}>{digit}</button>
            )
        }
        return digits
    }

    return (
        <div className='grid gap-4 grid-cols-3 px-6 py-8 text-white'>
            {createDigits()}
            <button>0</button>
            <button>.</button>
            <button>=</button>
        </div>
    )
};

export default Digits;
