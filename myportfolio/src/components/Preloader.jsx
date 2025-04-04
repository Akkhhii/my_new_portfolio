import { useEffect } from "react";

const Preloader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 100); // Increase duration to 3 seconds for better effect
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    // <div className="min-h-screen preloader bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col items-center justify-center">
    //   {/* Lottie Animation */}
    //   <motion.div
    //     initial={{ opacity: 0, scale: 0.8 }}
    //     animate={{ opacity: 1, scale: 1 }}
    //     transition={{ duration: 1 }}
    //     className="w-48 h-48"
    //   >
    //     <Lottie animationData={animationData} loop={true} />
    //   </motion.div>

    //   {/* Typing Animation Text */}
    //   <motion.h1
    //     initial={{ opacity: 0 }}
    //     animate={{ opacity: 1 }}
    //     transition={{ delay: 0.5, duration: 1 }}
    //     className="text-2xl md:text-3xl font-bold text-white mt-6 typing-animation"
    //   >
    //     Crafting Digital Experiences...
    //   </motion.h1>

    //   {/* Progress Bar */}
    //   <motion.div
    //     initial={{ width: 0 }}
    //     animate={{ width: "100%" }}
    //     transition={{ duration: 3, ease: "linear" }}
    //     className="h-1 bg-blue-500 mt-6 w-64 rounded-full"
    //   />
    // </div>
    <div className="min-h-screen preloader bg-gradient-to-r from-zinc-900 to-zinc-800 flex flex-col items-center justify-center gap-[2rem]">
      {/* Custom SVG Animation */}
      <svg
        className="w-24 h-24 animate-spin text-blue-500"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 6v6l4 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Typing Animation Text */}
      <h1 className="text-2xl md:text-3xl font-bold text-white mt-6 typing-animation">
        Crafting Digital Experiences...
      </h1>
    </div>
  );
};

export default Preloader;