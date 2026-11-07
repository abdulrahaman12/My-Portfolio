import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "DAS & AIMOS",
      company: "Waveus Networks Pvt Ltd",
      period: "April 2026 - Present",
      description:
        "Developing software solutions for 4G/5G Distributed Antenna Systems (DAS) and AIMOS supporting network management, system monitoring, distributed antenna systems, repeaters, and remote radio units.",
      tech: [
        "React.js",
        "JavaScript",
        "HTML",
        "CSS",
        "Bootstrap",
        "Node.js",
        "C#",
        ".NET EF Core",
        "SQLite3",
        "AI Agents",
        "JIRA",
      ],
      github: null,
      demo: null,
    },
    {
      title: "Pinnacle Tangible",
      company: "BrainwaysTech LLP",
      period: "February 2025 - March 2026",
      description:
        "Developed a responsive financial services portal for loan solutions including personal, housing, business, vehicle, and MSME finance features.",
      tech: [
        "React.js",
        "Next.js",
        "Javascript",
        "REST APIs",
        "Tailwind CSS",
        "SEO",
        "ShadcnUI",
        "Responsive UI",
        "Git",
      ],
      github: null,
      demo: null,
    },
    {
      title: "Part Costing Application",
      company: "Sandvik Mining and Rock Technology",
      period: "March 2023 – January 2025",
      description:
        "Built a cost estimation product to calculate part and assembly costs by processing design and manufacturing inputs with PLM system integrations.",
      tech: [
        "React.js",
        "Javascript",
        "HTML & CSS",
        "C#",
        "Bootstrap",
        ".NET EF Core",
        "Lean Integration",
        "Azure DevOps",
        "GitLab",
      ],
      github: null,
      demo: null,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">
            Recent work and product contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="mb-3 text-sm font-medium text-blue-400">
                  {project.period}
                </div>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-cyan-300 mb-4">{project.company}</p>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
