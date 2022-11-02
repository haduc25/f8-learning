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
