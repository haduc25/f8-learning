import clsx from 'clsx'
import styles from './Button.module.css'

function Button(){
    return(
        <>
            <button className={styles.btn}>
                Click me now!
            </button>

            {/* =================> Các cách sử dụng nhiều class <================= */}
            {/* 1. Template String */}
            <button className={`${styles.btn} ${styles.active}`}>
                Click me now!
            </button>

            {/* 2. Dùng array => chuyển qua string */}
            <button className={[styles.btn, styles.active].join(' ')}>
                Click me now!
            </button>

            {/* 3. Dùng thư viện clsx hoặc classnames */}
            {/*  clsx -> install (terminal): npm i clsx */}
            {/* clsx */}
            <button className={clsx(styles.btn, styles.active)}>
                Click me now!
            </button>

            {/* clsx: xử lý class động | nhận vào obj | obj có thể nằm ở bất kỳ vị trí nào trong clsx(obj đây nè, hoặc ở đây) */}
            <button className={clsx(styles.btn, {
                // obj sẽ thêm class lúc có lúc k
                // lấy giá trị trong obj => cần cho vào [] / array

                [styles.active]: true //show
                // [styles.active]: false //hide
            })}>
                Click me now!
            </button>

        </>
    )
}

export default Button