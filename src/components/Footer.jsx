import React from "react";
import {motion} from "framer-motion";

const Footer = () => {
   const footerVariant = {
    hidden :{opacity:0, y:50},
    visible:{
      opacity:1,
      y:0,
      transition :{duration :0.7, ease:"easeInOut"},
    },
   }; 

  return (
    <motion.footer 
    initial="hidden"
    whileInView="visible"
    variant={footerVariant}
    viewport={{amount:0.5}}
    className="py-20">
      <div className="w-4/5 m-auto grid md:grid-cols-4 gap-6 px-4">
        <div>
          <h2 className="text-xl font-bold mb-2">About Us </h2>
          <p className="text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
            voluptatum dolores ad nihil, sequi laboriosam.
           
          </p>
        </div>
        <div>
          <h2 className="font-bold mb-2">Customer services</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-black">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-black">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-black">
                Refunds
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold mb-2">Follow Us</h2>
          <ul>
            <li>
              <a href="#" className="text-gray-400 hover:text-black">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-black">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-black">
                instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-2">News Letter</h3>
          <p>Enter your email to get the latest new and updates.</p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="your email address"
              className="p-2 w-full rounded-md text-gray-600 border"
            />
            <button className="mt-2 w-full p-2 bg-stone-800 rounded-md font-semibold text-white">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8 text-sm">
        <p>&copy;{new Date().getFullYear()} Lunar, All rights reserved</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
