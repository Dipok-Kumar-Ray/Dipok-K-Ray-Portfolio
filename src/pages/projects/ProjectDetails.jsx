import React from "react";
import { useParams, Link, useNavigate } from "react-router";
import projectData from "./data/ProjectData.json"; // ✅ তোমার JSON যেখানে আছে সেই পথ দিন

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // id যদি number হয় তাহলে string এ compare করি
  const project = projectData.find(p => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-semibold mb-2">Project not found</h2>
        <p className="text-gray-500 mb-6">The project you’re looking for doesn’t exist.</p>
        <Link
          to="/projects"
          className="px-5 py-2 rounded-full bg-gray-800 text-white hover:opacity-90"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 text-white hover:opacity-90"
      >
        ← Go Back
      </button>

      <div className="bg-[#1f2430] rounded-xl overflow-hidden shadow-xl">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-72 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-white mb-2">{project.name}</h1>
          <p className="text-sm text-gray-400 mb-4">{project.type}</p>

          {project.description && (
            <p className="text-gray-300 leading-relaxed mb-6">
              {project.description}
            </p>
          )}

          {project.tech && Array.isArray(project.tech) && (
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-sm rounded-full bg-gray-700 text-gray-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-green-600 text-white hover:opacity-90"
              >
                Live Site
              </a>
            )}
            {project.client && (
              <a
                href={project.client}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-gray-600 text-white hover:opacity-90"
              >
                Client Repo
              </a>
            )}
            {project.server && (
              <a
                href={project.server}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2 rounded-full bg-gray-600 text-white hover:opacity-90"
              >
                Server Repo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
