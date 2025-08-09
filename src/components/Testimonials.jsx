import {motion} from "framer-motion";
import std1 from "/src/assets/std1_image.jpg";
import std2 from "/src/assets/std2_image.jpg";
import std3 from "/src/assets/std3_image.jpg";

const Testimonials = () => {
  const testVariant ={
    hidden :{opacity:0, y:50},
    visible:{
      opacity:1,
      y:0,
      tranistion:{
        delay:0.3,
        duration:0.6,
        ease:"easeInOut",
      },
    },
  };
  const testimonialData = [
    {
      name: "John Morgan",
      img: std1,
      position: "Founder",
      review:
        "A bright student with a positive and strong willingness to learn.",
    },
    {
      name: "Rohan Patel",
      img: std2,
      position: "Creative Lead",

      review:
        "A dedicated and hardworking student with a passion for learning.",
    },
    {
      name: "Sanya Kapoor",
      img: std3,
      position: "Operation Manager",

      review:
        "A creative thinker who consistently brings fresh ideas to the table.",
    },
  ];
  return (
    <div className="py-10 bg-white/50">
      <div className="w-4/5 m-auto space-y-8">
        <motion.div
        initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
        className="space-y-5">
        <h1 className="text-center text-lg">___Client Reviews</h1>
        <h2 className="text-sm md:text-xl md:font-semibold text-center">
          "Our clients' words speak volumes about our dedication and service.
          Here’s what they have to say about their experience with us."
        </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10">
          {testimonialData.map((testimonial, index) => (
            <motion.div 
            initial="hidden"
        whileInView="visible"
        viewport={{amount:0.5}}
        variants={testVariant} 
            key={index} className="p-5 space-y-5 border border-black rounded-lg flex flex-col items-center">
              <div className="flex items-center space-x-2">
                <img src={testimonial.img} alt="" className="w-16 h-16 rounded-full border-1"/>
                <div>
                  <h1 className="font-bold text-lg">{testimonial.name}</h1>
                  <p className="text-sm text-gray-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-center text-lg">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
