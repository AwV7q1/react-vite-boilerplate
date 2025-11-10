import React, { ReactNode, FC } from "react";
import { motion, AnimatePresence } from "motion/react";

const variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 }
};

type ScreenRenderProps = {
  children: ReactNode;
};

const ScreenTransition: FC<ScreenRenderProps> = ({
                                                   children
                                                 }: ScreenRenderProps) => {
  return (
    <AnimatePresence mode={"sync"}>
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

export default ScreenTransition;
