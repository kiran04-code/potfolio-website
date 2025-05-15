import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-start relative pt-24">
      {/* Top-left corner Introduction */}
      

      {/* Centered About Box */}
      <div className="w-[90%] max-w-5xl bg-zinc-900 p-4 rounded-tl-[25px] rounded-br-[25px]">
         
        <div className="px-2 sm:px-4">
      
          {/* Section Heading */}
          <h1 className="text-orange-300 font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-center">
            About Me!
          </h1>

         <p className="text-zinc-300 text-base sm:text-lg leading-relaxed text-center">
  👨‍💻 Passionate Web Developer | <span className="text-orange-300">MERN Stack Developer</span> | Web3 Enthusiast | Software Developer <br />
  Hi! I’m <span className="text-orange-300 font-semibold">Kiran Santosh Rathod</span>, a first-year Computer Science Engineering student at VIT, Pune. <br />
  I focus on <span className="text-orange-300">Blockchain</span>, and enjoy exploring <span className="text-orange-300">hackathons</span> and <span className="text-orange-300">DevOps</span>. <br />
  I'm passionate about full-stack development and building real-world MERN stack projects while diving into next-gen Web3 technologies.
</p>
        </div>
      </div>
    </div>
  );
};

export default About;
