import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>The First Upcoming Page.</p>
            <ul>
                <li>
                    <Link to="/about">Introduce</Link>
                </li>
                <li>
                    <Link to="/profile/whisoo98">whisoo98</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
                <li>
                    <Link to="/articles">Article List</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
