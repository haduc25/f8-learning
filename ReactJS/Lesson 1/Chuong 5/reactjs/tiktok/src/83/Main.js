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
 * 
*/
 export default Main