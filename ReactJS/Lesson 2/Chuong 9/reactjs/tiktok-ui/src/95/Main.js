import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '~/95/pages/Home';
import Following from '~/95/pages/Following';

// Main.js == App.js //tạm thời => app chính add vào App.js
function Main() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/following" element={<Following />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Main;
