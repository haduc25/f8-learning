import html from "./core.js";

const cars = [
    'Mazda',
    'Porsche',
    'Mercedes'
]

const isSuccess = true;

// sử dụng `Tagged template literals` => html``
const output = html`
<ul>
    <h2>${isSuccess}</h2>
    ${cars.map(car => `<li>${car}</li>`)}  
</ul> 
`

console.log(output)