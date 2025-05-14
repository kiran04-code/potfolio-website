import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white font-poppins">
      <div className="container mx-auto flex  items-center justify-between py-4 px-6">
        {/* Logo */}
       <div className="flex items-center space-x-3">
  <img
    src="https://cdn.vectorstock.com/i/500p/35/54/letter-k-sign-design-template-element-orange-icon-vector-13393554.jpg"
    alt="Logo"
    className="h-7 w-auto"
  />
  <h1 className="text-white font-bold text-xl">Kiran.dev</h1>
</div>


        {/* Links */}
        <div className="space-x-8">
          <a
            href="#about"
            className="hover:text-orange-300 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-orange-300 transition-colors duration-200"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="hover:text-orange-300 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
