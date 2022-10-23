/**
// =============================> 92. Cài đặt babel-plugin-module-resolver <============================= //

import logo from './logo.svg';
import './App.css';
import Main from './92/Main';

function App() {
    return (
        <div className="App" style={{ textAlign: 'center' }}>
            <Main />

            <br />
            <br />

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </div>
    );
}





*/

// =============================> 94. Cấu hình sử dụng CSS/SASS <============================= //
import GlobalStyles from './94/components/GlobalStyles';
import Main from './94/Main';

// App.js == index.js //tạm thời => app chính add vào index.js
// wrap = Ctrl + Shift + P => wrap => GlobalStyles
function App() {
    return (
        <div style={{ textAlign: 'center' }}>
            <GlobalStyles>
                <Main />
            </GlobalStyles>
        </div>
    );
}

export default App;
