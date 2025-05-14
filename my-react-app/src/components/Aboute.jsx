import React from "react";

const About = () => {
  return (
    <div className="w-full px-4 py-10 bg-black text-white relative">
      {/* Top-left corner Introduction */}
      <p className="absolute top-5 left-20 text-zinc-400 font-medium text-sm sm:text-base">
        Introduction
      </p>

      <div className="max-w-5xl mx-auto px-4 mt-12 sm:mt-16">
        {/* Section Heading */}
        <h1 className=" text-orange-300 font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
          About Me!
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl font-semibold text-orange-100 mb-4">
          👨‍💻 Passionate Web Developer | <span className="text-orange-300">MERN Stack Developer</span> | Web3 Enthusiast | Software Developer
        </p>

        {/* Description */}
        <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
          Hello! I’m <span className="text-orange-300 font-semibold">Kiran Santosh Rathod</span>, a dedicated first-year Computer Science Engineering student at Vishwakarma Institute of Technology, Pune.
          I specialize in <span className="text-orange-300">Cybersecurity</span>, <span className="text-orange-300">Blockchain</span>, and the <span className="text-orange-300">Internet of Things (IoT)</span>. 
          With a strong interest in full-stack development and next-gen web technologies, I’m building real-world projects using the MERN stack while exploring the future of Web3 and secure systems.
        </p>
      </div>
    </div>
  );
};

export default About;
