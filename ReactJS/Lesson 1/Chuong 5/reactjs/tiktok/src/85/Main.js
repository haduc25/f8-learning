//======================> 85 - Thư viện clsx và classnames <======================//
import Button from './components/Button/'
import Button2 from './components/Button2/'
import GlobalStyles from './components/GlobalStyles'

 function Main(){
 
     return(
        <GlobalStyles>
            <div>
                <h2>Button Ex 1</h2>                
                <Button />

                <br/>

                <h2>Button Ex 2 - primary</h2>                
                {/* Ex: button có primary */}
                <Button2 primary/>


            </div>
        </GlobalStyles>
     )
 }
 




 export default Main