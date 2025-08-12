import { useParams } from 'react-router';
import projectData from '../../pages/projects/data/ProjectData.json';
import { FaBeer, FaExternalLinkAlt, FaGithub, FaServer, FaUser } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);

  if (!project) {
    return <div className="text-red-400 text-center mt-16 text-2xl">🚫 Project not found</div>;
  }

  const { name, image, details } = project;

  return (
    <div className="min-h-screen px-4 sm:px-6 md:px-10 py-16 ">
      <div className="max-w-5xl mx-auto">
        {/* Project Image */}
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          src={image}
          alt={name}
          className="w-full rounded-2xl shadow-xl border border-gray-700 mb-10"
        />

        {/* Project Title */}
        <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
          {name}
        </h1>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {details.description}
        </motion.p>

        {/* Tech Stack */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 text-lime-300">Tech Stack</h2>
          <div className="flex flex-wrap gap-3">
            {details.techStack.map((tech) => (
              <span
                key={tech}
                className="bg-[#1c1f3b] text-sm px-4 py-2 rounded-full text-green-300 border border-green-400/30 shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-10 border-t border-gray-600 pt-8">
          <h2 className="text-2xl font-semibold mb-3 text-lime-300">Challenges</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            {details.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        {/* Improvements */}
        <div className="mb-10 border-t border-gray-600 pt-8">
          <h2 className="text-2xl font-semibold mb-3 text-lime-300">Potential improvements and future plans</h2>
          <ul className="space-y-2 list-disc list-inside text-gray-400">
            {details.improvements.map((improve) => (
              <li key={improve}>{improve}</li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href={details.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-br from-green-400 to-teal-500 px-5 py-3 rounded-full text-white font-semibold hover:opacity-90 transition"
          >
            <FaExternalLinkAlt /> Live Site
          </a>
          

           <a
            href={details.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 px-5 py-3 rounded-full text-white font-semibold hover:bg-gray-700 transition"
          >
            <FaGithub /> GitHub Client  <FaUser />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;