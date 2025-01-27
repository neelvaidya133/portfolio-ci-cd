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
      techStack: ["React.js", "Node.js", "PostgreSQL", "GraphQL"],
      githubUrl: "https://github.com/neelvaidya133/Tailor",
      liveUrl: "https://tailor-beta.vercel.app/",
      features: [
        "User authentication",
        "Order status",
        "PDF invoice generation",
        "Multiple Shop Management",
        "Customer Management",
        "Product Price Management",
      ],
    },
    {
      title: "Social Media App",
      details:
        "A modern social media platform where users can follow, share thoughts, use hashtags, and explore trending topics.",
      images: ["/images/social-media-1.png", "/images/social-media-2.png"],
      techStack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      githubUrl: "https://github.com/your-repo/social-media-app",
      liveUrl: "https://nerves.neelvaidya.com/",
    },
    {
      title: "Devops Alerting System",
      details:
        "A real-time alerting system that notifies developers about server issues and performance metrics.",
      images: [
        "/images/projects/devopsMon/dev-1.png",
        "/images/projects/devopsMon/dev-2.png",
      ],
      techStack: ["Node.js, Kubernetes", "Prometheus", "Grafana", "docker"],
      githubUrl:
        "https://github.com/neelvaidya133/devops-monitoring-and-alerting-system",
      liveUrl: "",
    },
    {
      title: "Instagram Scrapper Bot",
      details:
        "A bot that scrapes Instagram profiles and downloads images, videos, reels, highlights, stories and send to telegram bot.",
      images: ["/images/instagram-1.png", "/images/instagram-2.png"],
      techStack: [
        "Python",
        "Instaloader API",
        "Telegram Bot API, GitHub Actions",
      ],
      githubUrl: "https://github.com/neelvaidya133/instaScrapper",
    },
    {
      title: "Devetree ",
      details:
        "A Company portfolio website for Devetree Technologies. It's a website for a company that provides services like web development, mobile app development, and digital marketing.",
      images: [
        "/images/projects/devetree/devetree-1.png",
        "/images/projects/devetree/devetree-2.png",
      ],
      techStack: ["React.js", "TailwindCSS"],
      githubUrl: "https://github.com/neelvaidya133/devtree2",
      liveUrl: "https://devetree.com/",
    },
    {
      title: "Crypto portfolio tracker",
      details:
        "A simple web app to track your crypto portfolio. You can add your transactions and track your profit/loss.",
      images: [
        "/images/projects/crypto-1.png",
        "/images/projects/crypto-2.png",
      ],
      techStack: [
        "GO lang",
        "Next.js",
        "TailwindCSS",
        "AWS",
        "PostgreSQL",
        "OAuth",
      ],
      githubUrl: "https://github.com/neelvaidya133/crypto-tracker",
      liveUrl: "https://crypto.neelvaidya.com",
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
