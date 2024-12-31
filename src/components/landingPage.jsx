import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const Homepage = () => {
     // Set up animation variants for continuous scrolling
  const scrollVariants = {
    scroll: {
      y: ["0%", "-200%"], // Scroll left by 100% of the container width
      transition: {
        y: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 15, // Time taken for one cycle
          ease: "linear",
        },
      },
    },
    scroll2: {
        y: ["0%", "-200%"], // Scroll left by 100% of the container width
        transition: {
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 10, // Time taken for one cycle
            ease: "linear",
          },
        },
      }
    
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8 relative z-10 bg-black">
        <h1 className="text-5xl font-bold font-bebas-neue-regular lg:mx-10 my-5">CUBIX MEDIA</h1>
        <ul className="hidden md:flex space-x-7 font-inter-regular text-lg">
          <li className="hover:underline cursor-pointer">Home</li>
          <li className="hover:underline cursor-pointer">Services</li>
          <li className="hover:underline cursor-pointer">Portfolio</li>
          <li className="hover:underline cursor-pointer">Pricing</li>
          <li className="hover:underline cursor-pointer">Contact us</li>
        </ul>
    
        <div className="hidden md:flex space-x-4 font-inter-regular lg:mx-8">
          <button className="bg-transparent px-6 bg-[#141514] py-4 rounded-full  hover:bg-gray-700">More</button>
          <button className="bg-green-500 px-2 py-4 rounded-full text-black hover:bg-green-600">Send a message</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex font-bowlby-one-sc-regular flex-col lg:flex-row items-center justify-between w-full px-8 lg:px-20 py-10">
        {/* Text Content */}
        <div className="max-w-lg -mx-4 ">
          <h1 className="text-4xl  lg:text-6xl lg:text-nowrap font-bold leading-tight">
            CREATORS <br></br>AND BRANDS  <br />SEARCH <br />ENDS HERE
          </h1>
          <p className=" font-inter-regular text-xl  text-[#75716E] mt-4">
            Whether you're a creator looking for your next VIDEO edit, or a brand
            hiring an agency for your social media, you'll find them here.
          </p>
          <button className="font-inter-regular  mt-6 bg-green-500 px-20 py-5 rounded-full text-black  hover:bg-green-600">
            Get Started
          </button>
        </div>

        
        {/* Auto-Scrolling Image Section */}
        <div
          className="hidden lg:flex justify-evenly  h-[765px] w-5/12   mt-8 lg:mt-0 space-x-4 absolute top-0 left-0 lg:  z-0 ml-[54vw]"
        
        >


            
          <motion.div 
        
        variants={scrollVariants}
        animate="scroll" className="space-y-6 ">
            <div className="rounded-3xl overflow-hidden w-60   ">
              <img
                src=".\src\assets\Document from Ayush.jpg" // Replace with your image paths
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-3xl overflow-hidden w-60 h-40 ">
              <img
                src=".\src\assets\Document from Ayush.jpg"
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-3xl overflow-hidden w-60 h-96 ">
              <img
                src=".\src\assets\YT thumbnail 8.jpg"
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-full overflow-hidden w-60 h-96 ">
              <img
                src=".\src\assets\YT thumbnail 1(1).jpg"
                alt="Image 3"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-full overflow-hidden w-60 h-96 bg-yellow-500">
              <img
                src=".\src\assets\YT thumbnail 4(1).jpg"
                alt="Image 4"
                className="w-full h-full object-cover "
              />
            </div>
          </motion.div>
          <motion.div 
        
        variants={scrollVariants}
        animate="scroll2" className="bg-flex flex-col space-y-6 ">
            <div className="rounded-3xl overflow-hidden w-60  bg-red-500">
              <img
                src="./src/assets/YT thumbnail 1(1).jpg" // Replace with your image paths
                alt="Image 1"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-3xl overflow-hidden w-60 h-60 ">
              <img
                src=".\src\assets\83f2fa75c0be746b5bedb97e5a4bd5eb-removebg-preview.png"
                alt="Image 3"
                className="w-full h-full object-cover "
              />
              <div className="rounded-3xl overflow-hidden w-60   ">
              <img
                src=".\src\assets\Document from Ayush.jpg" // Replace with your image paths
                alt="Image 1"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-3xl overflow-hidden w-60 h-40 ">
              <img
                src=".\src\assets\Document from Ayush.jpg"
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
            </div>
            
            <div className="rounded-3xl overflow-hidden w-60 h-96 ">
              <img
                src=".\src\assets\c249d88ccb5d1055652caa3510bd883c.jpg"
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
            
            <div className="rounded-full overflow-hidden  w-60 h-96 bg-yellow-500">
              <img
                src="/path-to-image4.jpg"
                alt="Image 4"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-3xl overflow-hidden w-60   ">
              <img
                src=".\src\assets\Document from Ayush.jpg" // Replace with your image paths
                alt="Image 1"
                className="w-full h-full object-cover "
              />
            </div>
            <div className="rounded-3xl overflow-hidden w-60 h-40 ">
              <img
                src=".\src\assets\Document from Ayush.jpg"
                alt="Image 2"
                className="w-full h-full object-cover "
              />
            </div>
          </motion.div>
          </div>
      </section>
    </div>
  );
};

export default Homepage;

// TailwindCSS classes used:
// - Responsive visibility: `hidden lg:block` ensures the scrolling image is visible only on large screens.
// - Smooth scrolling: `overflow-hidden` hides the scroll bar.
// - Auto-scroll logic: Implemented using `useEffect` and `setInterval` for continuous scrolling.
// - Two-column layout: `flex space-x-4` arranges the columns side by side.
// - Background colors and pattern adjustments added to image divs for testing purposes.
