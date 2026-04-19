import { useState } from 'react';

const navItems = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'tools', label: 'Tools' },
  { id: 'design', label: 'Design' },
];

const skillData = [
  {
    title: 'React Development',
    percentage: 92,
    levelIndex: 3,
    label: 'Expert',
    description: 'Building modern UIs using React, hooks, and component-driven design.',
  },
  {
    title: 'Tailwind CSS',
    percentage: 88,
    levelIndex: 2,
    label: 'Advanced',
    description: 'Creating responsive designs with utility-first styling and animation.',
  },
  {
    title: 'TypeScript',
    percentage: 78,
    levelIndex: 2,
    label: 'Advanced',
    description: 'Strongly typed code for safer state management and component props.',
  },
  {
    title: 'Node.js & Express',
    percentage: 70,
    levelIndex: 1,
    label: 'Intermediate',
    description: 'API design, request handling, and backend integration with JavaScript.',
  },
];

const levels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

const SkillAssessment = () => {
  const [activeNav, setActiveNav] = useState(navItems[0].id);

  return (
    <section className="bg-[#121212] text-white py-16 px-4 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-400">Skill Assessment</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Mastery breakdown with progress visuals</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">A dynamic skill dashboard that maps knowledge progress and expertise levels into an elegant dark interface.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300 mb-6">Categories</p>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveNav(item.id)}
                  className={`flex w-full items-center justify-between rounded-3xl px-4 py-3 text-left transition-all duration-200 ${
                    activeNav === item.id
                      ? 'bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-500 text-white shadow-[0_15px_40px_rgba(255,0,255,0.22)]'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10'
                  }`}
                >
                  <span className="font-medium">{item.label}</span>
                  <span className={`h-2 w-2 rounded-full ${activeNav === item.id ? 'bg-white' : 'bg-white/20'}`}></span>
                </button>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {skillData.map((skill) => (
                <div key={skill.title} className="rounded-[28px] border border-white/10 bg-[#171717] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-cyan-300">{skill.title}</p>
                      <h3 className="mt-3 text-xl font-semibold text-white">{skill.label}</h3>
                    </div>
                    <span className="rounded-full bg-white/5 px-4 py-2 text-sm font-semibold text-cyan-200">{skill.percentage}%</span>
                  </div>

                  <p className="mt-4 text-sm text-gray-400">{skill.description}</p>

                  <div className="mt-6 rounded-full bg-white/5 p-1">
                    <div
                      className="h-3 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-orange-400 transition-all"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>

                  <div className="mt-6 grid grid-cols-4 gap-3 text-[0.72rem] uppercase tracking-[0.25em] text-gray-400">
                    {levels.map((level, index) => (
                      <div key={level} className="flex flex-col items-center gap-2">
                        <span
                          className={`h-3 w-3 rounded-full ${
                            index <= skill.levelIndex ? 'bg-gradient-to-r from-teal-400 to-cyan-400' : 'bg-white/10'
                          }`}
                        />
                        <span className={`truncate ${index <= skill.levelIndex ? 'text-white' : 'text-gray-500'}`}>
                          {level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillAssessment;
