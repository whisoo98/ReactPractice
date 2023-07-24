import { useState } from "react";
import Info from "./Info";
import Counter from "./Counter";

const App = () => {
    // return <Counter />;
    // const [visible, setVisible] = useState(false);
    return (
        // <div>
        //     <button
        //         onClick={() => {
        //             setVisible(!visible);
        //         }}>
        //         {visible ? "Un-visible" : "Visible"}
        //     </button>
        //     <hr />
        //     {visible && <Info />}
        // </div>
        <Info />
    );
};

export default App;
