/** Chương 6
 //======================> 48 - useState hook <======================//

// // Ex - Ứng dụng đếm số khi clicked vào button / bắt đầu từ số 1

// import { useState } from 'react'

// function App() {

//   // create State
//   const [counter, setCounter] = useState(1)

//   //fucntion handleIncrease
//   const handleIncrease = () =>{
//       // gọi hàm setCounter()
//       setCounter(counter + 1)
//   }

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <h1>{counter}</h1>
//         <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }





// // Ex - Set state với callback
// import { useState } from 'react'

// function App() {
//   const [counter, setCounter] = useState(1)

//   const handleIncrease = () =>{
//     // callback return curentValue / giá tri hiện tại / 1
//     setCounter(prevState => prevState + 1) //2
//     setCounter(prevState => prevState + 1) //3
//     setCounter(prevState => prevState + 1) //4
//   }

//   console.log('re-render'); //chạy 1 lần 

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <h1>{counter}</h1>
//         <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }





// // Ex - Initial state với callback
// import { useState } from 'react'

// const orders = [100, 200, 300, 400]

// function App() {

  
//   const [counter, setCounter] = useState(() => {
//     const total = orders.reduce((total, cur) => total + cur)
//     console.log(total)

//     return total
//   })

//   const handleIncrease = () =>{
//     setCounter(prevState => prevState + 1)
//   }


//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <h1>{counter}</h1>
//         <button onClick={handleIncrease}>Increase</button>
//     </div>
//   );
// }





// // Ex - Set state là thay thế state bằng giá trị mới
// import { useState } from 'react'

// function App() {

  
//   const [info, setInfo] = useState({
//     name: 'Ha Minh Duc',
//     age: 22,
//     address: 'Bac Kan, VN'
//   })

//   const handleUpdate = () =>{
//     // // khi clicked => thay thế obj
//     // setInfo({
//     //   facebook: 'haduc.25.09'
//     // })

//     // // nếu muốn thêm giá trị vào obj
//     // // case 1: dùng spread giải obj cũ | dùng khi bài toán đơn giản
//     setInfo({
//       ...info,
//       facebook: 'haduc.25.09'
//     })

//     // // case 2: dùng callback + spread
//     // setInfo(prev => ({
//     //   ...prev,  
//     //   facebook: 'haduc.25.09'
//     // }))

//     // // case 3: dùng callback + spread + logic => return | dùng khi cần xử lý logic
//     // setInfo(prev => {
//     //   // logic...

//     //   return {
//     //     ...prev,  
//     //     facebook: 'haduc.25.09'
//     //   }
//     // })
//   }


//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//       {// Render Object => dùng 'JSON.stringify(urObj)' //}
//         <h1>{JSON.stringify(info)}</h1>
//         <button onClick={handleUpdate}>Update</button>
//     </div>
//   );
// }







 //======================> 50 - Two-way binding trong React? <======================//

// //Ex - App random gift
// import { useState } from "react";


// // cho 1 array
// const gifts = [
//   'CPU i9-12900k',
//   'iPhone 14 Pro Max',
//   'Vandal Forsaken',
//   'Reaver Operater',
//   'Crush ^^'
// ]

// function App() {
//   const [gift, setGift] = useState()


//   const randomGift = () =>{
//     const index = Math.floor(Math.random() * gifts.length);

//     // console.log(index);
//     console.log(index, gifts[index]);
//     setGift(gifts[index])
//   }

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <h2>{gift || 'Bạn chưa có phần thưởng'}</h2>
//         <button onClick={randomGift}>Lấy thưởng ngay</button>
//     </div>
//   );
// }










//===>Ex - One-way Binding / Two-way Binding

// //Ex - One-way Binding 
// import { useState } from "react";


// function App() {
//   const [name, setName] = useState('')

//   console.log(name);

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <input
//           onChange={e => setName(e.target.value)}
//         />
//     </div>
//   );
// }




// //Ex - Two-way Binding
// import { useState } from "react";


// function App() {
//   const [name, setName] = useState('')

//   const randomGift = () =>{

//   }


//   console.log(name);

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <input
//           value={name} 
//           onChange={e => setName(e.target.value)}
//         />
//         <button onClick={() => setName('Ha Minh Duc')}>Change</button>
//     </div>
//   );

//   // value={name} | gán 'name' vào attribute value
// }




// //Ex - Two-way Binding | Ứng dụng - Textbox
// import { useState } from "react";


// function App() {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')

//   const handleSubmit = () =>{
//     // CALL API
//     console.log({
//       name,
//       email
//     });
//   }



//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <input
//           value={name} 
//           onChange={e => setName(e.target.value)}
//         />
//         <br/>
//         <input
//           value={email} 
//           onChange={e => setEmail(e.target.value)}
//         />
//         <br/>
//         <button onClick={handleSubmit}>Register</button>
//     </div>
//   );
// }




// //Ex - Two-way Binding | Ứng dụng - RadioButton
// import { useState } from "react";


// // Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS, Javascript'
//   },
//   {
//     id: 2,
//     name: 'PHP'
//   },
//   {
//     id: 3,
//     name: 'Ruby'
//   },
//   {
//     id: 4,
//     name: 'Your Crush <3'
//   },
//   {
//     id: 5,
//     name: 'ReactJS'
//   }
// ]



// function App() {
//   //// check radio
//   // const [checked, setChecked] = useState()

//   //set default
//   const [checked, setChecked] = useState(4) //default id 4
  
//   const handleSubmit = () =>{
//     // CALL API
//     console.log({ id: checked });
    
//   }
  
//   console.log(checked);

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         {courses.map(course => (
//             <div key={course.id}>
//               <input 
//                 type="radio"
//                 checked = {checked === course.id}
//                 onChange={() => setChecked(course.id)}  
//               />
//               {course.name}
//             </div>
//         ))}
//         <br/>
//         <button onClick={handleSubmit}>Register</button>
//     </div>
//   );

//   // dùng map(): lặp qua array
//   // checked = {checked === course.id} | nếu true -> cho check
// }




// //Ex - Two-way Binding | Ứng dụng - Textbox
// import { useState } from "react";


// // Response from API
// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS, Javascript'
//   },
//   {
//     id: 2,
//     name: 'PHP'
//   },
//   {
//     id: 3,
//     name: 'Ruby'
//   },
//   {
//     id: 4,
//     name: 'Your Crush <3'
//   },
//   {
//     id: 5,
//     name: 'ReactJS'
//   }
// ]



// function App() {
//   //// check textbox => khởi tạo là 1 array
//   const [checked, setChecked] = useState([])

//   const handleCheck = (id) => {
    
//     setChecked(prev => {
//       const isChecked = checked.includes(id);
//       if(isChecked){
//         // Uncheck
//         // dùng 'filter' loại bỏ id đang lựa chọn
//         // Logic: lọc ra những 'id' khác 'id' đã có trong array
//         return checked.filter(item => item !== id)
//       }else{
//         // giải array cũ & thêm id vào array
//         return [...prev, id]
//       }
//     })
//   }

//   const handleSubmit = () =>{
//     // CALL API
//     console.log({ ids: checked });
    
//   }
  
//   console.log(checked);

//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         {courses.map(course => (
//             <div key={course.id}>
//               <input 
//                 type="checkbox"
//                 checked = {checked.includes(course.id)}
//                 onChange={() => handleCheck(course.id)}  
//               />
//               {course.name}
//             </div>
//         ))}
//         <br/>
//         <button onClick={handleSubmit}>Register</button>
//     </div>
//   );

//   // logic: khi click push 'id' vào array
//   // logic check: dùng 'includes' check trong array có 'id' đó hay k? => nếu true truyền cho checked 
//   // 'includes' return true nếu array 'courses' có chứa id đã check 


//   // Fix lặp kết quả / bỏ check khi đã có value trong array

// }




 //======================> 51 - Todolist with useState <======================//

// //Ex - Simple Todolist
// import { useState } from "react";
// function App() {
//   // Nhận job từ input
//   const [job, setJob] = useState('')
//   // array save Worklist

//   //case 1 - dung toan tu ??
//   // const [jobs, setJobs] = useState(storageJobs ?? [])
//   // // syntax: ??
//   // // storageJobs ?? [] | Trong trường hợp vế thứ 1(storageJobs) là 'null' or 'undefined' => lấy vế thứ 2([])


//   //case 2 - dung toan tu ?? + dung callback (recommend => tang performance)
//   // Fix: giai quyet van de performance khi bi goi den ham 'JSON.parse' moi khi them dl / render nhieu lan
//   // => cho vao gia tri ban dau (callback)

//   const [jobs, setJobs] = useState(() => {
//     // lấy dl từ localStorage / convert
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log('Value of storageJobs: ', storageJobs);

//     // convert json -> array
//     // console.log(JSON.parse(storageJobs)) //return (khi chưa convert => storageJobs = localStorage.getItem('jobs')) => (2) ['ahihi', 'meowmeo'] 


//     return storageJobs ?? [];
//   })

//   console.log(job,jobs);


//   // function handleSubmit
//   const handleSubmit = () =>{
//     // push dl vao array | dat lai jobs
//     setJobs(prev => {
//       const newJobs = [...prev, job]

//       // convert qua json
//       // Node: Save to localStorage
//       const jsonJobs = JSON.stringify(newJobs)
//       console.log('localStorage JSON: ', jsonJobs)

//       // save vao LocalStorage
//       localStorage.setItem('jobs', jsonJobs)

//       return newJobs;
//     })
//     // xoa dl tren input
//     setJob('')
//   }



//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <input
//           value={job}
//           onChange={e => setJob(e.target.value)}
//         />

//         <button onClick={handleSubmit}>Add</button>

//         <ul>
//           {jobs.map((job, index) => (
//             <li style={{ listStyleType: 'none' }} key={index}>{job}</li>
//           ))}
//         </ul>

//     </div>
//   );

// }









// //Ex - Simple Todolist => clean + delete / Tham khảo: https://codesandbox.io/s/throbbing-dawn-9165bv?file=/src/App.js
// import { useState } from "react";
// function App() {
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     // lấy dl từ localStorage / convert
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log('Value of storageJobs: ', storageJobs);
//     return storageJobs ?? [];
//   })

//   //hàm thêm job
//   const handleSubmit = () =>{
//     setJobs(prev => {
//       const newJobs = [...prev, job]
//       //gọi hàm render để lưu vào store local
//       renderJob(newJobs);
//       return newJobs
//     })
//     setJob('')
//   }

//   //hàm xóa job
//   const handleRemove = (job) =>{
//     const newJobs = jobs.filter((value) => value !== job);
//     setJobs(newJobs);
//     renderJob(newJobs); //lua lai
//   }

//   const renderJob = (newJobs) => {
//     //Lưu vào localStorage
//     const jsonJobs = JSON.stringify(newJobs);
//     localStorage.setItem("jobs", jsonJobs);
//   }


//   return (
//     <div className="App" style={{ textAlign: 'center' }}>
//         <input
//           value={job}
//           onChange={e => setJob(e.target.value)}
//         />
//         <button onClick={handleSubmit}>Add</button>
//         <ul>
//           {jobs.map((job, index) => (
//             <li style={{ listStyleType: 'none' }} key={index}>
//               {job}_________
//               <button onClick={() => handleRemove(job)}>x</button>
//             </li>
//           ))}
//         </ul>

//     </div>
//   );

// }





 //======================> 52 - Mounted & Unmounted? <======================//
  // Mounted: gắn vào
  // Unmounted: tháo ra, gỡ ra


// inport content
import Content from "./52/Content";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false) //giá trị ban đầu = fasle => ẩn


  return (
    <div className="App" style={{ textAlign: 'center' }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        { show && <Content />}
    </div>
  );
  // setShow(!show): phủ định của 'show' | đang true -> false | false -> true

  // Mounted: khi đưa '<Content />' vào sử dụng => Mounted / hiện
  // Unmounted: khi đưa '<Content />' bị gỡ => Unmounted / ẩn
  }




  //======================> 53 - useEffect hook <======================//


  // inport content
  import Content from "./53/Content";
  import { useState } from "react";
  function App() {
    const [show, setShow] = useState(false) //giá trị ban đầu = fasle => ẩn


    return (
      <div className="App" style={{ textAlign: 'center' }}>
          <button onClick={() => setShow(!show)}>Toggle</button>
          { show && <Content />}
      </div>
    );
  }
  
  
  
   //======================> 55 - useEffect with dependencies <======================//
  
  
  // inport content
  import Content from "./55/Content";
  import { useState } from "react";
  function App() {
    const [show, setShow] = useState(false)
  
  
    return (
      <div className="App" style={{ textAlign: 'center' }}>
          <button onClick={() => setShow(!show)}>Toggle</button>
          { show && <Content />}
      </div>
    );
  }

  
  
  
  //  //======================> 55 - useEffect with dependencies (Bài tập) <======================//
  
  
  // // inport content
  // import Content from "./55-BaiTap/Content";
  // import { useState } from "react";
  // function App() {
  //   const [show, setShow] = useState(false)
  
  
  //   return (
  //     <div className="App" style={{ textAlign: 'center' }}>
  //         <button onClick={() => setShow(!show)}>Toggle</button>
  //         { show && <Content />}
  //     </div>
  //   );
  // }

  
  
  
   //======================> 57 - useEffect with DOM events <======================//
  
  
  // inport content
  import Content from "./57/Content";
  import { useState } from "react";
  function App() {
    const [show, setShow] = useState(false)
  
  
    return (
      <div className="App" style={{ textAlign: 'center' }}>
          <button onClick={() => setShow(!show)}>Toggle</button>
          { show && <Content />}
      </div>
    );
  }
  
  
  
  
   //======================> 59 - useEffect with timer functions <======================//
  
  
  // inport content
  import Content from "./59/Content";
  import { useState } from "react";
  function App() {
    const [show, setShow] = useState(false)
  
  
    return (
      <div className="App" style={{ textAlign: 'center' }}>
          <button onClick={() => setShow(!show)}>Toggle</button>
          { show && <Content />}
      </div>
    );
  }
  
  
  
   //======================> 60 - useEffect with preview avatar <======================//
  
  
  // inport content
  import Content from "./60/Content";
  import { useState } from "react";
  function App() {
    const [show, setShow] = useState(false)
  
  
    return (
      <div className="App" style={{ textAlign: 'center' }}>
          <button onClick={() => setShow(!show)}>Toggle</button>
          { show && <Content />}
      </div>
    );
  }


  
  
  
  //  //======================> 61 - useEffect with fake Chat App <======================//
  
  
  // // inport content
  // import Content from "./61/Content";
  // import { useState } from "react";
  // function App() {
  //   const [show, setShow] = useState(false)
  
  
  //   return (
  //     <div className="App" style={{ textAlign: 'center' }}>
  //         <button onClick={() => setShow(!show)}>Toggle</button>
  //         { show && <Content />}
  //     </div>
  //   );
  // }
  
 */



 //======================> 61 - Chữa bài useEffect with preview avatar <======================//


// inport content
import Content from "./61-chua-bt-60/Content";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(false)


  return (
    <div className="App" style={{ textAlign: 'center' }}>
        <button onClick={() => setShow(!show)}>Toggle</button>
        { show && <Content />}
    </div>
  );
}
























export default App;
