import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const floatingVariants = {
    animate: (custom: number) => ({
      y: [0, -30, 0],
      x: [0, 15, 0],
      transition: {
        duration: 6 + custom,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ backgroundColor: '#1a1a1a', zIndex: -1 }}>
      {/* Animated gradient blur orbs */}
      <motion.div
        custom={0}
        animate="animate"
        variants={floatingVariants}
        className="absolute top-20 left-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{ backgroundColor: '#34d399' }}
      />
      <motion.div
        custom={1}
        animate="animate"
        variants={floatingVariants}
        className="absolute top-40 right-10 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        style={{ backgroundColor: '#4ade80' }}
      />
      <motion.div
        custom={2}
        animate="animate"
        variants={floatingVariants}
        className="absolute -bottom-8 left-1/2 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-15"
        style={{ backgroundColor: '#10b981' }}
      />
    </div>
  );
};

export default AnimatedBackground;
