import { useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "react-slick";
import Image from "next/image";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  images,
  techStack,
  features,
  githubUrl,
  liveUrl,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable background scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose} // Close modal when clicking on the overlay
    >
      {/* Modal Content */}
      <div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg w-full max-w-4xl p-6 relative"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full p-2"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="#007ACC"
            className="w-6 h-6 hover:opacity-80"
          >
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </svg>
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
          {title}
        </h2>

        {/* Image Carousel */}
        {images && images.length > 0 && (
          <Slider {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="relative w-full max-w-4xl mx-auto h-[300px] flex justify-center items-center"
              >
                <div className="w-full h-full relative rounded-lg overflow-hidden">
                  <Image
                    src={image}
                    alt={`Slide ${index + 1}`}
                    layout="fill" // Ensures the image fills the parent container
                    objectFit="contain" // Ensures the full image is visible without cropping
                    priority={index === 0} // Preload the first image
                  />
                </div>
              </div>
            ))}
          </Slider>
        )}

        {/* Project Details */}
        <div>{children}</div>
        <div className=" mt-6 flex flex-row w-full ">
          {/* Tech Stack */}
          {techStack && (
            <div className=" w-1/5">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                Tech Stack
              </h3>
              <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                {techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="w-4/5 flex flex-col flex-wrap">
            {features && (
              <div className=" w-2/5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  Features
                </h3>
                <ul className="mt-2 list-disc list-inside text-gray-600 dark:text-gray-400">
                  {features.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline hover:text-white"
            >
              <FaGithub className="mr-2" /> GitHub Repository
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:underline hover:text-white"
            >
              <FaExternalLinkAlt className="mr-2" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
