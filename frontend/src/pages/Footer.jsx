import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white flex flex-wrap justify-between items-center p-4 text-center w-full h-auto">
      <section className="w-full md:w-1/3 mb-4 md:mb-0">
        <h1 className="text-2xl font-bold">INTERVIEW PREP</h1>
        <p className="mt-4">Solutions to your Questions!</p>
      </section>

      <section className="w-full md:w-1/3 mb-4 md:mb-0">
        <h2 className="text-xl font-medium">Contact</h2>
        <p className="mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, esse.
        </p>
      </section>

      <section className="w-full md:w-1/3 flex flex-col">
        <h2 className="text-xl font-medium mb-4">Follow us</h2>
        <div className="flex flex-col items-center gap-2">
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            Facebook
          </a>
          <a href="#" className="hover:underline">
            Instagram
          </a>
          <a href="#" className="hover:underline">
            X
          </a>
        </div>
      </section>
    </div>
  );
};

export default Footer;
