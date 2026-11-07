export default function Education() {
  const education = [
    {
      title: "Bachelor of Engineering (B.E) – Computer Science",
      institution: "M.S Engineering College, Bengaluru",
      period: "2017 – 2021",
      details: "CGPA: 6.3",
    },
    {
      title: "Higher Secondary Certificate – Biology",
      institution: "Sri Vijay Vidyalaya, Krishnagiri",
      period: "2016 – 2017",
      details: "Percentage: 78",
    },
    {
      title: "Secondary School Certificate – Biology",
      institution: "Sri Vijay Vidyalaya, Krishnagiri",
      period: "2014 – 2015",
      details: "Percentage: 94",
    },
  ];

  const certifications = [
    "ReactJS Development – Achievers IT Training Institute (2022)",
    "The Complete Javascript Mastery – Procodrr (2021)",
  ];

  return (
    <section id="education" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Education & Certification
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <div className="space-y-6">
              {education.map((item, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <p className="text-sm text-blue-600 font-semibold mb-1">
                    {item.period}
                  </p>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 mt-1">{item.institution}</p>
                  <p className="text-gray-700 mt-2">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Certification
            </h3>
            <ul className="space-y-4">
              {certifications.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700 text-lg"
                >
                  <span className="text-blue-500">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
