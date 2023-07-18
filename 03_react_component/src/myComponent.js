import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
    static defaultProps = {
        name: "Default",
    };
    static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number,
    };
    render() {
        const { name, favoriteNumber, children } = this.props;
        return (
            <div>
                Hello, My Name is {name}.<br />
                Children Value : {children}. <br />
                My Favorite Number is {favoriteNumber}. <br />
            </div>
        );
    }
}

// MyComponent.defaultProps = {
//     name: "Default",
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     favoriteNumber: PropTypes.number,
// };

export default MyComponent;
