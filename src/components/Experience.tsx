import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "Waveus Networks Pvt Ltd",
      period: "April 2026 - Present",
      description:
        "Developing and enhancing software solutions for 4G/5G Distributed Antenna Systems (DAS) and AIMOS focused on network management, system monitoring, and telecom infrastructure support.",
      achievements: [
        "Developed backend modules using C# (.NET EF Core) to process telecom card and system component data.",
        "Built React.js-based GUI features using JavaScript, HTML, CSS, and Bootstrap for system data visualization and monitoring.",
        "Integrated SQLite3 for local system data management and visualization support.",
        "Leveraged generative AI, prompt engineering, and AI agents for code generation, debugging, refactoring, test generation, documentation, and code review.",
      ],
    },
    {
      title: "Frontend Engineer",
      company: "Pinnacle Tangible – BrainwaysTech LLP",
      period: "February 2025 - March 2026",
      description:
        "Developed and maintained a responsive financial services web application for personal, housing, business, vehicle, and MSME loan solutions.",
      achievements: [
        "Designed modular UI components to present loan services, eligibility details, and enquiry workflows in a user-friendly way.",
        "Integrated REST APIs for dynamic content and lead capture functionality to ensure seamless backend communication.",
        "Optimized performance, page load speed, cross-browser compatibility, and mobile responsiveness.",
        "Implemented SEO best practices and structured layouts to improve visibility and engagement.",
      ],
    },
    {
      title: "Part Costing Application Developer",
      company: "Sandvik Mining and Rock Technology",
      period: "March 2023 – January 2025",
      description:
        "Developed a product to calculate part and assembly costs using key design and manufacturing inputs and integrated with PLM systems.",
      achievements: [
        "Integrated application with Leans and Teamcenter for should-cost display and part design data retrieval.",
        "Developed core modules for cost estimation, data integration, and reporting for engineering workflows.",
        "Collaborated with cross-functional teams to ensure accurate cost models and smooth PLM integration.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">My professional journey</p>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}
                >
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 text-blue-600 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-gray-600 flex items-start gap-2"
                        >
                          <span className="text-blue-500 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 ring-4 ring-white shadow-lg"></div>

                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
