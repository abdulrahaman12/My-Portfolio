import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Leave Management System",
      description:
        "Web application to manage and track employee leave and work-from-home requests with real-time approval workflows and comprehensive admin console.",
      tech: [
        "React.js",
        "TypeScript",
        "React-bootstrap",
        ".NET Core",
        "SSMS",
        "REST APIs",
      ],
      image:
        "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/abdulrahaman12/Leave-Management-System.git",
      demo: "https://example.com",
    },
    {
      title: "Mast Stress Analyzer",
      description:
        "Application to assess stress levels based on user inputs. Integrated a Machine Learning model in backend for real-time analysis and predictions.",
      tech: ["React.js", "HTML5 & CSS3", "Python", "Flask", "Scikit-learn"],
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/abdulrahaman12/Mast-Stress-Analyzer.git",
      demo: "https://example.com",
    },
    {
      title: "HR Workflow Designer",
      description:
        "Designed and developed user-friendly, highly responsive web interfaces meeting UI/UX requirements while improving performance and user engagement.",
      tech: ["React.js", "HTML5", "Tailwind CSS", "JavaScript", "Context API"],
      image:
        "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/abdulrahaman12/HR-Workflow-Prototype.git",
      demo: "https://example.com",
    },
    {
      title: "State Management Implementation",
      description:
        "Leveraged Context API for state management in React JS applications, simplifying complex state handling and increasing code maintainability.",
      tech: ["React.js", "Context API", "JavaScript", "Redux Toolkit"],
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/abdulrahaman12/Hook-Practice.git",
      demo: "https://example.com",
    },
    {
      title: "PDF Extraction Utility",
      description:
        "Collaborated with back-end developers to seamlessly integrate front-end components, improving performance and reducing load time for applications.",
      tech: ["React.js", "Node.js", "REST APIs", "JavaScript", "TypeScript"],
      image:
        "https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/abdulrahaman12/PDF-Extraction-Utility.git",
      demo: "https://example.com",
    },
    {
      title: "Part Costing Application",
      description:
        "Developed a product to calculate part and assembly costs by processing key design and manufacturing inputs. Ensured accurate cost estimations for engineering teams.",
      tech: ["React.js", "Node.js", "REST APIs", "JavaScript", "TypeScript"],
      image:
        "https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "https://github.com/abdulrahaman12/Part-Costing-Application",
      demo: "https://example.com",
    },
  ];
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-400">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {/* <ExternalLink className="w-5 h-5" /> */}
                    {/* <span>Live Demo</span> */}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
