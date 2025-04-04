import { useContext, useState, useEffect } from 'react'
import { themeContext } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Preloader from './components/Preloader'
import Sidebar from './components/Sidebar'


const App = () => {

  const [loading, setLoading] = useState(true)
  const { theme } = useContext(themeContext)

  useEffect(() => {
    if (!theme) {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    }
  }, [theme]);

  return (
    <>
      <div className={`wrapper w-full min-h-screen transition-all duration-200 ease ${theme ? 'dark:bg-white dark:text-black border-black/40 shadow-black' : 'dark:bg-zinc-950 dark:text-white border-white/40 shadow-white'} overflow-x-hidden text-xs md:text-lg`}>
      {
        loading ? (
          <Preloader onFinish={() => setLoading(false)}/>
        ) : (
          <div className='w-full h-full overflow-x-hidden '>
            <Sidebar/>
            <Navbar />
            <Main />
          </div>
        )
      }
      </div>
    </>
  )
}

export default App