import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function FixedIcons() {
  return (
    <div className="hidden md:block fixed bottom-4 right-4 space-y-4">
      {/* GitHub Icon */}
      <a
        href="https://github.com/neelvaidya133"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        title="GitHub"
      >
        <FaGithub size={24} className="hover:animate-rotate-icon" />
      </a>

      {/* LinkedIn Icon */}
      <a
        href="https://linkedin.com/in/neelvaidya133"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-500 transition duration-300"
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
}
