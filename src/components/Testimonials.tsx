
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundGlow } from "@/components/ui/background-glow";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jing Cheung",
      quote: "We've found that the feed and community on CMC are a very important traffic channel. Whenever we list a new coin we post about it so that Bitget content appears at the top of that coin's feed.",
      designation: "Head of Branding at Bitget",
      src: "/lovable-uploads/1025232f-9047-4a3d-b406-58bd38cf884a.png"
    },
    {
      name: "Nicholas Korsgård", 
      quote: "Movimentum commitment to delivering high-quality content is impressive. Their understanding of the Web3 space ensures our projects stay relevant and cutting-edge.",
      designation: "Marketing Director at Beam",
      src: "/lovable-uploads/523e09dc-66fa-404a-9eb8-55082cfd59f4.png"
    },
    {
      name: "Cameron Thacker",
      quote: "Honestly, I'm super happy with what you're doing - everything looks great and it's been smooth working with you. Even another group we work with asked to get connected because they were really impressed by your graphics and execution.",
      designation: "Vice President at Mythos",
      src: "/lovable-uploads/5d326a0d-1061-4ab0-90a5-5e9041a95156.png"
    },
    {
      name: "Leon Abboud",
      quote: "Btw I just went through your pitch video. You guys have a really really good product. I see no reason why brands shouldn't have this as part of their marketing stack.",
      designation: "Founder & CEO at Unfungible",
      src: "/lovable-uploads/ace42821-bfab-4bfe-8401-157fd8094640.png"
    }
  ];

  const clientLogos = [
    "/lovable-uploads/57c08b1a-10f3-4b0d-955f-e81f36c93f2d.png",
    "/lovable-uploads/3b9f61ab-a142-4e44-995f-14f6c0260438.png",
    "/lovable-uploads/7adc8362-daa3-41d0-9dd0-601f5fc93b7a.png",
    "/lovable-uploads/e944833a-d564-43ed-8169-93c156d26d2e.png",
    "/lovable-uploads/5926ee8f-9600-4ab6-8ee0-5a9a4f2f41b1.png"
  ];

  return (
    <section className="relative py-8 md:py-12 lg:py-20 bg-black overflow-hidden">
      <BackgroundGlow colorFrom="#6b3a1a" colorTo="#1a0e05" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 lg:mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 mb-3 md:mb-4 lg:mb-6 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-white/5 to-white/3 rounded-full border border-white/10">
            <Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-white/70 text-xs md:text-sm font-medium">Client Testimonials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 md:mb-4 lg:mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent leading-tight px-2">
            What Our Clients Say
          </h2>
          <p className="text-gray-400 text-sm md:text-base lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Discover why industry leaders trust us to elevate their Web3 presence and drive exceptional results
          </p>
        </div>
        
        {/* Project Showcase Component */}
        <div className="mb-8 md:mb-12 lg:mb-16 animate-fade-in" style={{ animationDelay: '400ms' }}>
          <ProjectShowcase
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#ffffff",
              position: "#9ca3af",
              testimony: "#e5e7eb"
            }}
            fontSizes={{
              name: "18px",
              position: "12px", 
              testimony: "14px"
            }}
            mobile={{
              fontSizes: {
                name: "16px",
                position: "11px",
                testimony: "13px"
              },
              spacing: {
                nameBottom: "4px",
                positionBottom: "8px",
                testimonyTop: "12px"
              }
            }}
            spacing={{
              nameBottom: "6px",
              positionBottom: "12px",
              testimonyTop: "20px"
            }}
            outerRounding="12px"
            innerRounding="8px"
            outlineColor="rgba(255, 255, 255, 0.1)"
            hoverOutlineColor="rgba(255, 255, 255, 0.2)"
            buttonInscriptions={{
              previousButton: "Previous",
              nextButton: "Next", 
              openWebAppButton: "View Case Study"
            }}
            desktopVersionBottomThreshold={768}
          />
        </div>
        
        {/* Bottom section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <div className="inline-flex flex-col md:flex-row items-center gap-3 px-4 md:px-6 lg:px-8 py-3 md:py-4 bg-gradient-to-r from-white/8 via-white/5 to-white/8 rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group max-w-full">
            <div className="flex -space-x-1 md:-space-x-2">
              {clientLogos.map((logo, index) => (
                <div key={index} className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full border-2 border-white/20 overflow-hidden bg-white/10 flex-shrink-0">
                  <img 
                    src={logo} 
                    alt={`Client ${index + 1}`}
                    className="w-full h-full object-contain filter brightness-90"
                  />
                </div>
              ))}
            </div>
            <span className="text-white/80 font-semibold text-xs md:text-sm lg:text-base text-center">Trusted by 50+ leading Web3 brands</span>
            <div className="flex gap-0.5 md:gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
