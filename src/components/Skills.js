export default function SkillsCertifications() {
  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "Go Lang",
    "Node.js",
    "React",
    "Next.js",
    "Tailwind CSS",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "AWS",
    "Azure",
    "GCP",
    "Terraform",
    "Docker",
    "Kubernetes",
    "Redis",
    "Devops",
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect Associate",
      date: "2024",
      image: "/images/aws.png", // AWS logo
      link: "https://www.credly.com/badges/b4120225-9a43-4b29-b955-67569a6aa50f/public_url", // Replace with your certification link
    },
    {
      title: "Terraform Certified Associate",
      date: "2025",
      image: "/images/terraform.png", // HashiCorp logo
      link: "https://www.credly.com/earner/earned/badge/bc1b715f-4401-4272-85d1-7024b3fcae69", // Replace with your certification link
    },
  ];

  return (
    <section
      id="skills-certifications"
      className="py-12 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Skills & Certifications
        </h2>

        {/* Skills Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow text-center text-gray-800 dark:text-gray-200 font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
            Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex items-center space-x-4"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View Certification
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
