// 205. Polyfill là gì? Khi nào cần sử dụng?

// Polyfill

// Nếu browser k hỗ trợ
if(!String.prototype.includes){
    // nhận vào đối số 1 = string, đối số 2 = int, điểm bắt đầu
    String.prototype.includes = (search, start) => {
        'use strict'; // strict mode / chế độ nghiêm ngặt => khóa nâng cao

        // Kt có lỗi hay k => có print ra lỗi
        if(search instanceof RegExp){
            throw TypeError('First argument must not be a RegExp'); //return app.js:27 Uncaught TypeError: First argument must not be a RegExp
        }

        // Kt nếu 'start' k truyền vào => gán = 0
        if(start === undefined){start = 0;}
        return this.indexOf(search, start) !== -1;  //return true/flase | tìm đc => true / k tìm được false
    }
}


// Example
const name = 'Minh Duc learning javascript!';
var checker = name.includes('Duc', 0);
console.log(checker); //return true/false

