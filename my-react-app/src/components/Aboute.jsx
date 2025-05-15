import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-start relative pt-24">
      {/* Top-left corner Introduction */}
      <p className="absolute top-5 left-22 text-zinc-200  font-bold text-[20px] inline-block border-b-3 border-orange-300">
        Introduction
      </p>

      {/* Centered About Box */}
      <div className="w-[90%] max-w-5xl bg-zinc-900 p-4 rounded-tl-[25px] rounded-br-[25px]">
        <div className="px-2 sm:px-4">
          {/* Section Heading */}
          <h1 className="text-orange-300 font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
            About Me!
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-center">
            👨‍💻 Passionate Web Developer | <span className="text-orange-300">MERN Stack Developer</span> | Web3 Enthusiast | Software Developer <br />
            Hello! I’m <span className="text-orange-300 font-semibold">Kiran Santosh Rathod</span>, a dedicated first-year Computer Science Engineering student at Vishwakarma Institute of Technology, Pune. <br />
            I specialize in <span className="text-orange-300">Cybersecurity</span>, <span className="text-orange-300">Blockchain</span>, and the <span className="text-orange-300">Internet of Things (IoT)</span>. <br />
            With a strong interest in full-stack development and next-gen web technologies, I’m building real-world projects using the MERN stack while exploring the future of Web3 and secure systems.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
