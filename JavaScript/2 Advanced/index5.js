// ###################### Fn.call() method  ###################### //

/*
// Exam 1 - call(), mượn hàm, gọi hàm
const teacher = {
    fName: "Xuan",
    lName: "Mai"
}

const me = {
    fName: "Minh",
    lName: "Duc",
    
    showFullName(){
        // console.log(this); //`this` hiện tại đang là đối tượng `window`=> khi mà gọi (me.showFullName.call()) mà chưa đc `bind`

        // sau khi đc bind => me.showFullName.call(me)
        // me.showFullName.call(me) 

        // su dung call()
        // + sau khi `bind` xong se goi ham, còn `bind` chỉ `bind` chứ k gọi hàm

        console.log(`${this.fName} ${this.lName}`);
    }
}

// me.showFullName.call(me) //Minh Duc
me.showFullName.call(teacher) //Xuan Mai => mượn hàm (showFullName) từ obj me
*/


/*
// Exam 2 - trong `strict mode` vẫn có `this` nếu được `bind`

this.fName = "Minh"
this.lName = "Duc"

function showFullName(){
    console.log(`${this.fName} ${this.lName}`); //Minh Duc
}

showFullName.call(this) //nếu dùng trong `strict mode` thì `bind` `this` vẫn dùng đc
*/

/*
// Exam 3 - thể hiện tính kế thừa (extends) trong OOP

function Animal(name, weight){
    this.name = name;
    this.weight = weight;
    // và bên này sẽ nhận đc legs là 2
}

function Pig(name, weight, legs){\
    // extends with call()
    Animal.call(this, name, weight) // gọi func Animal & bind `this` (this đang là thanhTuyn)
    this.legs = legs;
}

const thanhTuyn = new Pig('Thanh Tuyen', 62, 2)

console.log(thanhTuyn)
*/

/*
// Exam 4 - mượn hàm (function borrowing), ví dụ với `arguments`

function logger(){
    // console.log(arguments)

    // Mượn phương thức forEach() từ Array
    const arr = Array.prototype.forEach.call(arguments, item => {
        console.log(item)
    })
    // `arguments` sẽ trở thành `this` => `this` trong `forEach` loop qua `arguments`
}

logger(1, 2, 3, 4, 5, 6)
*/


// Exam 5 - Các cách để convert arguments to array
function logger(){
    // Case 1
    const arr = Array.prototype.slice.call(arguments) //convert arguments to array

    console.log(arr) //(6) [1, 2, 3, 4, 5, 6]

    arr.forEach(element => {
        console.log(element) 
    });


    // Case 2
    const arr2 = Array.from(arguments) //convert to array
    console.log(arr2)

    // Case 3 - ES6
    const arr3 = [...arguments]
    console.log(arr3)
}

logger(1, 2, 3, 4, 5, 6)