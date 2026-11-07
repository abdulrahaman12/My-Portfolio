export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Next.js', level: 90 },
        { name: 'TypeScript', level: 92 },
        { name: 'JavaScript (ES6+)', level: 96 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Shadcn/UI', level: 85 },
        { name: 'Bootstrap', level: 85 },
        { name: 'HTML5 & CSS3', level: 94 },
        { name: 'SCSS', level: 80 },
      ],
    },
    {
      category: 'Full Stack & State',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express.js', level: 84 },
        { name: 'C# / .NET EF Core', level: 80 },
        { name: 'RESTful APIs', level: 94 },
        { name: 'Redux', level: 86 },
        { name: 'Redux Toolkit', level: 90 },
        { name: 'Context API', level: 90 },
        { name: 'RTK Query', level: 82 },
      ],
    },
    {
      category: 'Tools & Other Skills',
      skills: [
        { name: 'Git / GitLab / Bitbucket', level: 90 },
        { name: 'SQL Server', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'Azure DevOps', level: 78 },
        { name: 'Swagger', level: 82 },
        { name: 'Postman', level: 88 },
        { name: 'Jira', level: 80 },
        { name: 'AI-Assisted Development', level: 90 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2 gap-4">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
