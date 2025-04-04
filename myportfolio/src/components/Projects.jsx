import Slider from "./Slider";

const Projects = () => {

  return (
    <section className="my-projects h-[70vh] gap-[5rem] md:h-[65vh] lg:h-[90vh] lg:gap-[4rem]">
      <h2 className="text-3xl font-bold text-center">My Projects</h2>
      <Slider/>
    </section>
  );
};

export default Projects