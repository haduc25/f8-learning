
// // ==> Ex - k sử dụng memo & k muốn re-render
// function Content() {
//     console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render

//     return (
//         <h2>My reflection is here. Do me a favour, cariño. Kill her.</h2>
//     )
// }






// // ==> Ex - k sử dụng memo & muốn re-render | trường hợp này k nhất thiết cần memo
// function Content({ count}) {
//     console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render

//     return (
//         <h2>My reflection is here. Do me a favour, cariño. Kill her. | {count}</h2>
//     )
// }






// // ==> Ex - Sử dụng memo & khắc phục re-render khi dl k thay đổi
// import { memo } from 'react'


// function Content({ count}) {
//     console.log('re-render');

//     return (
//         <h2>My reflection is here. Do me a favour, cariño. Kill her. | {count}</h2>
//     )
// }


/**  ==> Nguyên lý hoạt động của memo
 *      + Nhận vào 1 'Component' & check các props của 'Component' xem có bị thay đổi hay không?
 *      + Nếu có 1 props bị thay đổi giá trị => re-render | nếu k k re-render    
 *      + Sử dụng toán tử '===' để so sánh
*/







// ==> Ex - Sử dụng memo & truyền giá trị
import { memo } from 'react'

function Content({ count}) {
    console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render

    return (
        <h2>My reflection is here. Do me a favour, cariño. Kill her. | {count}</h2>
    )
}



/** Khi nào sử dụng 'memo'? 
 *  + Khi 1 'Component' có nhiều 'props' -> cần re-render
 *  + Nếu độ phức tạp cao, tránh re-render nhiều -> nên dùng
 *  + Nhiều State
*/



export default memo(Content);