// // ==> Ex - Truyền thông thường khi k sử dụng 'Context'
// function Paragraph({ theme }) {

//     console.log('theme: ', theme);

//     return (
//         // add class
//         <p className={theme}>
//             This is fun. Who needs training dummies when you have real dummies!?
//         </p>
//     )
// }


// ==> Ex - Sử dụng 'Context' giải quyết vấn đề trên
// import useContext hook để nhận dl từ 'ThemeContext'
import { useContext } from 'react'
// import
import { ThemeContext } from '../App'



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
