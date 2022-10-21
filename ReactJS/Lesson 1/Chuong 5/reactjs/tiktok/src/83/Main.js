   //======================> 83 - CSS module <======================//
import Heading from './components/Heading/'
import Paragraph from './components/Paragraph/'
import GlobalStyles from './components/GlobalStyles'

 function Main(){
 
     return(
        // k dùng global
        //  <div>
        //      <Heading />
        //      <Paragraph />
        //  </div>

        //  Phần này là css all (global)
        <GlobalStyles>
            <div>
                <Heading />
                <Paragraph />
            </div>
            <div className='d-flex'>
                <div>Item 1</div>
                <div>Item 2</div>
            </div>
            <div className='text-big-60'>This text too big</div>
        </GlobalStyles>
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