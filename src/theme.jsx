import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext()

function getTheme() {
    const theme = localStorage.getItem("theme")
    if(!theme) {
        localStorage.setItem("theme", "light")

        return "light"
    } 

    return theme
}

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(getTheme)

    function toggleTheme(theme) {
        setTheme(theme)
    }

    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <ThemeContext.Provider value={{
            theme,
            toggleTheme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, ThemeContext } 