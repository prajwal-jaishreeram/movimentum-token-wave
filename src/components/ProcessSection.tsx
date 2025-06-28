import { Button } from "@/components/ui/button";
import { HoverButton } from "@/components/ui/hover-button";
import { BackgroundGlow } from "@/components/ui/background-glow";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Image animations
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [20, 0, -5]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95]);
  const translate = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50]);
  
  // Title animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  return (
    <section
      className="relative py-20 bg-black overflow-hidden"
      ref={sectionRef}
    >
      {/* Blue/black glowing background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[700px] h-[400px] rounded-full bg-blue-500 opacity-40 blur-3xl" />
        <div className="w-[900px] h-[500px] rounded-full bg-black opacity-60 blur-2xl absolute" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          style={{
            opacity: titleOpacity,
            y: titleY
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            How Token Marketing Works
          </h2>
        </motion.div>

        {/* Image section with 3D scroll effect */}
        <div className="mb-12">
          <div 
            className="w-full relative"
            style={{
              perspective: "1000px",
            }}
          >
            <motion.div 
              className="rounded-2xl overflow-hidden border border-blue-400/30 backdrop-blur-sm hover-lift transition-all duration-500 hover-glow"
              style={{
                rotateX: rotate,
                scale,
                translateY: translate,
                boxShadow:
                  "0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.2), 0 0 60px rgba(59, 130, 246, 0.1), 0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
              }}
            >
            <img 
              src="/lovable-uploads/c0eb0347-0a9d-4f03-ab5b-7d6de9caa65f.png" 
              alt="Movimentum token marketing presentation"
              className="w-full h-auto object-contain"
            />
            </motion.div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-3 font-semibold hover-lift hover-shine transition-all duration-300"
            onClick={() => window.open('https://www.movimentum.io/#book-call', '_blank')}
          >
            Book a Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
