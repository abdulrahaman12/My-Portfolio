import { BrainCircuit, Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Scalable Frontend Engineering',
      description: 'Building responsive React.js and Next.js applications with reusable components, clean architecture, and maintainable code.',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: 'Improving render efficiency, state management, responsiveness, and loading performance for better user experience.',
    },
    {
      icon: Users,
      title: 'Collaborative Delivery',
      description: 'Working closely with QA, backend, and UI/UX teams in Agile environments to deliver reliable software.',
    },
    {
      icon: BrainCircuit,
      title: 'AI-Assisted Development',
      description: 'Using GitHub Copilot, Windsurf, and AI-driven workflows to accelerate development, debugging, refactoring, and code review.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Frontend Developer with 4.7 years of experience building scalable web applications using
              React.js, Next.js, and TypeScript. I specialize in creating reusable UI components, integrating
              REST APIs, and implementing efficient state management with Redux Toolkit and Context API.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I have hands-on experience in designing responsive interfaces with Tailwind CSS, HTML5, CSS,
              and modern JavaScript, along with backend integration using Node.js, Express.js, .NET EF Core,
              and database systems such as MySQL and SQL Server.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I also leverage AI-assisted development tools such as GitHub Copilot and Windsurf to accelerate
              coding, debugging, refactoring, and code review while maintaining code quality and performance.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
