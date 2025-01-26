import { useState, useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
export default function TimeAndDate() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
      setDate(
        now.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      );
    };

    const interval = setInterval(updateTimeAndDate, 1000);

    updateTimeAndDate();

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full justify-between space-x-4 text-gray-800 dark:text-gray-200">
      <div className="flex flex-row space-x-2">
        <p className="text-sm font-bold">{time}</p>
        <p className="text-sm font-bold">{date}</p>
      </div>
      <div className="flex flex-row space-x-2">
        <FaMapMarkerAlt size={16} />
        <p className="text-sm font-bold">Toronto, ON</p>
      </div>
    </div>
  );
}
