import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/20 via-black/30 to-black/20 backdrop-blur-xl border-b border-white/5 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-5">
        <div className="flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-lg md:text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent hover:from-blue-300 hover:via-white hover:to-blue-300 transition-all duration-500 cursor-pointer tracking-wide"
          >
            MOVIMENTUM
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              className="bg-white/5 backdrop-blur-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-4 md:px-6 py-2 md:py-2.5 text-sm md:text-base font-semibold tracking-wide rounded-lg hover:scale-105 shadow-lg hover:shadow-xl"
              onClick={() => window.open('https://www.movimentum.io/#book-call', '_blank')}
            >
              Book Meeting
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
