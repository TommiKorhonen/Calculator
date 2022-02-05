import React from 'react';
import { ACTIONS } from '../calculator/Calculator';

const Operators = ({ dispatch, operation }) => {
    return (
        <div className=' '>
            <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
            {/* <button onClick={() => updateCount("*")}>*</button>
            <button onClick={() => updateCount("-")}>-</button>
            <button onClick={() => updateCount("+")}>+</button> */}
            {/* <button>DEL</button>
            <button>CE</button> */}
        </div>
    )
};

export default Operators;
