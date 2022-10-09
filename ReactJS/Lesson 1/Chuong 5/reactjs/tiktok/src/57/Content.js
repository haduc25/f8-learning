 //======================> 57 - useEffect with DOM events <======================//



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
 *  - 2. 'Cleanup' function luôn dược gọi trước khi 'component' unmounted
 */



/**
* 3. Listen DOM events
*    - Scroll
*    - Resize
*/




// // Ex - Listen DOM events => Scroll / cuộn xuống vs khoảng cách dưới 200px -> hiện nút

// import { useEffect, useState } from 'react'

// const tabs = ['posts', 'comments', 'albums']

// function Content(){
//     // input
//     const [title, setTitle] = useState('')
//     // ul/li 
//     const [posts, setPosts] = useState([])
//     // btn type
//     const [type, setType] = useState('posts')
//     // re-render UI
//     const [showGoToTop, setShowGoToTop] = useState(false)


//     useEffect(() => {
//         // get API
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//                 setPosts(posts)
//             })
//     }, [type])


//     // Dùng cách 2: - Chỉ gọi 'callback' 1 lần mỗi khi 'component' mounted
//     useEffect(() => {
//         //handleScroll
//         const handleScroll = () =>{
//             // console.log(window.scrollY);

//             // Case 1
//             if(window.scrollY >= 200){
//                 // Show
//                 setShowGoToTop(true)
//                 console.log('true / set state'); //luôn gọi đến set state nhưng k re-render lại Component 
//             }else{
//                 // Hide
//                 console.log('false');
//                 setShowGoToTop(false)
//             }


//             // // Case 2: - Pro
//             // setShowGoToTop(window.scrollY >= 200)
//         } 

//         // add events
//         window.addEventListener('scroll', handleScroll)
//     }, [])
    
//     console.log('re-render');

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
//                     <li style={{listStyle: 'none'}} key={post.id}>ID: {post.id} __ {post.title || post.name}</li>
//                 ))}
//             </ul> 
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20 
//                     }}
//                 >Go to Top</button>
//             )}
//         </div>
//     )

// }






// // Ex - Mounted / Unmounted - Memory Leak -> Dùng Cleanup function
 
// import { useEffect, useState } from 'react'

// const tabs = ['posts', 'comments', 'albums']

// function Content(){
//     // input
//     const [title, setTitle] = useState('')
//     // ul/li 
//     const [posts, setPosts] = useState([])
//     // btn type
//     const [type, setType] = useState('posts')
//     // re-render UI
//     const [showGoToTop, setShowGoToTop] = useState(false)


//     useEffect(() => {
//         // get API
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 console.log(posts);
//                 setPosts(posts)
//             })
//     }, [type])


//     useEffect(() => {
//         //handleScroll
//         const handleScroll = () =>{
//             // Case 1
//             if(window.scrollY >= 200){
//                 // Show
//                 setShowGoToTop(true)
//                 console.log('true / set state'); //luôn gọi đến set state nhưng k re-render lại Component 
//             }else{
//                 // Hide
//                 console.log('false');
//                 setShowGoToTop(false)
//             }


//             // // Case 2: - Pro
//             // setShowGoToTop(window.scrollY >= 200)
//         } 

//         // add events
//         window.addEventListener('scroll', handleScroll)
//         console.log('addEventListener');

//         // Cleanup function
//         return () => {
//             console.log('Unmounting...');
//             // remove
//             window.removeEventListener('scroll', handleScroll)
//             console.log('removeEventListener');
//         }
//     }, [])
    

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
//                     <li style={{listStyle: 'none'}} key={post.id}>ID: {post.id} __ {post.title || post.name}</li>
//                 ))}
//             </ul> 
//             {showGoToTop && (
//                 <button
//                     style={{
//                         position: 'fixed',
//                         right: 20,
//                         bottom: 20 
//                     }}
//                 >Go to Top</button>
//             )}
//         </div>
//     )

// }






// Ex - Custom
 
import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Content(){
    // ul/li 
    const [posts, setPosts] = useState([])
    // btn type
    const [type, setType] = useState('posts')
    // re-render UI
    const [showGoToTop, setShowGoToTop] = useState(false)
    // goTop - scrollY
    const [goTop, setGoTop] = useState(window.scrollY)


    useEffect(() => {
        // get API
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                setPosts(posts)
            })
    }, [type])


    useEffect(() => {
        //handleScroll
        const handleScroll = () =>{
            setShowGoToTop(window.scrollY >= 200)
        } 

        // add events
        window.addEventListener('scroll', handleScroll)
        console.log('addEventListener');

        // Cleanup function
        return () => {
            console.log('Unmounting...');
            // remove
            window.removeEventListener('scroll', handleScroll)
            console.log('removeEventListener');
        }
    }, [])


    useEffect(() => {
        const handleGoTop = () => {
            setGoTop(window.scrollY)
        }

        //add events
        window.addEventListener('scroll', handleGoTop)
    }, [])
    
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

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
            <h2 style={{
                position: 'sticky', 
                top: 0,  
                backgroundColor: 'green',
                border: '2px solid #4CAF50'
            }}>Value of GoTop is {goTop}</h2>
            <ul>
                {posts.map((post) => (
                    <li style={{listStyle: 'none'}} key={post.id}>ID: {post.id} __ {post.title || post.name}</li>
                ))}
            </ul> 
            {showGoToTop && (
                <button
                    style={{
                        position: 'fixed',
                        right: 20,
                        bottom: 20 
                    }}
                    onClick={goToTop}
                >Go to Top</button>
            )}
        </div>
    )

}






// // Ex - Resize / luon update size
 
// import { useEffect, useState } from 'react'


// function Content(){
//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {
//         const handleResize = () => {
//             setWidth(window.innerWidth)
//         }

//         //add events
//         window.addEventListener('resize', handleResize)
//     }, [])

//     return (
//         <div>
//             <h1>{width}</h1>
//         </div>
//     )

// }














export default Content;