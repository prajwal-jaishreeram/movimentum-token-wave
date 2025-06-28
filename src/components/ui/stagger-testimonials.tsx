
"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "We've found that the feed and community on CMC are a very important traffic channel. Whenever we list a new coin we post about it so that Bitget content appears at the top of that coin's feed.",
    by: "Jing Cheung, Head of Branding at Bitget",
    imgSrc: "/lovable-uploads/1025232f-9047-4a3d-b406-58bd38cf884a.png"
  },
  {
    tempId: 1,
    testimonial: "Movimentum commitment to delivering high-quality content is impressive. Their understanding of the Web3 space ensures our projects stay relevant and cutting-edge.",
    by: "Nicholas Korsgård, Marketing Director at Beam",
    imgSrc: "/lovable-uploads/523e09dc-66fa-404a-9eb8-55082cfd59f4.png"
  },
  {
    tempId: 2,
    testimonial: "Honestly, I'm super happy with what you're doing - everything looks great and it's been smooth working with you. Even another group we work with asked to get connected because they were really impressed by your graphics and execution.",
    by: "Cameron Thacker, Vice President at Mythos",
    imgSrc: "/lovable-uploads/5d326a0d-1061-4ab0-90a5-5e9041a95156.png"
  },
  {
    tempId: 3,
    testimonial: "Btw I just went through your pitch video. You guys have a really really good product. I see no reason why brands shouldn't have this as part of their marketing stack.",
    by: "Leon Abboud, Founder & CEO at Unfungible",
    imgSrc: "/lovable-uploads/ace42821-bfab-4bfe-8401-157fd8094640.png"
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter 
          ? "z-10 bg-white text-black border-white shadow-2xl" 
          : "z-0 bg-gray-900 text-white border-gray-700 hover:border-white/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(255,255,255,0.2)" : "0px 0px 0px 0px transparent"
      }}
    >
      <span
        className={cn(
          "absolute block origin-top-right rotate-45",
          isCenter ? "bg-white" : "bg-gray-700"
        )}
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2
        }}
      />
      <img
        src={testimonial.imgSrc}
        alt={`${testimonial.by.split(',')[0]}`}
        className="mb-4 h-14 w-12 object-cover object-top rounded"
        style={{
          boxShadow: isCenter ? "3px 3px 0px black" : "3px 3px 0px rgba(0,0,0,0.5)"
        }}
      />
      <h3 className={cn(
        "text-sm sm:text-base font-medium leading-tight",
        isCenter ? "text-black" : "text-white"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-8 left-8 right-8 mt-2 text-xs italic",
        isCenter ? "text-gray-600" : "text-gray-300"
      )}>
        - {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ height: 600 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300",
            "bg-white/10 border-2 border-white/20 hover:bg-white hover:text-black backdrop-blur-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
            "hover:scale-110 hover:shadow-lg"
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-all duration-300",
            "bg-white/10 border-2 border-white/20 hover:bg-white hover:text-black backdrop-blur-sm",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2",
            "hover:scale-110 hover:shadow-lg"
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};
