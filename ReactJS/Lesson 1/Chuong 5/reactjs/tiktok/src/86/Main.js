//======================> 87 - Install SASS để dùng SCSS? <======================//

import Button2 from './components/Button2/'
import GlobalStyles from './components/GlobalStyles'

 function Main(){
 
     return(
        <GlobalStyles>
            <div>
                <Button2/>
                <Button2 primary/>
                <Button2 primary disabled/>
            </div>
        </GlobalStyles>
     )
 }
 

/** SCSS Usage
 * 1. đổi tên file css |  Button2.module.css -> Button2.module.scss
 * 2. install lib: npm i sass
*/




 export default Main


 