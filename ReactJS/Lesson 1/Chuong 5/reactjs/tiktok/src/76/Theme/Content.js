import Paragraph from "./Paragraph";


// // ==> Ex - Truyền thông thường khi k sử dụng 'Context'
// function Content({ theme }) {
//     return (
//         <div>
//             <Paragraph theme={ theme }/>
//         </div>
//     )
// }



// ==> Ex - Sử dụng 'Context' giải quyết vấn đề trên
function Content() {
    return (
        <div>
            <Paragraph />
        </div>
    )
}












export default Content;
