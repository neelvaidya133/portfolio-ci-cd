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
      images: ["/images/tailor-1.png", "/images/tailors-data-2.png"],
      techStack: ["React.js", "Node.js", "PostgreSQL", "GraphQL"],
      githubUrl: "https://github.com/neelvaidya133/Tailor",
      liveUrl: "https://tailor-beta.vercel.app/",
    },
    {
      title: "Social Media App",
      details:
        "A modern social media platform where users can follow, share thoughts, use hashtags, and explore trending topics.",
      images: ["/images/social-media-1.png", "/images/social-media-2.png"],
      techStack: ["Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
      githubUrl: "https://github.com/your-repo/social-media-app",
      liveUrl: "https://social-media-app.vercel.app/",
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
      >
        <p className="text-gray-600 dark:text-gray-400">
          {modalContent.details}
        </p>
      </Modal>
    </section>
  );
}
