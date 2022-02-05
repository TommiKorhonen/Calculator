

const Display = ({ currentOperand, previousOperand, operation }) => {

    return (
        <section>
            <div className="text-white flex flex-col items-end p-4 justify-center">
                <div>{previousOperand} {operation}</div>
                <div>{currentOperand}</div>
            </div>
        </section>
    )
};

export default Display;
