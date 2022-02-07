

const Display = ({ currentOperand, previousOperand, operation, formatOperand }) => {

    return (
        <section>
            <div className="text-white flex flex-col items-end p-4 justify-center">
                <div>{formatOperand(previousOperand)} {operation}</div>
                <div>{formatOperand(currentOperand)}</div>
            </div>
        </section>
    )
};

export default Display;
