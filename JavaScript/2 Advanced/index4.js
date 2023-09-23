//  ###################### Fn.bind() method - Phần 2 ###################### //

const $ = document.querySelector.bind(document); //bind cho `this` trong `document` ràng buộc
const $$ = document.querySelectorAll.bind(document)

// console.log($('.title').innerText)
const root = $('#root')


const app = (() => {
    const cars = ['Mustang']

    const root = $('#root')
    const input = $('#input')
    const submit = $('#submit')

    return {
        add(car){
            cars.push(car)
        },
        delete(index){
            cars.splice(index, 1)
        },
        handleDelete(e){
            const deleteBtn = e.target.closest('.delete'); //closest(): là phương thức của DOM Element giúp kiểm tra Element đó or PARENT Element có chứa class đó hay k?
            // console.log(deleteBtn)

            if(deleteBtn){
                // data-index => là 1 dataset trong DOM | data-name(đặt tên là gì thì đến lúc) => dataset.name | ở bài này là (Element.dataset.index)
                const index = deleteBtn.dataset.index
                // console.log(index)

                // console.log(this)
                this.delete(index);
                this.render();
                // vì `this` ở trong đây đang là `root` (root.onclick = this.handleDelete) => `this` là `root` vậy nên cần dùng tới `bind()`
            
                //root.onclick = this.handleDelete => root.onclick = this.handleDelete.bind(this)
                // sau khi `bind()` thì `this` ở đây thành `app` có thể `bind(app)` nhma k nên dùng => nên `bind(this)`
            }
        },
        render(){
            const html = cars.map((car, index) => (
                `<li>
                    ${index} => ${car}
                    <span class="delete" data-index="${index}">&times;</span>
                </li>`
            )).join('')

            root.innerHTML = html 
        },
        init(){
            // Handle DOM events
            submit.onclick = () => {
                //  sử dụng arrow func vì k có `Context` vì thế sẽ lấy từ ngoài nên k cần lưu biến `this` (_this=this)
                const car = input.value;
                console.log('car: ', car)
                this.add(car);
                this.render(); //render lại dl

                // clear dl 
                input.value = null;
                input.focus()
            }

            // bắt event từ PARENT
            root.onclick = this.handleDelete.bind(this)


            this.render() // `this` ở đây đang là `app` 

        }
    }
})()

app.init()













