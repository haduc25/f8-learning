 //======================> 70 - useMemo hook <======================//

/**  useMemo()
 *  - Viết trong phần thân của 'Function Component'
 *  - Tránh thực hiện lại 1 logic nào đó không cần thiết
*/

// ==> Ex - Sử dụng useMemo()
import { useState, useMemo, useRef } from 'react'

function Content() {
    // name for input
    const [name, setName] = useState('')
    // price for input
    const [price, setPrice] = useState('')
    // array for product
    const [products, setProducts] = useState([]) //init is empty array

    // dùng useRef() để láy element ra forcus
    const nameRef = useRef() 


    // handleSubmit
    const handleSubmit = () => {
        // set lai products -> vào array mới -> dùng spread giải array cũ -> thêm obj => mỗi sp là 1 obj
        setProducts([...products, {
            name,
            /** Input
             * - vì input nhận vào string => cần convert lại
             * > Các kiểu có thể convert
             *  - Number(string)
             *  - parseInt(string)
             *  - Shorthand(tricks): +
             */ 
            price: +price
        }])

        // reset setName, setPrice | xóa data sau khi nhập xong
        setName('')
        setPrice('')

        // forcus vào input: dùng useRef() lấy elemnt từ DOM
        // focus() laf method của DOM Element
        nameRef.current.focus()

        // check
        console.log(nameRef.current); //return <input placeholder="Enter name..." value="">
    }


    // Tính tổng
    // Sử dụng reduce()

    /** => Vấn đề gặp phải khi chưa dùng useMemo
     *  - khi nhập vào input => hàm sẽ re-render
     * 
     *  => Giải quyết vấn đề khi sử dụng useMemo
     *  - Thêm products vào deps để khi có thêm, sửa, xóa -> re-render lại
     * 
     * 
     * ====================
     * useMemo(callback, [])
     * useMemo(callback, [deps])
     * 
     * => Giống useEffect(), useCallback()
     *  - k deps -> chạy 1 lần
     *  - có deps -> + k thay đổi -> return giá trị trước đó / thay đổi -> tính toán lại return giá trị mới
     * => callback cần return
     */

    // products = deps
    const total = useMemo(() => {
        // case 1: theo video
        // const rs = products.reduce((result, product) => {
        //     console.log('Caculating...');
    
        //     return result + product.price
        // }, 0)

        // return rs;


        // case 2: tôi nghĩ nó vấn hoạt động bình thường :>
        return products.reduce((result, product) => {
            console.log('Caculating...');
    
            return result + product.price
        }, 0)

    }, [products])



    // checking
    // console.log(`name: ${name}, price: ${price}`);
    // console.log(typeof price); //return string
    console.log(products);

    return (
        <>
            <h2>Who needs reasons?</h2>
            <input
                ref={nameRef} // lấy element nè :>
                value={name}
                placeholder='Enter name...'
                onChange={e => setName(e.target.value)}
            />
            <br/>
            <input
                value={price}
                placeholder='Enter price...'
                onChange={e => setPrice(e.target.value)}
            />

            <br/><br/>
            <button onClick={handleSubmit}>Add Now</button>
            <br/>

            Total: ${total}
            {/* dùng map() */}
            <ul>
                {products.map((product, index) => (
                    <li key={index}>{product.name} - ${product.price}</li>
                ))}
            </ul>
        </>
    )
}








export default Content;