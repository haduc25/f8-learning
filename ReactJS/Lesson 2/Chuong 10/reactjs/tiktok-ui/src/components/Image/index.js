import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';

// console.log(images);
// console.log(images.noImage);

// // case 1: Dùng forwardRef

// // nhận tất cả props từ ngoài
// function Image(...props) {
//     // Vì trong Menu dùng Tippy => Tippy cần ref
//     return <img {...props} />;
// }

// case 2: Dùng forwardRef

const Image = forwardRef(({ src, alt, className, ...props }, ref) => {
    // fallback: khi lỗi / default = ''
    const [fallback, setFallback] = useState('');

    // handleError
    const handleError = () => {
        // Khi link image bị lỗi
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />

        /** className={classNames(styles.wrapper, className)}
         * classNames(className): lấy className từ bên ngoài truyền vào
         * classNames(styles.wrapper): là style mặc định => (.wrapper) / giống kiểu cx('wrapper') nhưng ở đây k dùng bind()
         */
    );

    /** src={fallback || src}
     * nếu có 'fallback' => dùng 'fallback'
     * vì 'fallback' lần đầu chạy là chuỗi rỗng => sẽ ưu tiế src truyền tù ngoài vào
     * //=>nếu link lỗi => setFallback
     */

    /** Hoạt động:
     * - Khi component đc mount => có ref
     * - Nhờ có 'forwardRef' => bê đc ref ra ngoài qua component Image
     * => Tippy sẽ nhận đc ref
     */

    /** Logic:
     * Nếu không lỗi => show ảnh user custom
     * Nếu lỗi => show ảnh noImage
     */
});

export default Image;
