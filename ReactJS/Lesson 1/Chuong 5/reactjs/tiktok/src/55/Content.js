 //======================> 55 - useEffect with dependencies <======================//

/** Trường hợp 3
 * 3. useEffects(callback, [deps])
 *  - Callback sẽ được gọi lại mỗi khi 'deps' thay đổi
 */

// sử dụng toán tử '===' để so sánh 'deps' có thay đổi hay không

// ===>Ex - 3. useEffects(callback, [deps])
// Ex - thay từ cuối trong api(https://jsonplaceholder.typicode.com/posts) để call nhiều api khác nhau / (/posts, /comments, /albums)

/**
* ------------------------
* Trong cả 3 trường hợp trên: 
*  - 'callback' luôn được gọi sau khi 'component' mounted
*/


/** 'deps' là gì?
 * - Là 1 biến
 *   + Có thể là 1 'props' truyền từ ngoài vào
 *   + Có thể là 1 'state' trong 'component'
 */

// import { useEffect, useState } from 'react'

// // tao ra array
// const tabs = ['posts', 'comments', 'albums']





// function Content(){
//     // input
//     const [title, setTitle] = useState('')
//     // ul/li 
//     const [posts, setPosts] = useState([])
//     // Coi (/posts, /comments, /albums) là type => tạo type -> default 'posts'
//     const [type, setType] = useState('posts')

//     console.log(type)

//     useEffect(() => {
//         // get API
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//                 setPosts(posts) //bị re-render có thể do 'setPosts(posts)' callApi xong gọi lại components
//             })
//     }, [])
    

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     // Css pro vl :)
//                     // Logic: (dk actived: type === tab)
//                     // type === tab ? {css nè} : {} | nếu true chạy vào {css nè} | false trả về obj rỗng
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333'
//                     } : {}}
//                     onClick={() => setType (tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
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







// // Ex - cho 'title' làm 'deps' 
// // vấn đề xảy ra ở đây: khi nhập dl vào 'input' thì 'title' thay đổi => bị 're-render' -> gọi lại 'callback' 
// // chỉ gọi 'callback' khi 'deps' thay đổi => ở đây 'title' bị thay đổi 

// import { useEffect, useState } from 'react'

// // tao ra array
// const tabs = ['posts', 'comments', 'albums']




// function Content(){
//     // input
//     const [title, setTitle] = useState('')
//     // ul/li 
//     const [posts, setPosts] = useState([])
//     // btn type
//     const [type, setType] = useState('posts')

//     console.log(type)

//     useEffect(() => {
//         console.log('Title changed');

//         // get API
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//                 setPosts(posts)
//             })
//     }, [title])
    

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333'
//                     } : {}}
//                     onClick={() => setType (tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
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







// // Ex - cho 'type' làm 'deps' 

// import { useEffect, useState } from 'react'

// // tao ra array
// const tabs = ['posts', 'comments', 'albums']




// function Content(){
//     // input
//     const [title, setTitle] = useState('')
//     // ul/li 
//     const [posts, setPosts] = useState([])
//     // btn type
//     const [type, setType] = useState('posts')


//     useEffect(() => {
//         console.log('Type changed');

//         // get API
//         fetch('https://jsonplaceholder.typicode.com/posts')
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//                 setPosts(posts)
//             })
//     }, [type])
    

//     return (
//         <div>
//             {tabs.map(tab => (
//                 <button 
//                     key={tab}
//                     style={type === tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333'
//                     } : {}}
//                     onClick={() => setType (tab)}
//                 >
//                     {tab}
//                 </button>
//             ))}
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







// Ex - deps = type / hoàn thành bài toán

import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content(){
    // input
    const [title, setTitle] = useState('')
    // ul/li 
    const [posts, setPosts] = useState([])
    // btn type
    const [type, setType] = useState('posts')


    useEffect(() => {
        
        // case 1: 'cach toi nghi ra'
        // const myStr = 'https://jsonplaceholder.typicode.com/' + type
        // console.log('Type changed & my style is: ' + myStr);


        // case 2: 'lam nhu video la duoc' / đổi về template string

        // get API
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                setPosts(posts)
            })
    }, [type])
    

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}
                    onClick={() => setType (tab)}
                >
                    {tab}
                </button>
            ))}
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li style={{listStyle: 'none'}} key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )

}













export default Content;