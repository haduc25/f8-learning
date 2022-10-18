import { useState, createContext } from 'react'

// 1. Tạo ra Context
const ThemeContext = createContext()

// 2. Tạo ra Provider / biến ThemeProvider thành grap => nhận children
function ThemeProvider({ children }) {
    // tao state theme / default = dark
    const [theme, setTheme] = useState('dark')

    // toggleTheme
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    // truyền obj qua value
    const value = {
        theme,
        toggleTheme
    }
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}


// export
export { ThemeContext, ThemeProvider }






