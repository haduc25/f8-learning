//  ###################### This ###################### //
/*
// Exam1: Logic like Function Constructor

const iPhoneXR = {
    // Thuộc tính - Property
    name: 'iPhone XR',
    color: 'Blue',
    weight: 450,

    // Phương thức - Method
    takePhoto(){
        console.log('Take a photo');
        console.log(this); //Từ khóa `this` trong js đề cập đến đối tượng mà nó thuộc về
        // `this` ở đây là `iPhoneXR`
    },
    objChild: {
        name: 'Minh Duc',
        methodChild(){
            console.log(this);
        }
    }
}

console.log(iPhoneXR.name); //iPhone XR
console.log(iPhoneXR.takePhoto()); // object iPhoneXR
iPhoneXR.objChild.methodChild(); // object objChild => {name: 'Minh Duc', methodChild: ƒ}
*/

/*
// Exam 2 - Hàm tạo
function Car(name, color, weight){
    this.name = name;
    this.color = color;
    this.weight = weight;

    this.run = function(){
        console.log('Running...', this); //object Car {name: 'Mercedes S450', color: 'black', weight: 1400, run: ƒ}
    }
}

const mercedesS450 = new Car('Mercedes S450', 'black', 1400) 
console.log(mercedesS450) // Car {name: 'Mercedes S450', color: 'black', weight: 1400}

mercedesS450.run();
*/

/*
// Exam 3 - using DOM => this
const button = document.querySelector('button');

button.onclick = function(){
    console.dir(this.innerText) //Click me now ! => this ở đây là button
}

*/

/*
// Exam 4 - `this` on global


// `this` trong func se la window => va trong `strict mode` thi se la `undefined`
"use strict"

function myFunc() {
    console.log('this inside func: ', this);
}

// myFunc() // trong `strict mode` => window.myFunc()
window.myFunc() // Window {window: Window, self: Window, document: document, name: 'Mercedes S450', location: Location, …}


console.log('this on global: ', this); //Window {window: Window, self: Window, document: document, name: 'Mercedes S450', location: Location, …}
*/

// Exam 5 - `this` trong hàm tạo là đại diện cho đối tượng sẽ được tạo
function Car(name, color){
    this.name = name; // Porsche
    this.color = color; // blue
    
    // `this` ở đây là đại diện cho đối tượng sẽ được tạo ra => porsche | tương tự lần gọi t2 this là mercedesS450

    this.run = function(){
        console.log(this) //this ở đây là porsche & mercedesS450
    }
}

const porsche = new Car('Porsche', 'blue');
const mercedesS450 = new Car('Mercedes S450', 'red');

// console.log(porsche) // Car {name: 'Porsche', color: 'blue'}
// console.log(mercedesS450) // Car {name: 'Mercedes S450', color: 'red'}


porsche.run(); //Car {name: 'Porsche', color: 'blue', run: ƒ}
mercedesS450.run(); //Car {name: 'Porsche', color: 'blue', run: ƒ}


// Exam sử dung prototype
Car.prototype.openDoor = function(){
    console.log(this) // this ở đây là `porsche` 
}

porsche.openDoor() 



// Exam sử dung prototype - func inside a func => this là window
Car.prototype.closeDoor = function(){
    // Mỗi function đều có 1 Context (ngữ cảnh) khác nhau
    function test() {
        console.log(this) // vậy nên `this` ở đây là `window`
        // Window {window: Window, self: Window, document: document, name: 'Mercedes S450', location: Location, …}
    }
    test();
}

porsche.closeDoor()
