import { useContext } from 'react'
import { sidebarContext } from '../context/SidebarContext'
import { themeContext } from '../context/ThemeContext'

const Sidebar = () => {

    const { theme } = useContext(themeContext)
    const { sidevalue, setSidevalue } = useContext(sidebarContext)

    function handleSidebar() {
        setSidevalue(false)
    }

    return (
        <>
            <div className={`sidebar ${sidevalue === false ? 'w-0' : 'w-[70%]'} h-screen md:hidden fixed right-0 z-[50] transition-all duration-200 ease-in-out ${theme ? 'shadow-black shadow-lg bg-stone-300/10 font-semibold' : 'shadow-white shadow-lg bg-black/10'}`}>
                <i className={`ri-close-large-line absolute right-[1rem] top-[1.2rem] z-40 ${sidevalue === false ? 'hidden' : 'inline-block'}`} onClick={handleSidebar}></i>
                <nav className='sidebar-nav md:hidden w-full h-[60%] flex items-center justify-center relative z-30'>
                    <ul className={`${sidevalue ? 'w-[80%]' : 'hidden'} flex flex-col justify-center items-center gap-[2rem] text-center text-sm`}>
                        <li className='w-full border-b-[0.01rem]'><a href="">Home</a></li>
                        <li className='w-full border-b-[0.01rem]'><a href="">About</a></li>
                        <li className='w-full border-b-[0.01rem]'><a href="">Blog</a></li>
                        <li className='w-full border-b-[0.01rem]'><a href="">Contact</a></li>
                    <button className='resume-btn w-[50%] border-[0.1rem] absolute bottom-[1rem] rounded-sm active:scale-[0.9] transition-all duration-200 ease-out'>Resume &nbsp; <i className="ri-download-2-line"></i></button>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Sidebar 