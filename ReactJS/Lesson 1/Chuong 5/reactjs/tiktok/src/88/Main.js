import { Routes, Route } from 'react-router-dom'

import HomePage from './pages/Home'
import NewsPage from './pages/News'
import ContactPage from './pages/Contact'


function Main(){
    return (
       <>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/news">News</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
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