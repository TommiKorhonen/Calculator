import React from 'react';
import { ACTIONS } from '../calculator/Calculator';

const Operators = ({ dispatch, operation }) => {
    return (
        <button onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}>{operation}</button>
    )
};

export default Operators;
