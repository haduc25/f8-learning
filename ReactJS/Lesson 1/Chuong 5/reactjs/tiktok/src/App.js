/** Chương 6
 * 48 -  useState hook
 * 
 * 
 * 
 */

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
//         {/* render */}
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
//         {/* render */}
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





// Ex - Set state là thay thế state bằng giá trị mới
import { useState } from 'react'

function App() {

  
  const [info, setInfo] = useState({
    name: 'Ha Minh Duc',
    age: 22,
    address: 'Bac Kan, VN'
  })

  const handleUpdate = () =>{
    // // khi clicked => thay thế obj
    // setInfo({
    //   facebook: 'haduc.25.09'
    // })

    // // nếu muốn thêm giá trị vào obj
    // // case 1: dùng spread giải obj cũ | dùng khi bài toán đơn giản
    setInfo({
      ...info,
      facebook: 'haduc.25.09'
    })

    // // case 2: dùng callback + spread
    // setInfo(prev => ({
    //   ...prev,  
    //   facebook: 'haduc.25.09'
    // }))

    // // case 3: dùng callback + spread + logic => return | dùng khi cần xử lý logic
    // setInfo(prev => {
    //   // logic...

    //   return {
    //     ...prev,  
    //     facebook: 'haduc.25.09'
    //   }
    // })
  }


  return (
    <div className="App" style={{ textAlign: 'center' }}>
      {/* Render Object => dùng 'JSON.stringify(urObj)' */}
        <h1>{JSON.stringify(info)}</h1>
        <button onClick={handleUpdate}>Update</button>
    </div>
  );
}













export default App;
