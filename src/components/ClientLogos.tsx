
import { BackgroundGlow } from "@/components/ui/background-glow";

const ClientLogos = () => {
  const clients = [
    { name: "Bitget", logo: "/lovable-uploads/57c08b1a-10f3-4b0d-955f-e81f36c93f2d.png" },
    { name: "Beam", logo: "/lovable-uploads/3b9f61ab-a142-4e44-995f-14f6c0260438.png" },
    { name: "MYTHOS", logo: "/lovable-uploads/7adc8362-daa3-41d0-9dd0-601f5fc93b7a.png" },
    { name: "AVALON", logo: "/lovable-uploads/e944833a-d564-43ed-8169-93c156d26d2e.png" },
    { name: "PIRATE NATION", logo: "/lovable-uploads/5926ee8f-9600-4ab6-8ee0-5a9a4f2f41b1.png" },
    { name: "Mountain Protocol", logo: "/lovable-uploads/9db03b34-65db-4aa8-b459-ba33f4f034ef.png" },
    { name: "MULTIVERSE", logo: "/lovable-uploads/2496d4b8-7820-45f3-b3e6-85dc11c63d84.png" },
    { name: "FARCANA", logo: "/lovable-uploads/93f3ff68-affb-4181-878d-cccd237b7e3f.png" },
    { name: "GOOMBLE IN NETWORK", logo: "/lovable-uploads/04b83abb-a05d-4cee-bbd1-bbfbcb4991f7.png" },
    { name: "New Brand", logo: "/lovable-uploads/6f0171f2-fdec-4786-890a-c9434b7982ac.png" }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <BackgroundGlow colorFrom="#6b3a1a" colorTo="#1a0e05" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Trusted by Leading Brands
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.slice(0, 8).map((client, index) => (
            <div 
              key={index} 
              className={`text-center p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 hover-lift hover-glow transition-all duration-300 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center h-16">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Last two brands centered */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-md">
            {clients.slice(8).map((client, index) => (
              <div 
                key={index + 8} 
                className={`text-center p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 hover-lift hover-glow transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${(index + 8) * 0.1}s` }}
              >
                <div className="flex items-center justify-center h-16">
                  <img 
                    src={client.logo} 
                    alt={`${client.name} logo`}
                    className="max-h-full max-w-full object-contain filter brightness-90 hover:brightness-100 transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
