import { motion } from "framer-motion"
const ServiceCard = ({ icon, title, text }) => {
  return (
    <motion.div initial={{
      y: 300,
      opacity: 0,
      scale: 0.9,
    }}
      exit={{
        y: 300,
        opacity: 0,
        scale: 0.5,
      }}

      whileInView={{
        y: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1 }} className="group bg-indigo-700 rounded-lg pt-8  dark:bg-[#212121e9] hover:-translate-y-4 duration-300 cursor-pointer 
       py-2 justify-center  overflow-hidden    flex flex-col items-center text-center gap-8 px-8">
      <span className="z-10 border-2 rounded-full bg-white text-indigo-600 dark:text-orange-400  p-2   group-hover:scale-110 duration-300 ">
        {icon}
      </span>
      <h5 className="z-10 text-lg text-orange-100 font-bold f-dast">{title}</h5>
      <p className="z-10 h-16 text-base font-bold  text-white dark:text-orange-400 f-dast">
        {text}
      </p>

    </motion.div>
  );
};

export default ServiceCard;