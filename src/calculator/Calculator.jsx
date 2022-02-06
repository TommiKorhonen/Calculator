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
            if (payload.digit === "." && state.currentOperand == null) return state
            if (payload.digit === "." && state.currentOperand.includes(".")) return state
            return {
                ...state,
                currentOperand: `${state.currentOperand || ""}${payload.digit}`,
            }
        case ACTIONS.CHOOSE_OPERATION:
            if (state.currentOperand == null && state.previousOperand == null) {
                return state
            }
            if (state.previousOperand == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousOperand: state.currentOperand,
                    currentOperand: null
                }
            }

            return {
                ...state,
                previousOperand: evaluate(state),
                operation: payload.operation,
                currentOperand: null
            }
        case ACTIONS.CLEAR:
            return {}

    }
}
const evaluate = ({ currentOperand, previousOperand, operation }) => {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return ""
    let computation = ""
    switch (operation) {
        case "+":
            computation = prev + current
            break
        case "-":
            computation = prev - current
            break
        case "/":
            computation = prev / current
            break
        case "*":
            computation = prev * current
            break
    }
    return computation.toString()
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
                <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>AC</button>
                <button>DEL</button>
            </div>
            {/* Numbers screen */}
            <div className='grid gap-4 grid-cols-3 px-6 py-8 text-white'>
                <Digits dispatch={dispatch} digit={"1"} />
                <Digits dispatch={dispatch} digit={"2"} />
                <Digits dispatch={dispatch} digit={"3"} />
                <Digits dispatch={dispatch} digit={"4"} />
                <Digits dispatch={dispatch} digit={"5"} />
                <Digits dispatch={dispatch} digit={"6"} />
                <Digits dispatch={dispatch} digit={"7"} />
                <Digits dispatch={dispatch} digit={"8"} />
                <Digits dispatch={dispatch} digit={"9"} />
                <Digits dispatch={dispatch} digit={"0"} />
                <Digits dispatch={dispatch} digit={"."} />
                <Digits dispatch={dispatch} digit={"="} />
            </div>
        </main>
    )
};

export default Calculator;
