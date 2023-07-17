import PropTypes from "prop-types";

const MyComponent = ({ name, favoriteNumber, children }) => {
    return (
        <div>
            Hello, My Name is {name}. <br />
            Children Value : {children}. <br />
            My Favorite Number is : {favoriteNumber}. <br />
        </div>
    );
};

MyComponent.defaultProps = {
    name: "DefaultName",
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
};
export default MyComponent;
