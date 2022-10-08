 //======================> 55 - useEffect with dependencies <======================//

// ===>Ex - 3. useEffects(callback, [deps])
// Ex - thay từ cuối trong api(https://jsonplaceholder.typicode.com/posts) để call nhiều api khác nhau / (/posts, /comments, /albums)

/**
* ------------------------
* Trong cả 3 trường hợp trên: 
*  - 'callback' luôn được gọi sau khi 'component' mounted
*/


import { useEffect, useState } from 'react'

// tao ra array
const tabs = ['posts', 'comments', 'albums']





function Content(){
    // input
    const [title, setTitle] = useState('')
    // ul/li 
    const [posts, setPosts] = useState([])
    // Coi (/posts, /comments, /albums) là type => tạo type -> default 'posts'
    const [type, setType] = useState('posts')

    console.log(type)

    useEffect(() => {
        // get API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                console.log(posts);
                setPosts(posts) //bị re-render có thể do 'setPosts(posts)' callApi xong gọi lại components
            })
    }, [])
    

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    // Css pro vl :)
                    // Logic: (dk actived: type === tab)
                    // type === tab ? {css nè} : {} | nếu true chạy vào {css nè} | false trả về obj rỗng
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
                    <li style={{listStyle: 'none'}} key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )

}


export default Content;