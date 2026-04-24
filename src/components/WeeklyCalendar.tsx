import { motion } from 'framer-motion';

interface WeeklyCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
}

const WeeklyCalendar = ({ selectedDate, onDateSelect }: WeeklyCalendarProps) => {
  const days = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
  const today = new Date();
  
  // Get start of current week (Monday)
  const startOfWeek = new Date(today);
  const dayNum = today.getDay() || 7; // 1-7 (Mon-Sun)
  startOfWeek.setDate(today.getDate() - dayNum + 1);

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(startOfWeek);
    date.setDate(startOfWeek.getDate() + i);
    return date;
  });

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-3xl shadow-sm border border-gray-100 mb-8">
      {weekDays.map((date, i) => {
        const isSelected = date.toDateString() === selectedDate.toDateString();
        const isToday = date.toDateString() === today.toDateString();

        return (
          <motion.button
            key={i}
            whileTap={{ scale: 0.9 }}
            onClick={() => onDateSelect(date)}
            className={`flex flex-col items-center gap-2 px-3 py-4 rounded-2xl transition-all ${
              isSelected 
                ? 'bg-black text-white shadow-lg' 
                : 'bg-transparent text-gray-400 hover:bg-gray-50'
            }`}
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">{days[i]}</span>
            <span className={`text-lg font-black ${isToday && !isSelected ? 'text-blue-500' : ''}`}>
              {date.getDate()}
            </span>
            {isToday && !isSelected && (
              <div className="w-1 h-1 bg-blue-500 rounded-full" />
            )}
          </motion.button>
        );
      })}
    </div>
  );
};

export default WeeklyCalendar;
