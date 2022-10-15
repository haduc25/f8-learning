 //======================> 68 - useCallback hook <======================//


// ==> Ex - Sử dụng memo & truyền giá trị 
import { memo } from 'react'

function Content({ onIncrease }) {
    console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render


    /** Thêm thẻ grab 
     *  <React.Fragment></React.Fragment>
     *  Shorthand: <></>
    */

    /** Logic:
     * Khi click vào btn Click me!
     * + gọi ngược ra ngoài -> gọi tới 'handleIncrease' 
    */
    return (
        <>
        <h2>My reflection is here. Do me a favour, cariño. Kill her. |</h2>
        <button onClick={onIncrease}>Click me!</button>
        </>
    )
}



export default memo(Content);