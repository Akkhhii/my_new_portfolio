const Contact = () => {
    return (
      <section className="contact-me py-12 flex flex-col gap-[2rem] justify-center items-center">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-[2rem]">
          <p>Feel free to reach out to me for any inquiries or collaborations.</p>
          <div className="mt-6">
            <a href="mailto:akhil@example.com" className="text-blue-600">akhilvds52@gmail.com</a>
          </div>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://github.com/Akkhhii" target="_blank" rel="noopener noreferrer">GitHub &nbsp;</a>
            <a href="https://linkedin.com/in/akhil" target="_blank" rel="noopener noreferrer">LinkedIn &nbsp;</a>
            <a href="https://twitter.com/akhil" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </section>
    );
  };

  export default Contact