import { delay } from "framer-motion";
import {motion} from "framer-motion";
import React from "react";
import { FaChartArea } from "react-icons/fa";

const Stats = () => {

    const imageVariant ={
      hidden :{opacity:0, x:-80},
      visible:{
        opacity:1,
        x:0,
        tranistion:{
          delay:0.2,
          duration:0.8,
          ease:"easeInOut",
        },
      },
    };


  return (
    <div className="py-20 bg-white/50">
      <div className="w-4/5 m-auto flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
        <div className="w-full md:w-1/3">
          <motion.img
            src="./stats.jpg"
            alt=""
            className="w-50 mx-auto md:w-60 rounded-tr-4xl rounded-bl-4xl"
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.5}}
            variants={imageVariant}
            transition={{ duration: 0.8, ease: "easeInOut" }} 

          />
        </div>
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold">Over 30,000</h1>
          <p className="md:text-4xl font-bold">
            Remote professionals provide essential services to business
            globally, delivering support from any location.
          </p>
          <div className="flex items-center">
            <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <span  className="p-3 rounded-full bg-violet-400 text-violet-950">
                <FaChartArea/>
              </span>
              <h1>Data Validation</h1>
            </div>
            <p>
              Ask your AI-powered assistant anything. Your virtual companion is
              here to help you stay ahead.
            </p>
            </div>
            <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <span className="p-3 rounded-full bg-violet-400 text-violet-950">
                <FaChartArea/>
              </span>
              <h1>Optimize Efficiency</h1>
            </div>
            <p>
              Your intelligent assistant is here to guide you—ask anything and
              stay ahead of the curve!
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
