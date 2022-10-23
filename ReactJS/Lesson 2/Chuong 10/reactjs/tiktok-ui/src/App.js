/**






*/

// =============================> 95. Cấu hình Router/Layout cho dự án <============================= //
import GlobalStyles from './96/components/GlobalStyles';
import Main from './96/Main';

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
