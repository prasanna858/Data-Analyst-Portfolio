import React from 'react';
import { Code, Database, BarChart, PieChart, TrendingUp, FileSpreadsheet } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'Python', level: 85, icon: Code, color: 'from-blue-400 to-blue-600' },
    { name: 'SQL', level: 90, icon: Database, color: 'from-green-400 to-green-600' },
    { name: 'Excel', level: 95, icon: FileSpreadsheet, color: 'from-emerald-400 to-emerald-600' },
    { name: 'Power BI', level: 90, icon: BarChart, color: 'from-yellow-400 to-yellow-600' },
    { name: 'Tableau', level: 55, icon: PieChart, color: 'from-purple-400 to-purple-600' },
    { name: 'Statistics', level: 85, icon: TrendingUp, color: 'from-red-400 to-red-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">Tools and technologies I work with</p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gold-400 mx-auto mt-4"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Skill Header */}
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out group-hover:animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-3 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Additional Competencies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Data Cleaning',
                'Data Visualization',
                'Statistical Analysis',
                'Machine Learning Basics',
                'Basic Business Intelligence',
                'Report Generation'
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-gold-400/20 border border-blue-500/30 rounded-full text-white hover:from-blue-500/30 hover:to-gold-400/30 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;