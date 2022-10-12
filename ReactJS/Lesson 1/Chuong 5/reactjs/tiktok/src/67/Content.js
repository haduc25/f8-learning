 //======================> 67 - useCallback hook <======================//


// ==> Ex - Sử dụng memo & truyền giá trị 
import { memo } from 'react'

function Content({ onIncrease }) {
    console.log('re-render'); //k dc sử dụng nhưng vẫn bị re-render

    return (
        <>
        <h2>My reflection is here. Do me a favour, cariño. Kill her. |</h2>
        <button onClick={onIncrease}>Click me!</button>
        </>
    )
}



export default memo(Content);