import clsx from 'clsx'
import styles from './Button2.module.css'

// Nhận primary ở đây
function Button2({ primary }){

    /** clsx()
     * clsx(class luôn có)
     * {} obj lúc có lúc k
     */

    // tạo biến lưu class
    const classes = clsx(styles.btn, {
        // Logic: nếu 'primary' = true => add class này 
        [styles.primary]: primary
    })


    // Ex - sử dụng cả 'module' & 'global'
    const classes2 = clsx(styles.btn, 'd-flex', {
        [styles.primary]: primary
    })


    // Ex - sử dụng cả 'module' & 'global' lúc có lúc k
    const classes3 = clsx(styles.btn, {
        [styles.primary]: primary,
        'd-flex': true //show
        // 'd-flex': true //false
    })

    return(
        <>
            {/* None class */}
            <button>Click me now!</button>
            
            {/* Ex - 1 */}
            <button className={classes}>
                Click me now!
            </button>

            {/* Ex - 2 */}
            <button className={classes2}>
                Click me now!
            </button>
            
            {/* Ex - 3 */}
            <button className={classes3}>
                Click me now!
            </button>
        </>
    )
}

export default Button2