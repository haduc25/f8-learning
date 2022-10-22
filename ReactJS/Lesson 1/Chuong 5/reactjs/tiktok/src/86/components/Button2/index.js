import clsx from 'clsx'
import styles from './Button2.module.css'

function Button2({ primary }){

    // tạo biến lưu class
    const classes = clsx(styles.btn, {
        [styles.primary]: primary
    })

    return(
        <>
            {/* None class */}
            <button>Click me now!</button>
            
            <button className={classes}>
                Click me now!
            </button>
        </>
    )
}

export default Button2