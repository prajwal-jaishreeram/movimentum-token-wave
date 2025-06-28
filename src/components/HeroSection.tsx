import { Button } from "@/components/ui/button";
import Orb from "./Orb";
import Aurora from './Aurora';
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { HoverButton } from "@/components/ui/hover-button";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5 + i * 0.2,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      {/* Aurora background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>
      
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left side - Text content with geometric style */}
          <div className="flex-1 animate-slide-up lg:pr-8 flex flex-col items-start justify-center">
            <motion.div
              custom={0}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8 md:mb-12"
            >
              <Circle className="h-2 w-2 fill-rose-500/80" />
              <span className="text-sm text-white/60 tracking-wide">
                Token Marketing
              </span>
            </motion.div>
            <motion.div
              custom={1}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <h1 className="text-left max-w-[520px] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 block">
                  CONVERT HIGH-INTENT
                </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 block">
                  CRYPTO INVESTORS
                </span>
              </h1>
            </motion.div>
            <motion.div
              custom={2}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-xl md:text-2xl text-white/60 mb-12 leading-relaxed font-light tracking-wide max-w-2xl">
                Token marketing on CoinMarketCap, the most visited crypto finance platform in the world.
              </p>
            </motion.div>
            <div className="flex flex-col sm:flex-row gap-6 items-start animate-slide-up-delay-2">
              <HoverButton
                onClick={() => window.open('https://pitch.com/v/movimentum-deck-pfdmxq', '_blank')}
              >
                VIEW CASE STUDIES
              </HoverButton>
              <HoverButton
                className="bg-transparent border border-white text-white hover:bg-white hover:text-black"
                onClick={() => window.open('https://www.movimentum.io/#book-call', '_blank')}
              >
                BOOK A CALL →
              </HoverButton>
            </div>
          </div>
          
          {/* Right side - Hero image with Orb surrounding it */}
          <div className="flex-1 flex justify-center animate-fade-in-delay-3 relative">
            {/* Orb surrounding the image */}
            <div className="absolute inset-0 w-full h-full" style={{ width: '700px', height: '700px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <Orb
                hoverIntensity={0.5}
                rotateOnHover={true}
                hue={0}
                forceHoverState={false}
              />
            </div>
            
            {/* Image positioned over the Orb */}
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src="/lovable-uploads/heroimg.png" 
                alt="Hero visual"
                className="w-full max-w-2xl lg:max-w-3xl h-auto object-contain filter drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
