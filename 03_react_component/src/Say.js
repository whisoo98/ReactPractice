// Say.js
import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("Welcome!");
    const onClickLeave = () => setMessage("GoodBye!");

    const [colors, setColor] = useState({
        backgroundColor: "black",
        color: "aqua",
    });

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1 style={colors}>{message}</h1>
            <button
                style={{ backgroundColor: "black", color: "red" }}
                onClick={() =>
                    setColor({
                        backgroundColor: "black",
                        color: "red",
                    })
                }>
                Red
            </button>
            <button
                style={{ backgroundColor: "black", color: "green" }}
                onClick={() =>
                    setColor({
                        backgroundColor: "black",
                        color: "green",
                    })
                }>
                Green
            </button>
            <button
                style={{ backgroundColor: "black", color: "blue" }}
                onClick={() =>
                    setColor({
                        backgroundColor: "black",
                        color: "blue",
                    })
                }>
                Blue
            </button>
        </div>
    );
};

export default Say;
