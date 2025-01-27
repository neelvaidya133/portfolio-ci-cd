import { icon } from "@fortawesome/fontawesome-svg-core";
import { faAws } from "@fortawesome/free-brands-svg-icons";
import {
  faBriefcase,
  faCode,
  faCodeMerge,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Journey() {
  const milestones = [
    {
      title: "Bachelor's in Computer Engineering",
      description:
        "Graduated from Gujarat Technological University, Ahmedabad, India.",
      date: "Aug 2018 - May 2022",
      location: "Ahmedabad, India",
      icon: faGraduationCap,
    },
    {
      title: "Web Development Certification",
      description:
        "Completed a web development course at Conestoga College, Kitchener, ON.",
      date: "May 2023 - Aug 2024",
      location: "Kitchener, ON",
      icon: faGraduationCap,
    },

    {
      title: "Devetree Technolabs : Software Developer Intern",
      description:
        "Started as a software developer, focusing on building user-friendly applications.",
      date: "Dec 2021 - April 2022",
      location: "Surat , India",
      icon: faBriefcase,
    },
    {
      title: "Devetree Technolabs : Software Developer",
      description:
        "Started as a software developer, focusing on building user-friendly applications.",
      date: "May 2022 - April 2023",
      location: "Surat , India",
      icon: faBriefcase,
    },
    {
      title: "Freelance : Software Developer (Remote)",
      description:
        "Started as a software developer, focusing on building user-friendly applications.",
      date: "May 2023 - Present",
      location: "Toronto, ON",
      icon: faBriefcase,
    },
  ];

  return (
    <section id="journey" className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          My Journey
        </h2>
        <div className="relative border-l border-gray-300 dark:border-gray-700">
          {milestones.map((milestone, index) => (
            <div key={index} className="mb-10 ml-6">
              <span className="absolute w-6 h-6 bg-blue-500 rounded-full -left-3 border border-white dark:border-gray-900"></span>

              <FontAwesomeIcon
                icon={milestone.icon}
                className="text-3xl text-blue-500 dark:text-blue-400"
              />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {milestone.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {milestone.description}
              </p>
              <div className="flex flex-row  mt-4 w-1/3 justify-between">
                <span className="text-xs text-gray-500 dark:text-gray-500 w-1/2">
                  {milestone.date}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-500 w-1/2">
                  {milestone.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
