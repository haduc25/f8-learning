// //===> Ex - Fix k cho chọn img giống nhau -> trùng tên

import { useEffect, useState } from 'react'


function Content(){
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])


    // handlePreviewAvatar
    const handlePreviewAvatar = (e) =>{
        const file = e.target.files[0]
        console.log(URL.createObjectURL(file)); //return blob:http://localhost:3000/8b48c78c-a1c0-4fb5-aaa6-2a60c4684109
        file.preview = URL.createObjectURL(file)
        // Set lại avatar
        setAvatar(file)  
        
        // Fix: set lại value của input
        e.target.value = null;

        console.log('Checker is: ', Math.random());
    }


    return (
        <div>
            <input 
                type='file'
                onChange={handlePreviewAvatar}
            />
            <br/><br/><br/>
            {avatar && (
                <img src={avatar.preview} alt='' width='60%' />
            )}
        </div>
    )

}


export default Content;
