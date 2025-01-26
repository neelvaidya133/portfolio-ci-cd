import BottomNavbar from "@/components/Navbar";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function TailorsDataProject() {
  return (
    <>
      <section className="container mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
          Tailor's Data
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Tailor's Data is a full-stack application designed to help users
          manage multiple shops efficiently. This project showcases advanced
          features like multi-shop management, order tracking, PDF invoice
          generation, and customer details management.
        </p>

        {/* Features Section */}
        <h2 className="mt-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Features
        </h2>
        <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
          <li>- User authentication with JWT for secure access.</li>
          <li>- Manage multiple shops from a single dashboard.</li>
          <li>- Track pending orders and generate PDF invoices.</li>
          <li>- Customer details and measurements management.</li>
          <li>- Update prices for clothing dynamically.</li>
        </ul>

        {/* Technologies Section */}
        <h2 className="mt-8 text-2xl font-semibold text-gray-800 dark:text-gray-200">
          Technologies Used
        </h2>
        <ul className="mt-4 space-y-3 text-gray-600 dark:text-gray-400">
          <li>- **Frontend**: React.js, Ant Design, Styled Components</li>
          <li>- **Backend**: Node.js, Express.js</li>
          <li>- **Database**: PostgreSQL</li>
          <li>- **GraphQL**: Apollo Client</li>
          <li>- **Hosting**: Vercel, AWS RDS</li>
        </ul>

        {/* Links Section */}
        <div className="mt-8 flex space-x-4">
          {/* GitHub Link */}
          <a
            href="https://github.com/neelvaidya133/Tailor"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaGithub className="mr-2" /> GitHub Repository
          </a>
          {/* Live Demo */}
          <a
            href="https://tailor-beta.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <FaExternalLinkAlt className="mr-2" /> Live Demo
          </a>
        </div>
      </section>
      <BottomNavbar />
    </>
  );
}
