import { useState } from "react";
import Modal from "@/components/Modal";

export default function Projects() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", details: "" });

  const openModal = (project) => {
    setModalContent(project);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const projects = [
    {
      title: "The Ford Guys",
      details:
        "A modern automotive service website for a professional Ford specialist garage. The website serves as a central hub for customer engagement and service management.",
      images: [
        "/images/projects/fordguys/home.png",
        "/images/projects/fordguys/about.png",
        "/images/projects/fordguys/map.png",
      ],
      techStack: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Framer Motion",
      ],

      liveUrl: "https://thefordguys.ca",
      features: [
        "Custom appointment scheduling system with calendar integration",
        "Responsive design with modern UI/UX principles",
        "SEO-optimized content structure with 95+ PageSpeed score",
        "Real-time service availability checking",
        "Integrated contact form with email notifications",
        "Dynamic service catalog with detailed descriptions",
        "Google Analytics integration for conversion tracking",
        "Optimized image loading with lazy loading",
        "Mobile-first approach with cross-browser compatibility",
      ],
    },
    {
      title: "Social Media App",
      details:
        "A modern social media platform where users can follow, share thoughts, use hashtags, and explore trending topics.",
      images: [
        "/images/projects/nerves/nerves-1.png",
        "/images/projects/nerves/nerves-2.png",
        "/images/projects/nerves/nerves-3.png",
      ],
      techStack: [
        "Next.js",
        "Prisma",
        "PostgreSQL",
        "TailwindCSS",
        "TypeScript",
        "React.js",
        "GraphQL",
      ],
      githubUrl: "https://github.com/neelvaidya133/Nerves",
      liveUrl: "https://nerves.neelvaidya.com/",
      features: [
        "Post text",
        "Follow users",
        "Hashtags",
        "Infinite scroll",
        "Content caching",
      ],
    },
    {
      title: "Tailor's Data",
      details:
        "A full-stack application designed to help users manage multiple shops efficiently. Features include user authentication, order tracking, and PDF invoice generation.",
      images: [
        "/images/projects/tailor/tailor-1.png",
        "/images/projects/tailor/tailor-2.png",
        "/images/projects/tailor/tailor-3.png",
        "/images/projects/tailor/tailor-4.png",
        "/images/projects/tailor/tailor-5.png",
        "/images/projects/tailor/tailor-6.png",
      ],
      techStack: [
        "React.js",
        "Node.js",
        "PostgreSQL",
        "GraphQL",
        "AWS RDS",
        "Docker",
      ],
      githubUrl: "https://github.com/neelvaidya133/Tailor",
      liveUrl: "https://tailor-beta.vercel.app/",
      features: [
        "User authentication",
        "PDF invoice generation",
        "Multiple Shop Management",
        "Customer Management",
      ],
    },
    {
      title: "Devetree ",
      details:
        "A Company portfolio website for Devetree Technologies. It's a website for a company that provides services like web development, mobile app development, and digital marketing.",
      images: [
        "/images/projects/devetree/dev-1.png",
        "/images/projects/devetree/dev-2.png",
        "/images/projects/devetree/dev3.png",
      ],
      techStack: ["React.js", "JavaScript", "Styled-components", "Firebase"],
      githubUrl: "https://github.com/neelvaidya133/Devetree2",
      liveUrl: "https://devetree.com/",
      features: [
        "Responsive and optimized design",
        "SEO-friendly architecture",
        "Fast loading speeds",
        "Secure resume storage in Firebase",
      ],
    },
    {
      title: "Devops Alerting System",
      details:
        "A real-time alerting system that notifies developers about server issues and performance metrics.",
      images: [
        "/images/projects/devopsMon/dev-1.png",
        "/images/projects/devopsMon/dev-1.png",
      ],
      techStack: ["Node.js", "Kubernetes", "Prometheus", "Grafana", "Docker"],
      githubUrl:
        "https://github.com/neelvaidya133/devops-monitoring-and-alerting-system",
      liveUrl: "",
      features: [
        "Real-time alerts",
        "Server issue detection",
        "Performance monitoring",
        "Developer notifications",
        "Customizable alert rules",
      ],
    },
    {
      title: "Instagram Scrapper Bot",
      details:
        "A bot that scrapes Instagram profiles and downloads images, videos, reels, highlights, stories and send to telegram bot.",
      images: [
        "/images/projects/instaScrap/insta-1.jpg",
        "/images/projects/instaScrap/insta-2.jpg",
      ],
      techStack: [
        "Python",
        "Instaloader API",
        "Telegram Bot API",
        "GitHub Actions",
      ],
      githubUrl: "https://github.com/neelvaidya133/instaScrapper",
      features: [
        "Scrape user profiles",
        "Send data to Telegram bot directly",
        "Supports 2FA login",
        "Scrape reels and stories",
        "Scrape highlights, posts and tagged posts",
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="container py-12 bg-gray-50 dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
        My Projects
      </h2>
      <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card shadow-hover p-6 bg-white rounded-lg flex flex-col"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 flex-grow dark:text-gray-400 ">
              {project.details}
            </p>
            <button
              onClick={() => openModal(project)}
              className="mt-4 inline-block text-blue-500 hover:underline"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalContent.title}
        images={modalContent.images}
        techStack={modalContent.techStack}
        githubUrl={modalContent.githubUrl}
        liveUrl={modalContent.liveUrl}
        features={modalContent.features}
      >
        <p className="text-gray-600 dark:text-gray-400">
          {modalContent.details}
        </p>
      </Modal>
    </section>
  );
}
