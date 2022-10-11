
// // ==> Ex - k sử dụng memo & k muốn re-render
// function Content() {
//     console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render

//     return (
//         <h2>My reflection is here. Do me a favour, cariño. Kill her.</h2>
//     )
// }






// ==> Ex - k sử dụng memo & muốn re-render | trường hợp này k nhất thiết cần memo
function Content() {
    console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render

    return (
        <h2>My reflection is here. Do me a favour, cariño. Kill her.</h2>
    )
}








export default Content;