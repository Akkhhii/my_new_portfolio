import { useContext } from 'react';
import {themeContext} from '../context/ThemeContext'

const CTA = () => {

  const {theme} = useContext(themeContext)

    return (
      <section className={`cta py-12 ${theme ? 'bg-stone-200 text-black' : 'bg-zinc-900 text-white'} text-center flex flex-col gap-[2rem] justify-center items-center rounded-xl`}>
        <h2 className="text-3xl font-bold mb-4">Let's Work Together!</h2>
        <p className="mb-6">I'm always open to new opportunities and collaborations.</p>
        <a href="#contact" className="cta-btn w-[30%] md:w-[20%] lg:w-[10%] bg-white text-blue-600 px-6 py-3 rounded-lg font-bold">Get in Touch</a>
      </section>
    );
  };

  export default CTA