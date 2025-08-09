import { delay } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { SiGoogleassistant, SiOpenai } from "react-icons/si";

const Insights = () => {
  const insightsData = [
    {
      title: "Productivity Enhancer",
      data: "July 2023",
      icon: SiGoogleassistant,
      description: "Dynamic visibility tools built to drive engagement.",
    },
    {
      title: "AI Workflow Optimizer",
      data: "March 2024",
      icon: SiOpenai,
      description: "Smart automation tools for business operations.",
    },
  ];

  const cardVarient = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="w-4/5 m-auto py-20 flex flex-col md:flex-row  justify-between space-y-10 md:space-y-0">
      <div className="md:w-1/3 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-2xl font-bold"
        >
          Industry Insights
        </motion.h2>
        <motion.p
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, nulla
          alias eos sed consectetur ducimus aliquid. Sit delectus maiores
          inventore modi quibusdam, excepturi, repellat voluptatem, amet totam
          explicabo corporis odio.
        </motion.p>
        <div className="flex items-center space-x-2">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww"
            alt=""
            className="w-12 h-12 rounded-full border-1"
          />
          <div>
            <h1 className="text-lg font-bold">Michel Runner</h1>
            <p className="text-sm text-gray-400">CEO, Founder</p>
          </div>
        </div>
      </div>

      <div className="md:w-1/2 flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0">
        {insightsData.map((Insight, index) => (
          <motion.div
            className="w-full p-4 border-4 border-black/5 rounded-xl space-y-4"
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{amount:0.5}}
            variants={cardVarient}
          >
            <div className="flex justify-between ">
              <div className="space-y-2">
                <button className="p-3 rounded-full bg-violet-300 text-violet-950">
                  {Insight.icon()}
                </button>
                <h1 className="text-xl font-bold">{Insight.title}</h1>
              </div>
              <p>{Insight.data}</p>
            </div>
            <p className="text-lg leading-loose">{Insight.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
