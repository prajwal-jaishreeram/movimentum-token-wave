import CalendarBackground from "@/components/ui/calendar-background";

export default function CalendarBackgroundExample() {
  return (
    <CalendarBackground className="flex w-full h-screen justify-center items-center">
      <div className="text-center space-y-4 lg:space-y-6 z-10">
        <div className="text-2xl lg:text-4xl text-white/80">
          Calendar Background
        </div>
        <p className="text-lg text-white/60 max-w-md">
          A calendar-themed geometric background with animated elements
        </p>
      </div>
    </CalendarBackground>
  );
} 