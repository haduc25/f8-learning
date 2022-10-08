 //======================> 53 - useEffect hook <======================//



/** ===> Các kiến thức cơ bản & nâng cao cần có trong bài này
 * Events: Add / remove event listener
 * Observer pattern: Subscribe / Unsubscribe (JS nang cao)
 * Closure  (JS nang cao)
 * Timers: setInterval, setTimeout, clearInterval, clearTimeout
 * useState
 * Mounted / Unmounted
 * Toán tử '==='
 * Call API
 */


// Khi nào cần dùng 'useEffect' => khi muốn thực hiện các 'Side effects'
// Side effects: nói tới 1 chương trình phần mềm khi có tác động xảy ra dẫn tới dữ liệu của chương trình bị thay đổi


/** Các bài tập, ví dụ khi sử dụng 'useEffect'
 * 1. Update DOM
 *    - F8 blog title
 * 2. Call API
 * 3. Listen DOM events
 *    - Scroll
 *    - Resize
 * 4. Cleanup
 *    - Remove listener / Unsubscribe
 *    - Clear timer
 */



/** USAGE: 
 * useEffects(callback, [deps])
 * Nhận vào 2 đối số / callback (bắt buộc) / [deps] (k bắt buộc)
 */


/** Các trường hợp khi sử dụng 'useEffects'
 * 1. useEffects(callback)
 *  - Gọi 'callback' mỗi khi 'component' re-render
 *  - Gọi 'callback' sau khi 'component' thêm element vào DOM
 * 2. useEffects(callback, [])
 *  - Chỉ gọi 'callback' 1 lần mỗi khi 'component' mounted
 * 3. useEffects(callback, [deps])
 * 
 * ------------------------
 * Trong cả 3 trường hợp trên: 
 *  - 'callback' luôn được gọi sau khi 'component' mounted
*/



// ===> EX 1 - 1. Update DOM / F8 blog title

// // Ex - Callback luôn được gọi sau

// import { useEffect } from 'react'
// function Content(){

//     useEffect(() => console.log('Mouned'))

//     return (
//         <h1>Be faster</h1>
//     )
// }




// // Ex - Gọi 'callback' mỗi khi 'component' re-render
// import { useEffect, useState } from 'react'

// function Content(){
//     // input
//     const [title, setTitle] = useState('')

//     useEffect(() => console.log('Mouned'))

//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//         </div>
//     )
// }




// // Ex - Gọi 'callback' sau khi 'component' thêm element vào DOM
// import { useEffect, useState } from 'react'

// function Content(){
//     // input
//     const [title, setTitle] = useState('')

//     useEffect(() => console.log('Mouned / Re-render =>', title))

//     // return chạy trước -> callback trong 'useEffect' mới đc chạy
//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {console.log('render')}
//         </div>
//     )
// }




// // Ex - Update DOM - title
// import { useEffect, useState } from 'react'

// function Content(){
//     // input
//     const [title, setTitle] = useState('')

//     useEffect(() => {
//         document.title = title;
//     })

//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {console.log('render')}
//         </div>
//     )

//     // phải viết code vào trong 'useEffect' vì ưu tiên UI đc render trước
// }



// ===> EX 2 - 2. Call API
// Ex - API 100 posts - https://jsonplaceholder.typicode.com/posts 

// // Ex - Xảy ra vấn đề là bị gọi API liên tục -> cần sử dụng trường hợp 2 (useEffect(callback, []))
// import { useEffect, useState } from 'react'

// function Content(){
//     // input
//     const [title, setTitle] = useState('')

//     useEffect(() => {
//         document.title = title;
//         // get API
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//             })
//     })




//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             {console.log('render')}
//         </div>
//     )

// }





// // Ex - Xảy ra vấn đề là bị gọi API liên tục (chrome -> devtools -> network -> fetch => api called more tahn 2000 times)) -> cần sử dụng trường hợp 2 (useEffect(callback, []))
// import { useEffect, useState } from 'react'

// function Content(){
//     // input
//     const [title, setTitle] = useState('')
//     // ul/li 
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         document.title = title;
//         // get API
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);

//                 // setPosts vao array
//                 setPosts(posts)
//             })
//     })




//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             />
//             <ul>
//                 {posts.map((post) => (
//                     <li style={{listStyle: 'none'}} key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     )

// }




// Ex -  2. useEffects(callback, []) - Chỉ gọi 'callback' 1 lần mỗi khi 'component' mounted
import { useEffect, useState } from 'react'

function Content(){
    // input
    const [title, setTitle] = useState('')
    // ul/li 
    const [posts, setPosts] = useState([])

    useEffect(() => {
        document.title = title;
        // get API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                setPosts(posts)
            })
    }, [])
    
    console.log(title);

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li style={{listStyle: 'none'}} key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}

















export default Content;