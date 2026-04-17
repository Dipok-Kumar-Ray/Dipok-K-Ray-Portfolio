import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import projectData from "./data/ProjectData.json";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // id যদি number হয় তাহলে string এ compare করি
  const project = projectData.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center bg-[#0F172A] text-white">
        <h2 className="text-2xl font-semibold mb-2">Project not found</h2>
        <p className="text-gray-500 mb-6">
          The project you're looking for doesn't exist.
        </p>
        <Link
          to="/projects"
          className="px-5 py-2 rounded-full bg-gray-800 text-white hover:opacity-90 transition-all duration-300 hover:bg-green-600"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 bg-[#0F172A]">
      <motion.button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:opacity-90 transition-all duration-300 hover:bg-green-600"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        ← Go Back
      </motion.button>

      <motion.div 
        className="bg-[#1f2430] rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <motion.h1 
            className="text-3xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {project.name}
          </motion.h1>
          
          <motion.p 
            className="text-sm text-gray-400 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {project.type}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {project.description ? (
              <p className="text-gray-300 leading-relaxed mb-6">
                {project.description}
              </p>
            ) : (
              <p className="text-gray-300 leading-relaxed mb-6">
                Detailed description of this project will be added soon.
              </p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {project.tech && Array.isArray(project.tech) && project.tech.length > 0 ? (
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-100 hover:bg-green-600 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-2">Tech Stack</h3>
                <p className="text-gray-400">Technologies used in this project will be listed here.</p>
              </div>
            )}
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-green-600 text-white hover:opacity-90 transition-all duration-300 hover:bg-green-700 transform hover:scale-105"
              >
                Live Site
              </a>
            )}
            {project.client && (
              <a
                href={project.client}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-gray-600 text-white hover:opacity-90 transition-all duration-300 hover:bg-gray-700 transform hover:scale-105"
              >
                Client Repo
              </a>
            )}
            {project.server && (
              <a
                href={project.server}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-gray-600 text-white hover:opacity-90 transition-all duration-300 hover:bg-gray-700 transform hover:scale-105"
              >
                Server Repo
              </a>
            )}
            
            {!project.live && !project.client && !project.server && (
              <p className="text-gray-400">Project links will be available soon.</p>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;