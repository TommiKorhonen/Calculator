import { useReducer } from 'react';
import Digits from '../components/Digits';
import Display from '../components/Display';
import Operators from '../components/Operators';

export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CHOOSE_OPERATION: "choose-operation",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    EVALUATE: "evaluate"
}
function reducer(state, { type, payload }) {
    switch (type) {
        case ACTIONS.ADD_DIGIT:
            if (payload.digit === "0" && state.currentOperand === "0") return state
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }

    }
}
const Calculator = () => {
    const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

    return (
        <main className='max-w-[400px] rounded-xl bg-slate-800 self-center flex-grow'>
            {/* Top screen */}
            <Display currentOperand={currentOperand} previousOperand={previousOperand} operation={operation} />
            {/* Operators */}
            <div className='flex p-4 items-center justify-around bg-pink-700 rounded-sm text-white'>
                <Operators dispatch={dispatch} operation={"/"} />
                <Operators dispatch={dispatch} operation={"*"} />
                <Operators dispatch={dispatch} operation={"-"} />
                <Operators dispatch={dispatch} operation={"+"} />
            </div>
            {/* Numbers screen */}
            <Digits dispatch={dispatch} />
        </main>
    )
};

export default Calculator;
