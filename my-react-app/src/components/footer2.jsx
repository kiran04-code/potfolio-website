import React from "react";
import { FaLinkedin } from "react-icons/fa6";
const Footer2 = ()=>{
    return(
    <div className="relative w-full h-[20%] bg-black ">
  <div
    className="absolute top-0 left-0 w-full h-0.5"
    style={{
      background:
        "linear-gradient(to right, transparent, #fb923c, #fb923c, transparent)",
    }}
  ></div>
 {/* Your content */}
  <div className="w-full flex flex-col items-center">
  <p className="text-white mt-2 text-sm sm:text-base md:text-lg text-center">
  Interested in collaborating or connecting with me?
 <FaLinkedin/>
</p>
<div>

</div>

  </div>
 
</div> 

    )
}
export default Footer2