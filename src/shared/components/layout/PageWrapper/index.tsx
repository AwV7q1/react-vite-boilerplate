import React, { ReactNode, FC } from "react";
import { motion, AnimatePresence } from "motion/react";

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -50 },
};

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: FC<PageWrapperProps> = ({ children }: PageWrapperProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageWrapper;
