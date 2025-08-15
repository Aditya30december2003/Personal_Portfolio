import { motion, AnimatePresence } from 'framer-motion';
import { useEffect , useState } from 'react';
const PageLoadAnimation = ({ children }) => {

    const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 4300); // Reduced total animation duration to 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isAnimating && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          initial={{ opacity: 1, y: 0 }}
          animate={{
            y: '-100%', // Slide the entire page upward
            transition: {
              duration: 1.5,
              delay: 3.5, // Animation ends after 5 seconds total
              ease: 'easeInOut',
            },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5 },
          }}
        >
          {/* Centered Logo and Tagline */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 1,
                type: "spring",
                stiffness: 70,
              },
            }}
          >
            <div className="text-[2rem] lg:text-[2.5rem] text-center text-white ">Personal Portfolio</div>
            <div className='w-[10.2rem] bg-white h-[0.5rem] mt-3'></div>
          </motion.div>
        </motion.div>
      )}
      {!isAnimating && children}
    </AnimatePresence>
  );
};

export default PageLoadAnimation;