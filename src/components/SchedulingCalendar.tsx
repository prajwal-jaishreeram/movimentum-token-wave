import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { ChevronLeft, ChevronRight, Clock, Video } from "lucide-react";
import { format, addMonths, subMonths } from "date-fns";
import { HoverButton } from "@/components/ui/hover-button";

const SchedulingCalendar = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const timeSlots = [
    // Generate every 30 minutes from 8:00am to 10:00pm
    ...Array.from({ length: 29 }, (_, i) => {
      const hour = 8 + Math.floor(i / 2);
      const minute = i % 2 === 0 ? '00' : '30';
      const ampm = hour < 12 ? 'am' : 'pm';
      const displayHour = hour > 12 ? hour - 12 : hour;
      return `${displayHour}:${minute}${ampm}`;
    })
  ];

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      console.log(`Meeting scheduled for ${format(selectedDate, 'MMMM dd, yyyy')} at ${selectedTime}`);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto bg-gradient-to-br from-gray-900 to-black border border-white/20 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(255,255,255,0.15)] backdrop-blur-sm hover-glow animate-fade-in min-h-[320px]">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        {/* Left Panel - Meeting Details */}
        <div className="w-full lg:w-1/3 bg-gradient-to-b from-gray-800 to-gray-900 p-4 md:p-8 border-b lg:border-b-0 lg:border-r border-white/10 animate-slide-up">
          <div className="flex items-center mb-8">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-white to-gray-200 rounded-xl flex items-center justify-center text-black font-bold text-lg md:text-xl mr-4 shadow-lg hover-glow transition-all duration-300 animate-pulse-glow">
              MOV
            </div>
            <div>
              <h3 className="text-xs md:text-sm text-gray-400 uppercase tracking-wider">Movimentum</h3>
              <h2 className="text-lg md:text-xl font-semibold text-white leading-tight">30 min Meeting with Movimentum</h2>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center text-gray-300 bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 hover-glow transition-all duration-300 animate-fade-in-delay-1">
              <Clock size={18} className="mr-3 text-white flex-shrink-0" />
              <span className="text-sm font-medium">30 minutes duration</span>
            </div>
            <div className="flex items-center text-gray-300 bg-white/5 p-3 md:p-4 rounded-lg border border-white/10 hover-glow transition-all duration-300 animate-fade-in-delay-2">
              <Video size={18} className="mr-3 text-white flex-shrink-0" />
              <span className="text-sm font-medium">Web conferencing details provided upon confirmation</span>
            </div>
          </div>

          {selectedDate && selectedTime && (
            <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-white/10 to-white/5 rounded-xl border border-white/20 backdrop-blur-sm animate-scale-in hover-lift transition-all duration-300">
              <h4 className="font-semibold mb-4 text-white text-base md:text-lg">Selected Meeting:</h4>
              <div className="space-y-2">
                <p className="text-white font-medium text-sm md:text-base">
                  {format(selectedDate, 'EEEE, MMMM dd, yyyy')}
                </p>
                <p className="text-white font-medium text-lg">{selectedTime}</p>
                <p className="text-xs text-gray-400 mt-3">India Standard Time (4:47pm)</p>
              </div>
            </div>
          )}
        </div>

        {/* Right Panel - Calendar and Time Selection */}
        <div className="flex-1 p-4 md:p-8 bg-gradient-to-bl from-gray-900 to-black animate-slide-up-delay-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white">Select a Date & Time</h2>
          
          <div className="flex flex-col xl:flex-row gap-6 md:gap-10">
            {/* Calendar */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-6 bg-white/5 p-4 rounded-lg border border-white/10 hover-glow transition-all duration-300">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  className="text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0 hover:scale-110"
                >
                  <ChevronLeft size={20} />
                </Button>
                <h3 className="text-lg md:text-xl font-semibold text-white text-center px-4">
                  {format(currentMonth, 'MMMM yyyy')}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  className="text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex-shrink-0 hover:scale-110"
                >
                  <ChevronRight size={20} />
                </Button>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.1)] p-4 hover-glow transition-all duration-300">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateSelect}
                  month={currentMonth}
                  onMonthChange={setCurrentMonth}
                  className="rounded-xl pointer-events-auto w-full"
                  classNames={{
                    months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 w-full",
                    month: "space-y-4 w-full",
                    caption: "flex justify-center pt-1 relative items-center mb-4",
                    caption_label: "text-lg font-semibold text-white",
                    nav: "space-x-1 flex items-center",
                    nav_button: "h-8 w-8 bg-white/10 hover:bg-white/20 p-0 text-white transition-all duration-200 rounded-md border border-white/20 hover:scale-110",
                    nav_button_previous: "absolute left-1",
                    nav_button_next: "absolute right-1",
                    table: "w-full border-collapse",
                    head_row: "flex w-full",
                    head_cell: "text-gray-300 rounded-md flex-1 h-10 md:h-12 font-medium text-xs md:text-sm flex items-center justify-center",
                    row: "flex w-full mt-1",
                    cell: "flex-1 h-10 md:h-12 text-center text-sm p-0 relative text-white hover:bg-white/20 rounded-lg transition-all duration-200",
                    day: "h-10 md:h-12 w-full p-0 font-medium text-white hover:bg-white/20 rounded-lg transition-all duration-200 flex items-center justify-center text-xs md:text-sm hover:scale-105 shadow-[0_0_8px_2px_rgba(59,130,246,0.4)]",
                    day_selected: "bg-white text-black hover:bg-gray-200 rounded-lg border-2 border-white/50 font-bold shadow-lg !text-black transform scale-110",
                    day_today: "bg-white/30 text-white rounded-lg font-semibold border border-white/40",
                    day_outside: "text-gray-500 opacity-40",
                    day_disabled: "text-gray-600 opacity-30 shadow-none",
                  }}
                />
              </div>

              <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10 hover-glow transition-all duration-300">
                <p className="text-sm font-medium text-gray-300">
                  <strong className="text-white">Time zone:</strong>
                  <br />
                  🌍 India Standard Time (4:47pm)
                </p>
              </div>
            </div>

            {/* Time Slots */}
            <div className="w-full xl:w-64 flex-shrink-0 relative flex flex-col" style={{ minHeight: '640px' }}>
              <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10 hover-glow transition-all duration-300">
                <p className="text-base md:text-lg font-semibold text-white">
                  {selectedDate ? format(selectedDate, 'EEEE, MMMM dd') : 'Select a date'}
                </p>
              </div>
              {/* Scrollable time slots */}
              <div className="flex-1 space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-none">
                {timeSlots.map((time, index) => (
                  <Button
                    key={time}
                    variant={selectedTime === time ? "default" : "outline"}
                    className={`w-full justify-center text-sm font-medium transition-all duration-300 h-12 hover:scale-105 ${
                      selectedTime === time
                        ? "bg-white text-black hover:bg-gray-200 border-white shadow-lg transform scale-105 animate-pulse-glow"
                        : "bg-transparent border-white/30 text-white hover:bg-white/20 hover:border-white/50"
                    }`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                    onClick={() => handleTimeSelect(time)}
                    disabled={!selectedDate}
                  >
                    {time}
                  </Button>
                ))}
              </div>
              {/* Sticky Confirm Meeting button at the bottom */}
              {selectedDate && selectedTime && (
                <div className="absolute left-0 right-0 bottom-0 px-4 pb-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" style={{ zIndex: 10 }}>
                  <Button
                    className="w-full bg-gradient-to-r from-white to-gray-200 hover:from-gray-200 hover:to-white text-black border border-white/30 font-semibold h-12 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover-lift hover-shine animate-scale-in pointer-events-auto"
                    onClick={handleSchedule}
                  >
                    Confirm Meeting
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchedulingCalendar;
