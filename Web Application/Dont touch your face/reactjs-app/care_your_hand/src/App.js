import './App.css';

function App() {
    return (
        <div className="main">
            <h2>Meow</h2>
            <video className="video" audioPlay />

            <div className="control">
                <button className="btn">Train 1</button>
                <button className="btn">Train 2</button>
                <button className="btn">Run</button>
            </div>
        </div>
    );
}

export default App;
