import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <div className="space-y-2">
              <p className="text-blue-400 font-medium text-lg">Hello, I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Abdul Rahaman
              </h1>
              <p className="text-2xl md:text-3xl text-gray-300">Web Developer II</p>
            </div>

            <p className="text-lg text-gray-400 leading-relaxed">
              Experienced React JS developer with 3 years of expertise in crafting dynamic web applications.
              Demonstrating ability to deliver responsive user interfaces and collaborate effectively in
              fast-paced environments.
            </p>

            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>Bengaluru, India</span>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-medium transition-colors"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border border-gray-600 hover:border-blue-400 rounded-lg font-medium transition-colors"
              >
                View Work
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 hover:border-blue-400 rounded-lg transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rahaman-028aa9203/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 hover:border-blue-400 rounded-lg transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:abdulrahaman7170@gmail.com"
                className="p-3 border border-gray-700 hover:border-blue-400 rounded-lg transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-center">
            <div className="relative w-95 h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative w-full h-full bg-white rounded-2xl shadow-2xl ring-4 ring-blue-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/whatsapp_image_2025-12-16_at_1.19.34_pm.jpeg"
                  alt="Profile"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
