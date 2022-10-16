// ==> Ex - Đã thêm ThemeContext trong file index.js
import { useContext } from 'react'
import { ThemeContext } from '../Theme/ThemeContext'



function Paragraph() {

    // Nhận dữ liệu / Consumer
    const context = useContext(ThemeContext) //từ 'ThemeContext.Provider' có value là gì thì 'theme' sẽ nhận đc value tương ứng 
    //ở đây nhận vào obj value từ file 'ThemeContext.js'

    console.log('(Paragraph.js) - obj from ThemeContext.js: ', context);
    console.log('Status of theme is: ', context.theme);

    return (
        // add class
        <p className={context.theme}>
            This is fun. Who needs training dummies when you have real dummies!?
        </p>
    )
}






export default Paragraph;
