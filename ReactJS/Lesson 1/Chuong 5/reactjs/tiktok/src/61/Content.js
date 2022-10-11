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