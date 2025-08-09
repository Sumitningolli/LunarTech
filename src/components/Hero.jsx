import React from "react";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const textVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };
  const buttonVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      x: 10,
      transition: {
        duration: 0.2,
        duration: 0.8,
      },
    },
  };
  const imageVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 10,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
      <div className="md:w--1/2 space-y-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
        >
          ___Innovation Requires Courage
        </motion.p>
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className="text-3xl md:text-7xl font-bold"
        >
          Being Innovators Requires Courage
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={textVariant}
          className="md:text-lg"
        >
          Understanding your capacity for risk can guide business
          <br /> into untapped opportunities, helping you navigate growth.
        </motion.p>
        <div className="flex space-x-5 ">
          <button className="px-5 py-3 rounded-full font-semibold bg-black text-white  hover:bg-gray-900">
            Book
          </button>
          <button className="flex space-x-4 items-center">
            <span className="w-8 h-8 flex justify-center items-center bg-black p-2 text-white rounded-full">
              <Play className="w-7 h-5 fill-white" />
            </span>
            <span className="font-bold">Watch Video</span>
          </button>
        </div>
      </div>
      <div className=" p-4 inline-block rounded-lg ">
        <motion.img
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          variants={imageVariant}
          src="./hero.png"
          alt=""
          className="w-auto h-70 "
        />
      </div>
    </div>
  );
};

export default Hero;
