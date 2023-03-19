import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
const SocialIcons = () => {
  return (
    <motion.div
      initial={{
        x: -500,
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1.5 }}
      className="flex flex-row items-center"
    >
      <SocialIcon
        className="text-sm"
        url="https://facebook.com"
        bgColor="transparent"
        fgColor="gray"
      />
      <SocialIcon
        className="text-sm"
        url="https://telegram.me"
        bgColor="transparent"
        fgColor="gray"
      />
      <SocialIcon
        className="text-sm"
        url="https://instagram.com"
        bgColor="transparent"
        fgColor="gray"
      />
      <SocialIcon
        className="text-sm"
        url="https://linkedin.com"
        bgColor="transparent"
        fgColor="gray"
      />
    </motion.div>
  );
};

export default SocialIcons;
