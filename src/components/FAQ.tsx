import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackgroundGlow } from "@/components/ui/background-glow";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "Who is this service for?",
      answer: "For pre and post-TGE companies looking to position their token in front of millions of crypto investors actively searching for new buying opportunities."
    },
    {
      question: "How do you do that?",
      answer: "Through organic content, KOL campaigns, and quests on the community feature of CoinMarketCap, which is the world's most visited crypto platform with over 40M unique monthly visitors."
    },
    {
      question: "How do you produce the content?",
      answer: "Movimentum aligns with your goals, creates and publishes the content, and you provide a quick review and approval. We manage the entire workflow from A to Z."
    },
    {
      question: "How do KOL campaigns work?",
      answer: "Movimentum selects the biggest KOLs that resonate with your token, ensuring they deliver results while following your company's brand guidelines."
    },
    {
      question: "Is this paid advertising on CoinMarketCap?",
      answer: "No, Movimentum leverages organic content rather than traditional ads. Our posts and KOL campaigns are positioned alongside top token charts, reaching crypto investors organically."
    },
    {
      question: "How big is the team?",
      answer: "Movimentum is a team of 20+ web3 experts on a mission to give maximum exposure to each of their partners."
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <BackgroundGlow colorFrom="#6b3a1a" colorTo="#1a0e05" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Collapsible open={openItems.includes(index)} onOpenChange={() => toggleItem(index)}>
                <CollapsibleTrigger className="w-full bg-white/5 border border-white/10 rounded-lg p-6 text-left hover:bg-white/10 hover-glow transition-all duration-300">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold text-white">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`text-white transition-all duration-300 ${openItems.includes(index) ? 'rotate-180 scale-110' : 'hover:scale-110'}`} 
                      size={24} 
                    />
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="px-6 pb-6 bg-white/5 border-x border-b border-white/10 rounded-b-lg transition-all duration-300">
                  <p className="text-gray-300 leading-relaxed pt-4 animate-fade-in">
                    {faq.answer}
                  </p>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
