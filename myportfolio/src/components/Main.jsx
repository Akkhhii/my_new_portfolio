import About from "./About"
import Robot from "./Robot"
import Skills from "./Skills"
import Contact from "./Contact"
import Footer from "./Footer"
import CTA from "./Cta"
import Projects from "./Projects"


const Main = () => {
  return (
    <>
      <main className='main w-full min-h-screen relative lg:items-center lg:justify-center'>
        <div className="w-full h-full flex flex-col lg:flex-row-reverse">
          <section className="w-full h-[50vh] lg:w-1/2 lg:h-[80vh]">
            <Robot />
          </section>

          <section className="section2 w-full lg:w-1/2 lg:h-[80vh] flex flex-col items-center justify-center">
            <div className="text-center flex flex-col gap-[2rem] justify-center items-center lg:relative lg:top-[2rem]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-600 mb-4">
                Hey, I'm Akhil!
              </h1>
              <h2 className="text-lg md:text-2xl text-gray-400 mb-8">
                I'm a <span className="text-blue-600/70 font-semibold">Fullstack Developer</span> with a passion for building scalable and user-friendly applications.
              </h2>
              <p className="text-md md:text-xl text-gray-400 max-w-2xl mx-auto">
                Welcome to my portfolio! I specialize in creating seamless web experiences using modern technologies like <strong>React</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong>. Whether it's a dynamic frontend or a robust backend, I love turning ideas into reality.
              </p>
            </div>
          </section>
        </div>

        {/* Skills Section */}
        <div className="w-full mt-10 flex flex-col gap-[3rem]">
          <Skills />
          <About />
          <Projects/>
          <Contact />
          <CTA />
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Main