import React from 'react';

const experiences = [
  {
    company: 'Tech Corp',
    position: 'Senior Frontend Developer',
    period: '2021 - Present',
    description: 'Led the development of multiple high-impact web applications, improving user engagement by 40%',
    achievements: [
      'Implemented new React architecture reducing bundle size by 30%',
      'Mentored junior developers and conducted code reviews',
      'Introduced TypeScript reducing bugs by 25%'
    ]
  },
  {
    company: 'StartupX',
    position: 'Full Stack Developer',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple features for a SaaS platform serving 100k+ users',
    achievements: [
      'Built real-time collaboration features using WebSocket',
      'Optimized database queries improving response time by 50%',
      'Implemented automated testing reducing regression bugs'
    ]
  },
  {
    company: 'Digital Agency',
    position: 'Frontend Developer',
    period: '2018 - 2019',
    description: 'Created responsive web applications for various clients in different industries',
    achievements: [
      'Developed 15+ client websites using modern web technologies',
      'Improved site performance scores to 90+ on Lighthouse',
      'Implemented CI/CD pipelines reducing deployment time'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Work Experience
        </h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 border-l-2 border-purple-200 hover:border-purple-600 transition"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full" />
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-purple-600">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 mt-2 md:mt-0">{exp.period}</span>
                </div>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2" />
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}