import clsx from 'clsx'
import styles from './Button2.module.scss'

function Button2({ primary, disabled }){

    // tạo biến lưu class
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        [styles.disabled]: disabled //nếu k có key 'disabled' -> undefined
    })

    return(
        <>
            <button className={classes}>
                Click me now!
            </button>
        </>
    )
}

export default Button2