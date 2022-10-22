import clsx from 'clsx'
import styles from './Button.module.scss'

// Nhận primary ở đây
function Button({ primary, disabled }){
    // tạo biến lưu class
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled
    })

    return(
        <>
            <button className={classes}>
                Click me now!
            </button>
        </>
    )
}

export default Button