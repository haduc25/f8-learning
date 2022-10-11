 //======================> 61 - useEffect with fake Chat App <======================//


// //===> Ex - Ứng dụng fake Chat App + File index.js
import { useEffect, useState } from 'react'


const lessons = [
    {
        id: 1,
        name: 'What is ReactJS?'
    },
    {
        id: 2,
        name: 'What is HTML, CSS?'
    },
    {
        id: 3,
        name: 'Where are you from?'
    },
    {
        id: 4,
        name: 'Who is your crush?'
    },
    {
        id: 5,
        name: 'Arrow function'
    }
]



function Content(){
    // lesson id / id default = 1
    const [lessonId, setLessonId] = useState(1)

    // // handleComment
    // const handleComment = (e) => {
    //     console.log(e); //return (lesson-1) CustomEvent {isTrusted: false, detail: 'Nội dung comment của lesson 1', type: 'lesson-1', target: Window, currentTarget: Window, …}
    // }

    // handleComment - lấy ra detail - dùng destructuring
    const handleComment = ({ detail }) => {
        console.log(detail); //return (lesson-1) Nội dung comment của lesson 1
    }

    // Listen Custom Event
    useEffect(() => {
        window.addEventListener(`lesson-1`, handleComment)
    })

    return (
        <div>
            <ul>
                {
                    lessons.map(lesson => (
                        <li
                            key={lesson.id}
                            // Logic active: nếu lessonId(state) = lesson.id (array lessons) => red | else #333
                            style={{
                                color: lessonId === lesson.id ? 'red' : '#333'
                            }}
                            // set lai lessonID khi click
                            onClick={() => setLessonId(lesson.id)}
                        >
                            {lesson.name}
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}












export default Content;