 //======================> 55 - useEffect with dependencies (Bài tập) <======================//

/** Trường hợp 3. useEffects(callback, [deps]) */

// ===> Ex - CallAPI đã cho (/posts, /comments, /albums, /photos, /todos, /users)


import { useEffect, useState } from 'react'

const tabs = ['posts', 'comments', 'albums', 'photos', 'todos', 'users']

function Content(){
    // input
    const [title, setTitle] = useState('')
    // ul/li 
    const [posts, setPosts] = useState([])
    // btn type
    const [type, setType] = useState(tabs[0]) //tabs[0] = 'posts'
    // console.log(tabs[0]); //return posts


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/' + type)
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
            <br/>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map((post) => (
                    <li style={{listStyle: 'none'}} key={post.id}>ID: {post.id} => {post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )

}













export default Content;