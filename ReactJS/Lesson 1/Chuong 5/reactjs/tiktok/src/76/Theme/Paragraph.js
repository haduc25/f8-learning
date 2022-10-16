// ==> Ex - Đã thêm ThemeContext trong file index.js
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'



function Paragraph() {

    // Nhận dữ liệu / Consumer
    const theme = useContext(ThemeContext) //từ 'ThemeContext.Provider' có value là gì thì 'theme' sẽ nhận đc value tương ứng

    console.log('theme: ', theme);

    return (
        // add class
        <p className={theme}>
            This is fun. Who needs training dummies when you have real dummies!?
        </p>
    )
}






export default Paragraph;
