import React from "react";
import {
  ExternalLink,
  Github,
  BarChart3,
  Users,
  ShoppingCart,
  Activity,
} from "lucide-react";

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Sales Dashboard Analytics",
      description:
        "Developed a Power BI Sales Dashboard using data cleaning, data modeling, and DAX to provide clear, actionable insights into sales trends and business performance.",
      tech: ["Power BI", "SQL", "Excel"],
      icon: BarChart3,
      color: "from-blue-400 to-blue-600",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "https://app.powerbi.com/view?r=eyJrIjoiYTQ2OTFhNjQtNjRmZC00MzczLWI1MDAtYWJlNzJhMzUyNTI4IiwidCI6IjZmNWMzNDRiLTdjOTYtNDcwMi04OWI2LTM3N2YwNjUyMTE4MCJ9",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "In this project, I performed a comprehensive Customer Segmentation Analysis to identify meaningful customer groups based on behavioral and demographic attributes. The goal was to understand customer patterns, improve targeted marketing strategies, and enhance customer retention.",
      tech: [
        "Python",
        "Anaconda",
        "Jupyter notebook",
        "SQL",
        "Excel",
        "Power BI",
      ],
      icon: Users,
      color: "from-purple-400 to-purple-600",
      image:
        "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "https://app.powerbi.com/view?r=eyJrIjoiNjVhOGJiZmItYjZlNS00NjFmLWFjMTctOWJiYjcwMjRlNDgzIiwidCI6IjZmNWMzNDRiLTdjOTYtNDcwMi04OWI2LTM3N2YwNjUyMTE4MCJ9",
    },
    {
      title: "Chocolate Business Data Analysis",
      description:
        "Performed end-to-end sales and performance analysis for a chocolate business using SQL for data extraction, Advanced Excel for cleaning and preprocessing, and Power BI (with DAX) for building interactive dashboards. Delivered insights on revenue trends, product performance, and using BI Workspace for collaboration.",
      tech: ["SQL", "Advanced Excel", "Power BI", "DAX", "BI Workspace"],
      icon: ShoppingCart,
      color: "from-green-400 to-green-600",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "https://app.powerbi.com/view?r=eyJrIjoiYTg1NTNkODAtOTliNi00OGRhLWFjMGUtMWY0ZjI2MTY4ZDM2IiwidCI6IjZmNWMzNDRiLTdjOTYtNDcwMi04OWI2LTM3N2YwNjUyMTE4MCJ9",
    },
    {
      title: "Data Analyst Portfolio Website",
      description:
        "Showcasing my data analysis projects and skills Like DAX , building data models with relationships through a personal portfolio website.",
      tech: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      icon: BarChart3,
      color: "from-green-400 to-green-600",
      image: "https://miro.medium.com/v2/1*dxD_phdmgHBT_GHogTUzGg.png",
      github: "https://github.com/prasanna858/Data-Analyst-Portfolio.git",
      demo: "https://data-analyst-portfol.netlify.app/",
    },
    {
      title: "COVID-19 Data Visualization",
      description:
        "Interactive dashboard tracking COVID-19 trends with real-time data visualization and statistical analysis of global patterns.",
      tech: ["Tableau", "Python", "Data Cleaning"],
      icon: Activity,
      color: "from-red-400 to-red-600",
      image:
        "https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=800",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-blue-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">
              Data analysis projects showcasing my skills and expertise
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gold-400 mx-auto mt-4"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                    <div
                      className={`absolute top-4 left-4 p-3 rounded-lg bg-gradient-to-r ${project.color}`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-700 text-blue-400 rounded-full hover:bg-blue-500 hover:text-white transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.demo}
                        className={`flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-lg hover:opacity-90 transition-opacity duration-300`}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
