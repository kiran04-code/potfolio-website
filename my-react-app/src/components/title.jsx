import React from "react";

const Title = () => {
  return (
    <div className="w-full h-[35%] flex items-center justify-center">
      <div className="px-4 md:px-0 text-center mt-40">
        <h1 className="text-white font-bold text-4xl md:text-5xl">
          Yes! I'm a{" "}
          <span className="text-orange-300 font-bold text-5xl md:text-6xl">
            software Developer.
          </span>
        </h1>
        <p className="text-white mt-4">
          Thanks for visiting my portfolio. Explore my work, skills, and aspirations.
        </p>
      </div>
    </div>
  );
};

export default Title;
