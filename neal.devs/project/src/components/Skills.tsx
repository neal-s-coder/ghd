import React from 'react';

const skills = {
  'Frontend': ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Redux'],
  'Backend': ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB'],
  'Tools': ['Git', 'Docker', 'AWS', 'Firebase', 'Vercel'],
  'Other': ['UI/UX Design', 'Agile', 'Testing', 'SEO', 'Performance Optimization']
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-600">{category}</h3>
              <div className="space-y-2">
                {items.map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span>{skill}</span>
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