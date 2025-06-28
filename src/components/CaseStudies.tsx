
import { BackgroundGlow } from "@/components/ui/background-glow";

const CaseStudies = () => {
  const cases = [
    {
      title: "TOKEN FOCUSED BRAND AWARENESS",
      subtitle: "By creating content from your project account.",
      image: "/lovable-uploads/ff3bc842-858d-44eb-ae2b-e1a86572fd00.png",
      buttonText: "CASE STUDY"
    },
    {
      title: "KOL CAMPAIGN AMPLIFICATION", 
      subtitle: "Driving thousands of clicks on a single campaign.",
      image: "/lovable-uploads/96d1c9e1-6903-4c07-8a88-eab11ea1312d.png",
      buttonText: "CASE STUDY"
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <BackgroundGlow colorFrom="#6b3a1a" colorTo="#1a0e05" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="space-y-32">
          {cases.map((case_study, index) => (
            <div key={index} className={`relative grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Blue/black glowing background behind each card */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-0">
                <div className="w-[500px] h-[300px] rounded-full bg-blue-500 opacity-40 blur-3xl" />
                <div className="w-[700px] h-[400px] rounded-full bg-black opacity-60 blur-2xl absolute" />
              </div>
              {/* Content */}
              <div className={`space-y-8 relative z-10 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    {case_study.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {case_study.subtitle}
                  </p>
                </div>
                {/* CTA Button */}
                <button 
                  className="group inline-flex items-center gap-3 text-white font-semibold text-lg hover:text-gray-300 transition-colors"
                  onClick={() => window.open('https://pitch.com/v/movimentum-deck-pfdmxq', '_blank')}
                >
                  {case_study.buttonText}
                  <svg 
                    className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
              {/* Image */}
              <div className={`relative z-10 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm">
                  <img 
                    src={case_study.image}
                    alt={`${case_study.title} case study visualization`}
                    className="w-full h-auto object-contain"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
                {/* Floating accent */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
