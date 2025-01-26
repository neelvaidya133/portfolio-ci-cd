import TimeAndDate from "@/components/TimeAndDate";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen bg-gray-50 dark:bg-gray-900 relative"
    >
      {/* Time and Date in Top Left */}

      {/* Main Content */}
      <h1 className="text-5xl font-extrabold text-gray-800 dark:text-gray-200">
        Hi, I'm{" "}
        <span className="text-blue-500 dark:text-darkBlueHighlight">
          Neel Vaidya
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-xl text-center dark:text-gray-400">
        A passionate Software Developer empowering productivity and making
        people <strong>lazy</strong> 😴 through automation and seamless
        experiences.
      </p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        View My Work
      </a>
    </section>
  );
}
