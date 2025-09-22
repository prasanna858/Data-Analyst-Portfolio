import React from "react";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection: React.FC = () => {
  const educationAndCertificates = [
    {
      title: "Bachelor of Science in Computer Science",
      institution: "Dr.B.R Ambedkar University, Srikakulam",
      period: "2022 - 2025",
      description:
        "Specialized in Data analysis, data modeling. Graduated with honors. With 80%",
      icon: GraduationCap,
      color: "from-blue-400 to-blue-600",
      link: "https://res.cloudinary.com/dssiflo17/image/upload/v1758364211/Degree_certificate_lb67bx.jpg", // ✅ Degree Certificate Link
    },
    {
      title: "Cisco Data Analytics Certificate",
      institution: "Cisco Career Certificates",
      period: "2025",
      description:
        "Comprehensive program covering data analysis, visualization, and business intelligence tools.",
      icon: Award,
      color: "from-green-400 to-green-600",
      link: "https://res.cloudinary.com/dssiflo17/image/upload/v1758371244/Data_Analyst_Cisco_nrlvtu.png", // 🔗 Replace with actual Cisco certificate link
    },
    {
      title: "Microsoft Power BI For Data Analyst Certificate",
      institution: "Microsoft",
      period: "2025",
      description:
        "Master advanced Excel, SQL techniques for data manipulation, analysis, and database management.",
      icon: Award,
      color: "from-purple-400 to-purple-600",
      link: "https://res.cloudinary.com/dssiflo17/image/upload/v1758289717/Power_BI_Certificate_m0rp5q.png", // 🔗 Replace with actual Power BI certificate link
    },
    {
      title: "SQL for Data Analyst Certificate",
      institution: "Nxtwave, HYD",
      period: "2025",
      description:
        "Advanced SQL techniques for data manipulation, analysis, and database management.",
      icon: Award,
      color: "from-green-400 to-green-600",
      link: "https://res.cloudinary.com/dssiflo17/image/upload/v1758365153/SQL_wlp9s7.png", // 🔗 Replace with actual SQL certificate link
    },
    {
      title: "Data Science Certificate",
      institution: "Reliance Foundation",
      period: "2025",
      description:
        "Advanced Data Science techniques for data manipulation, analysis, and database management.",
      icon: Award,
      color: "from-purple-400 to-purple-600",
      link: "https://res.cloudinary.com/dssiflo17/image/upload/v1758435107/data_science_jk3lpb.jpg", // 🔗 Replace with actual SQL certificate link
    },
    {
      title: "Python for Data Analyst Certificate",
      institution: "Reliance Foundation",
      period: "2025",
      description: "Comprehensive Python programming for data analysis.",
      icon: Award,
      color: "from-green-400 to-green-600",
      link: "https://res.cloudinary.com/dssiflo17/image/upload/v1758434927/python_programming_oszxtq.jpg", // 🔗 Replace with actual Python certificate link
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & <span className="text-blue-400">Certifications</span>
            </h2>
            <p className="text-xl text-gray-400">
              My academic journey and professional development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gold-400 mx-auto mt-4"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-purple-400 to-gold-400"></div>

            {/* Education Items */}
            <div className="space-y-12">
              {educationAndCertificates.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div
                      className="relative flex items-start space-x-8"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline Dot */}
                      <div
                        className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Content Card */}
                      <div className="flex-1 bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-colors duration-300 hover:shadow-2xl">
                        <div className="flex items-center space-x-4 mb-3">
                          <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <div className="flex items-center space-x-2 text-gray-400">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{item.period}</span>
                          </div>
                        </div>

                        <h4
                          className={`text-lg font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3`}
                        >
                          {item.institution}
                        </h4>

                        <p className="text-gray-400 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Additional Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">
              Additional Learning
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Power BI Desktop Specialist",
                "Microsoft Excel Expert",
                "Data Visualization Best Practices",
              ].map((cert, index) => (
                <div
                  key={cert}
                  className="p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Award className="w-8 h-8 text-gold-400 mx-auto mb-3" />
                  <p className="text-white font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
