 //======================> 60 - useEffect with preview avatar <======================//

/** Các trường hợp khi sử dụng 'useEffects'
 * 1. useEffects(callback)
 *  - Gọi 'callback' mỗi khi 'component' re-render
 *  - Gọi 'callback' sau khi 'component' thêm element vào DOM
 * 2. useEffects(callback, [])
 *  - Chỉ gọi 'callback' 1 lần mỗi khi 'component' mounted
 * 3. useEffects(callback, [deps])
 *  - Callback sẽ được gọi lại mỗi khi 'deps' thay đổi
 * ------------------------
 * Trong cả 3 trường hợp trên: 
 *  - 1. 'callback' luôn được gọi sau khi 'component' mounted
 *  - 2. 'Cleanup' function luôn dược gọi trước khi 'component' unmounted / bai 59
 *  - 3. 'Cleanup' function luôn dược gọi trước khi 'callback'  được gọi (trừ lần mounted) / bai 60
 */


// //===> Ex - 3. 'Cleanup' function luôn dược gọi trước khi 'callback'  được gọi (trừ lần mounted)

// import { useEffect, useState } from 'react'


// function Content(){
//     const [count, setCount] = useState(1)

//     // count = deps => count tăng callback đc gọi
//     useEffect(() =>{
//         console.log(`Mounted or Re-render lần ${count}`);

//         // Clear func
//         return () => console.log(`Cleanup lần ${count}`);
//     }, [count])


//     return (
//         <div>
//             <h2>{count}</h2>
//             <button onClick={() => setCount(count + 1)}> Click me ^^</button>
//         </div>
//     )

// }




/** Tổng kết về Cleanup
 * - Trước khi gọi callback mới => Cleanup lần trước đó
 */





// //===> Ex - Ứng dụng về Cleanup - tạo ứng dụng cho phép chọn ảnh avatar -> preview image

import { useEffect, useState } from 'react'


function Content(){
    // dat avatar
    const [avatar, setAvatar] = useState()


    // handlePreviewAvatar
    const handlePreviewAvatar = (e) =>{
        // lấy ra file
        const file = e.target.files[0] //ở đây xử lý 1 image => lấy pt thứ 0, ảnh đầu tiên
        
        // tạo ra url ảo/tạm => sử dụng 'URL.createObjectURL()'
        console.log(file); //return File {name: 'cute-1.jpg', lastModified: 1665398781295, lastModifiedDate: Mon Oct 10 2022 17:46:21 GMT+0700 (Indochina Time), webkitRelativePath: '', size: 197508, …}
        console.log(URL.createObjectURL(file)); //return blob:http://localhost:3000/8b48c78c-a1c0-4fb5-aaa6-2a60c4684109

        // Vì file là obj => thêm property mới -> preview / lưu url của avatar
        file.preview = URL.createObjectURL(file)

        // Set lại avatar
        setAvatar(file)         
        
        
    }


    return (
        <div>
            <input 
                type='file'
                onChange={handlePreviewAvatar}
            />
            <br/><br/><br/>
            {/* Nếu có avatar => hiển thị/return img */}
            {avatar && (
                //Trên đã set property 'preview' => ở đây có thể dùng
                <img src={avatar.preview} alt='' width='60%' />
            )}
        </div>
    )

}











export default Content;