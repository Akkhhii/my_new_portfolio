import { createContext, useState } from "react";


export const themeContext = createContext()

const ThemeContextProvider = ({children})=>{

    const [theme, setTheme] = useState(false)

    return(
        <themeContext.Provider value={{theme, setTheme}}>
            {children}
        </themeContext.Provider>
    )
}

export default ThemeContextProvider