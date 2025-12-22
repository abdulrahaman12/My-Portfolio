import { Briefcase, Calendar } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Frontend Engineer',
      company: 'Sandvik Asia Pvt. Ltd.',
      period: '2024 - Present',
      description: 'Developing and maintaining dynamic web applications using React JS. Leveraging context API for state management and collaborating with QA and UI/UX teams.',
      achievements: [
        'Enhanced user experience by 30% with optimized React components',
        'Improved application performance by 25% through code optimization',
        'Simplified complex state handling, increasing code maintainability by 40%',
        'Reduced production bugs by 20% through comprehensive testing collaboration',
        'Increased user satisfaction by 35% with visually appealing interfaces',
      ],
    },
    {
      title: 'React JS Developer',
      company: 'Sandvik Asia Pvt. Ltd.',
      period: '2022 - 2024',
      description: 'Developed user-facing features using React.js with focus on clean, efficient, and maintainable code. Designed responsive web interfaces meeting UI requirements.',
      achievements: [
        'Developed clean code resulting in 20% reduction in critical bugs',
        'Improved application performance by 25% with optimized React components',
        'Designed responsive interfaces increasing user engagement by 25%',
        'Integrated frontend components with backend, improving performance by 15%',
        'Resolved frontend issues quickly, reducing resolution time by 35%',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
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
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
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
                        <li key={i} className="text-gray-600 flex items-start gap-2">
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
