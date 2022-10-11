import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// //===> Ex - Ứng dụng fake Chat App + File index.js (Bai 61)
// Fake events cho toàn bộ file
// Node: Fake comments
function enitComment(id){
  // enit: phát đi
  // Đây là cách 'CustomEvent' để tự phát đi 1 event tùy ý


  // Dùng 'setInterval' để tự động phát sau 2s
  setInterval(() => {
    // dùng dispatchEvent() ở phạm vi window
    // EventTarget.dispatchEvent(): https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent
    window.dispatchEvent(
      // CustomEvent(name, obj event)

      // CustomEvent(): 
      //  - The CustomEvent() constructor creates a new CustomEvent object.
      //  - https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent

      // Syntax:
      //  - new CustomEvent(type)
      //  - new CustomEvent(type, options)


      new CustomEvent(`lesson-${id}`, {
        detail: `Nội dung comment của lesson ${id}`
      })
    )
  }, 2000)
}

// exec Function
enitComment(1)
enitComment(2)
enitComment(3)
enitComment(4)
enitComment(5)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
