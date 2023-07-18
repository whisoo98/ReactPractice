import { useState } from "react";

const EventPractice = () => {
    const [form, setForm] = useState({
        username: "",
        message: "",
    });
    const { username, message } = form;

    const onChange = (e) => {
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextForm);
    };
    const onClick = () => {
        alert(username + ": " + message);
        setForm({
            username: "",
            message: "",
        });
    };
    const onKeyDown = (e) => {
        if (e.key === "Enter") onClick();
    };
    return (
        <div>
            <h1> Event Practice </h1>
            <input
                type="text"
                name="username"
                placeholder="username"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="type anything"
                value={message}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            <button onClick={onClick}>Submit</button>
        </div>
    );
};

export default EventPractice;
