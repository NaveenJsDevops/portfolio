import styles from "../style";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import rippleAnimation from "../assets/ripple-loading.json"; // Save the Lottie JSON file locally or import from a direct link if supported.

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex ${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 0.75 }}
      exit={{ opacity: 0, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <Lottie
        animationData={rippleAnimation}
        loop
        className="w-[150px] h-[150px]"
      />
    </motion.div>
  );
};

export default Loading;
