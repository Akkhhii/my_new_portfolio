import { createContext, useState } from "react";

export const sidebarContext = createContext()

const sidebarContextProvider = ({children}) =>{
    const [sidevalue, setSidevalue] = useState(false)

    return(
        <sidebarContext.Provider value ={{sidevalue, setSidevalue}}>
            {children}
        </sidebarContext.Provider>
    )
}

export default sidebarContextProvider