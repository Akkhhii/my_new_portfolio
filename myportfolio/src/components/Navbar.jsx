import { useContext } from "react"
import { themeContext } from "../context/ThemeContext";
import { sidebarContext } from "../context/SidebarContext";

const Navbar = () => {

    const { theme, setTheme } = useContext(themeContext);
    const { setSidevalue } = useContext(sidebarContext);

    function toggleTheme(){
        setTheme(theme === false ? true : false);
    }
    
    function handleSidebar(){
        setSidevalue(true)
    }

    return (
        <>
            <header className={`' w-full h-[4rem] flex justify-between items-center fixed top-0 ${theme ? 'bg-stone-300' : 'bg-zinc-900'} z-30`}>
                <img src="./logo6.png" alt="my logo" className="w-[3rem] h-[2.5rem]" id="logo"/>

                <nav className='hidden md:inline-block lg:w-[30vw]'>
                    <ul className="w-[25vw] h-[full] md:w-[38vw] lg:w-full flex justify-between items-center ">
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </nav>
                
                <div className="btncontainer w-[20vw] md:w-[20vw] md:text-sm lg:w-[16vw] flex justify-between items-center">
                    <button className="resume-btn border-[1px] hidden md:inline-block rounded-sm active:scale-[0.9] transition-all ease-out duration-200">Resume &nbsp; <i className="ri-download-2-line"></i></button>
                    <button className="w-[2.5rem] h-[2.5rem] rounded-full flex justify-center items-center" onClick={toggleTheme}>
                        {
                            theme ? (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-800 rotate-45 transition-all duration-300 ease"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                            ) : (
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 transition-all duration-200 ease"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                >
                                <path
                                className='transition-all duration-200 ease-out'
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                />
                            </svg>
                            )
                        }
                    </button>
                    <i className="ri-menu-3-fill md:hidden" onClick={handleSidebar}></i>
                </div>

            </header>
        </>
    )
}

export default Navbar