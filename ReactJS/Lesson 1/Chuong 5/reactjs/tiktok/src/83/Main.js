//======================> 82 - useImperativeHandle hook & forwardRef() <======================//
import Heading from './components/Heading/'
import Paragraph from './components/Paragraph/'

 function Main(){
 
     return(
         <div>
             <Heading />
             <Paragraph />
         </div>
     )
 }
 
 
/** Có 2 cách giải quyết vấn đề style bị ảnh hưởng 2 file != nhau 
 *  - CSS Module
 *  - Styled component
*/
 

/** CSS Module usage
 * 1. đổi tên file |  style.css -> style.module.css
 * 2. file style.module.css export default ra 1 obj
*/
 
/** CSS Module Ưu điểm
 * - Giải quyết kế thừa -> tạo Component Global -> file css thường
 * - CSS đi cùng với Component (Khi k dùng -> k import => k bị thừa)
 * - Có thể dung SCSS để khắc phục phần tag name
 */

/** CSS Module Nhược điểm
 * - Không có tính kế thừa (nhưng vẫn có cách giải quyết)
 * - Khi dùng CSS Module k đưa tag name vào (vì k module đc) | (h1...h7, *)
 * - Khi suwr dụng -> thường đựat tên theo camelCase
*/





 export default Main