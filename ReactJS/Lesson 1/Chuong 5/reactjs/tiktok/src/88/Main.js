import { Routes, Route, Link } from 'react-router-dom'

import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'


function Main(){
    /** Vì thẻ <a></a> bị reload lại trang => dùng Link
     * Link: k bị reload -> đã đc xử lý js
     * Link: k thể chuyển trang -> chỉ dùng trong 1 trang / nội bộ
     * Syntax: <Link to=''>
    */
    
    return (
       <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>


            {/* Routes, Route: sử dụng ở nơi nội dung có thể thay đổi trong tương lai  */}
            <Routes>
                {/* <Route path='' element={reactElement} /> */}

                <Route path='/' element={<HomePage />} />
                <Route path='/news' element={<NewsPage />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
       </>
     )
}


export default Main