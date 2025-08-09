import React from 'react'
import {motion} from "framer-motion";

const Pricing = () => {
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
    <div className='py-5 w-4/5 m-auto flex flex-col md:flex-row justify-between items-center space-y-1 md:space-y-0'>
      <div className='md:w-1/2 space-y-8 '>
        <h1 className='text-4xl md:text-6xl font-bold'>Maximize Your Efficiency with EPIC Inc.</h1>
        <h3 className='text-3xl md:text-5xl font-bold'>$29,99,99</h3>
        <p className='md:text-2xl leading-8'>
          We Offer tailored virtual services for your business, supporting your
          team remotely so they can thrive.
        </p>
      </div>
      <div className='w-full md:w-1/3 '>
        <motion.img src="./building.avif"
        alt=""
        initial="hidden"
        whileInView="visible"
        viewport={{amount:0.5}}
        variants={imageVariant} 
        transition={{ duration: 0.8, ease: "easeInOut" }} 
        className='w-full rounded-tr-4xl rounded-bl-4xl '/>
      </div>
    </div>
  )
}

export default Pricing;