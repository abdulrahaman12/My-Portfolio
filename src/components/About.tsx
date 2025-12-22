import { Code2, Rocket, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code with React.js best practices',
    },
    {
      icon: Rocket,
      title: 'Performance Driven',
      description: 'Optimizing applications to improve user experience and reduce load times',
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'Working seamlessly with cross-functional teams and QA to deliver quality solutions',
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
              I'm an experienced React JS developer with 3 years of expertise in crafting dynamic web applications.
              I have a demonstrated ability to deliver responsive user interfaces and collaborate effectively in
              fast-paced environments. I'm eager to contribute my skills and drive innovation within dynamic team settings.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans across React.js, Next.js, JavaScript, TypeScript, Node.js, and various backend technologies.
              I'm constantly learning and staying up-to-date with the latest industry trends to deliver optimal solutions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm passionate about creating elegant solutions to complex problems, improving application performance,
              and working collaboratively with designers, QA teams, and backend developers to ensure smooth integration.
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h3>
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
