import TimeAndDate from "@/components/TimeAndDate";

export default function Header() {
  return (
    <header className="w-full bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo or Title */}

        <TimeAndDate />

        {/* Time, Date, and Location */}
      </div>
    </header>
  );
}
