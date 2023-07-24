import { useReducer } from "react";

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { value: state.value + 1 };
        case "DECREMENT":
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispach] = useReducer(reducer, { value: 0 });

    return (
        <div>
            <p>
                Presenting Counter Value is <b>{state.value}</b>.
            </p>
            <button onClick={() => dispach({ type: "INCREMENT" })}>+1</button>
            <button onClick={() => dispach({ type: "DECREMENT" })}>-1</button>
        </div>
    );
};

export default Counter;
