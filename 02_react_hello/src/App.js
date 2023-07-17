import "./App.css";

function App() {
    const name = "React";
    return (
        <>
            {/* this is comment */}
            <div
                className="react" // this is also comment
            >
                {name}
            </div>
            <div></div>
            <div>// This is shown. /* This is also shown.</div>
        </>
    );
}

export default App;
