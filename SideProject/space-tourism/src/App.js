import { useState, useCallback } from "react";
import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/elements/Header";
import Button from "./components/elements/Button";
import {
    SliderHorizontal,
    SliderVertical,
} from "./components/elements/Sliders";
import Taps from "./components/elements/Taps";
import Home from "./components/0_home/Home";
import Destination from "./components/1_destination/Destination";
import Chpater from "./components/elements/Chapter";
import Crew from "./components/2_crew/Crew";
import Technology from "./components/3_technology/Technology";
import background_desktop from "./images/home/background-home-desktop.jpg";

// TODO
//

const App = () => {
    const [category, setCategory] = useState("Home");
    const [idx, setIdx] = useState(null);
    const onSelect = useCallback((category, idx) => {
        setCategory(category);
        setIdx(idx);
    }, []);
    return (
        <>
            {/* <div
                style={{
                    position: "absolute",
                    display: "flex",
                    backgroundColor: "#0b0d17",
                    backgroundSize: "cover",
                    minWidth: "100vw",
                    minHeight: "100vh",
                    // width: "1440px",
                    // height: "900px",
                    width: "100%",
                    height: "100%",
                }}></div> */}
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            category={category}
                            idx={idx}
                            onSelect={onSelect}
                        />
                    }></Route>
                <Route
                    path="/Home/"
                    element={
                        <Home
                            category={category}
                            idx={idx}
                            onSelect={onSelect}
                        />
                    }></Route>
                <Route
                    path="/Destination/"
                    element={
                        <Destination
                            category={category}
                            idx={idx}
                            onSelect={onSelect}
                        />
                    }></Route>
                <Route
                    path="/Crew/"
                    element={
                        <Crew
                            category={category}
                            idx={idx}
                            onSelect={onSelect}
                        />
                    }></Route>
                <Route
                    path="/Technology/"
                    element={
                        <Technology
                            category={category}
                            idx={idx}
                            onSelect={onSelect}
                        />
                    }></Route>
            </Routes>
            {/* <Header category={category} onSelect={onSelect}></Header>
            <Button />
            <SliderHorizontal />
            <SliderVertical />
            <Taps tap="MOON"></Taps> */}
        </>
    );
};

export default App;
