import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, direction = 'up', className = '' }) {
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 36 : direction === 'down' ? -36 : 0,
      x: direction === 'left' ? 36 : direction === 'right' ? -36 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
