import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './context/ThemeContext.jsx'
import SidebarContextProvider from './context/SidebarContext.jsx'

createRoot(document.getElementById('root')).render(
    <ThemeContextProvider>
        <SidebarContextProvider>
            <App />
        </SidebarContextProvider>
    </ThemeContextProvider>
)