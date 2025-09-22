import React from 'react';
import { User, Heart, Target } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-gold-400 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
  <div className="relative group">
    {/* Outer Gradient Circle */}
    <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 p-1 hover:scale-105 transition-transform duration-300">
      {/* Inner Circle with Image */}
      <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
        <a 
          href="https://your-portfolio-link.com"   // 🔗 Replace with your portfolio/GitHub/LinkedIn
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://res.cloudinary.com/dssiflo17/image/upload/v1758348266/WhatsApp_Image_2025-09-18_at_12.59.13_3efb7d52_j68iwl.jpg" 
            alt="My Portfolio"
            className="w-full h-full object-cover rounded-full"
          />
        </a>
                    
                  </div>
                </div>
                <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-pulse"></div>
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
                Passionate about transforming data into stories
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I am Prasanna Kumar Boddepalli, a passionate and detail-oriented aspiring Data Analyst.  
I recently completed my graduation in Computer Science (B.Sc. MPCS) from Ambedkar University, Srikakulam, with a first-class distinction (80% – Grade A).</p>

<p>My journey into data analytics started during my graduation, where I developed a strong interest in transforming raw data into meaningful insights. I enjoy solving problems, analyzing datasets, and creating impactful visualizations that help in decision-making.</p>

<p>I have hands-on skills in **SQL, Python, Advanced Excel, and Power BI Also Basic in Tableau**, along with strong fundamentals in **HTML and CSS** for building interactive dashboards and data-driven portfolios.</p>  

<p>I am passionate about continuous learning and recently completed specialized training in **Python and SQL** through NextWave, while strengthening my expertise in **Advanced Excel and Power BI** through additional courses.</p> 
<p>I am looking forward to contributing as a Data Analyst by applying my technical skills, logical thinking, and problem-solving mindset to real-world business challenges. </p>

              {/* Key Points */}
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <Heart className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Passionate Learner</h4>
                    <p className="text-gray-400 text-sm">Always eager to learn new technologies and methodologies in data science</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <Target className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">Detail-Oriented</h4>
                    <p className="text-gray-400 text-sm">Meticulous attention to data quality and accuracy in all analyses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;