import { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    // debouncedValue, default = value / truyền từ ngoài vào
    const [debouncedValue, setDebouncedValue] = useState(value);

    // deps = value
    useEffect(() => {
        /** Logic:
         * - gọi đến setDebouncedValue() set lại value => setDebouncedValue(value) sau 1 khoảng thời gian (delay) ms
         */
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        // Cleanup - Func
        return () => clearTimeout(handler);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    return debouncedValue;
}

export default useDebounce;

////Tự code lại :>
// import { useState, useEffect } from 'react';

// function useDebounce(value, delay) {
//     const [debouncedValue, setdebouncedValue] = useState(value);

//     useEffect(() => {
//         const handler = setTimeout(() => setdebouncedValue(value), delay);
//         // eslint-disable-next-line react-hooks/exhaustive-deps

//         return () => clearTimeout(handler);
//     }, [value]);
//     return debouncedValue;
// }

// export default useDebounce;
