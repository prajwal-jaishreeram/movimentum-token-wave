
import SchedulingCalendar from "./SchedulingCalendar";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Book a 30-minute meeting to discuss your token marketing strategy
          </p>
          <SchedulingCalendar />
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <div className="mb-4 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">MOVIMENTUM</div>
              <div>© 2025 Movimentum LLC</div>
            </div>
            
            <div className="flex space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
