import { motion } from "framer-motion";

// variants:
const stairAnimation = {
    initial: {
        top: "0%",
      },
      animate: {
        top: "100%",
      },
      exit: {
        top: ["100%", "0%"],
      },
};

// reversed index for staggered delay [calculation]

const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {[...Array(10)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.2,
            }}
            className="h-full w-full bg-red-500 relative"
          ></motion.div>
        );
      })}
    </>
  );
};

export default Stairs;