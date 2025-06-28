"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function CalendarShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  isCalendar = false,
}: {
  className?: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  isCalendar?: boolean;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -150,
        rotate: rotate - 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
        rotate: rotate,
      }}
      transition={{
        duration: 2.4,
        delay,
        ease: [0.23, 0.86, 0.39, 0.96],
        opacity: { duration: 1.2 },
      }}
      className={cn("absolute", className)}
    >
      <motion.div
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        style={{
          width,
          height,
        }}
        className="relative"
      >
        <div
          className={cn(
            isCalendar 
              ? "absolute inset-0 rounded-lg" 
              : "absolute inset-0 rounded-full",
            "bg-gradient-to-r to-transparent",
            gradient,
            "backdrop-blur-[2px] border-2 border-white/[0.15]",
            "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
            isCalendar
              ? "after:absolute after:inset-0 after:rounded-lg"
              : "after:absolute after:inset-0 after:rounded-full",
            "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]",
          )}
        />
        {isCalendar && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="grid grid-cols-7 gap-1 p-2">
              {Array.from({ length: 7 }, (_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 bg-white/20 rounded-sm"
                />
              ))}
              {Array.from({ length: 21 }, (_, i) => (
                <div
                  key={i + 7}
                  className="w-2 h-2 bg-white/10 rounded-sm"
                />
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function CalendarBackground({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-[#030303]", className)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-purple-500/[0.05] blur-3xl" />

      <div className="absolute inset-0 overflow-hidden">
        {/* Calendar-themed shapes */}
        <CalendarShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-blue-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
          isCalendar={true}
        />

        <CalendarShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
          isCalendar={true}
        />

        <CalendarShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-cyan-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
          isCalendar={true}
        />

        <CalendarShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-indigo-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
          isCalendar={true}
        />

        <CalendarShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-violet-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
          isCalendar={true}
        />

        {/* Additional geometric elements for variety */}
        <CalendarShape
          delay={0.8}
          width={180}
          height={50}
          rotate={35}
          gradient="from-rose-500/[0.15]"
          className="right-[30%] md:right-[35%] bottom-[20%] md:bottom-[25%]"
          isCalendar={false}
        />

        <CalendarShape
          delay={0.9}
          width={120}
          height={35}
          rotate={-40}
          gradient="from-amber-500/[0.15]"
          className="left-[40%] md:left-[45%] top-[60%] md:top-[65%]"
          isCalendar={false}
        />
      </div>

      {children}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
} 