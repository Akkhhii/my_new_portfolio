const Skills = () => {
    const skills = [
      { name: 'React', icon: 'react-icon.png' },
      { name: 'Node.js', icon: 'nodejs-icon.png' },
      { name: 'MongoDB', icon: 'mongodb-icon.png' },
      { name: 'Tailwind CSS', icon: 'tailwind-icon.png' },
      { name: 'JavaScript', icon: 'js-icon.png' },
      { name: 'Git', icon: 'git-icon.png' },
    ];
  
    return (
      <section className="skills-section flex flex-col gap-[3rem]">
        <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
        <div className="flex flex-wrap justify-center items-center gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="glass-card rounded-lg backdrop-blur-md bg-white/10 border border-white/10 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center"
            >
              <img src={skill.icon} alt={skill.name} className="w-12 h-12 mx-auto" />
              <p className="mt-4 text-center">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };

  export default Skills