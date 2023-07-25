import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";
import Layout from "./pages/Layout";

const App = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile/:username" element={<Profile />} />
                <Route path="/articles" element={<Articles />}>
                    <Route path="/articles/:id" element={<Article />} />
                </Route>
            </Route>
        </Routes>
    );
};

export default App;
