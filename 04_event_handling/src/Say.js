import { useState } from "react";

const Say = () => {
    const [message, setMessage] = useState("");
    const onClickEnter = () => setMessage("Welcome!");
    const onClickLeave = () => setMessage("GoodBye!");

    const [color, setColor] = useState("black");

    return (
        <div>
            <button onClick={onClickEnter}>Enter</button>
            <button onClick={onClickLeave}>Leave</button>
            <h1>{message}</h1>
        </div>
    );
};

export default Say;
