import { Component } from "react";

class EventPractice extends Component {
    state = {
        username: "",
        message: "",
    };

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            console.log(e.target.name),
            console.log(e.target.value)
        );
    };

    handleClick = () => {
        alert(this.state.username + ": " + this.state.message);
        this.setState({
            username: "",
            message: "",
        });
    };

    handleKeyPress = (e) => {
        if (e.key === "Enter") this.handleClick();
    };

    render() {
        return (
            <div>
                <h1>Event Practice</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="type anything"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>Check Message</button>
            </div>
        );
    }
}

export default EventPractice;
