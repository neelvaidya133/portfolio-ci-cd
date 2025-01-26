import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function BottomNavbar() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md px-4">
      <nav className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className="flex justify-around py-3">
          {/* Home */}
          <a
            href="#hero"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaHome size={24} />
            <span className="text-xs">Home</span>
          </a>

          {/* About */}
          <a
            href="#about"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaUser size={24} />
            <span className="text-xs">About</span>
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaProjectDiagram size={24} />
            <span className="text-xs">Projects</span>
          </a>

          {/* Contact */}
          <a
            href="#contact"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400"
          >
            <FaEnvelope size={24} />
            <span className="text-xs">Contact</span>
          </a>

          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
