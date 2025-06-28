import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white hover-glow transition-all duration-300 cursor-pointer">
            MOVIMENTUM
          </div>
          <Button 
            variant="outline" 
            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-all duration-300 hover-shine hover:scale-105 hover:shadow-lg"
            onClick={() => window.open('https://www.movimentum.io/#book-call', '_blank')}
          >
            Book Meeting
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
