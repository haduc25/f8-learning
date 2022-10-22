//======================> 87 - Install SASS để dùng SCSS? <======================//

import Button from './components/Button/'
import GlobalStyles from './components/GlobalStyles'

 function Main(){
 
     return(
        <GlobalStyles>
            <div>
                <Button/>
                <Button primary/>
                <Button primary disabled/>
            </div>
        </GlobalStyles>
     )
 }
 

/** SCSS Usage
 * 1. đổi tên file css |  Button.module.css -> Button.module.scss
 * 2. install lib: npm i sass
*/




 export default Main


 