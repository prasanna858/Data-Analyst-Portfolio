import React from "react";
import { TrendingUp, BarChart3, PieChart } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/30 to-gray-900"></div>

        {/* Floating Elements */}
        <div className="absolute inset-0">
          <TrendingUp className="absolute top-20 left-20 w-16 h-16 text-blue-500/30 animate-float" />
          <BarChart3 className="absolute top-40 right-32 w-20 h-20 text-gold-400/30 animate-float-delayed" />
          <PieChart className="absolute bottom-32 left-1/4 w-12 h-12 text-blue-400/30 animate-bounce" />
          <div className="absolute top-1/2 right-20 w-24 h-24 border-2 border-blue-500/30 rounded-full animate-spin-slow"></div>
        </div>

        {/* Data Stream Lines */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse"
              style={{
                top: `${20 + i * 15}%`,
                left: "-50%",
                right: "-50%",
                animationDelay: `${i * 0.5}s`,
                animationDuration: "3s",
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-gold-400">
            Prasanna Kumar
          </span>
        </h1>

        <h2
          className="text-2xl md:text-4xl font-semibold text-gray-300 mb-8 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          Data Analyst
        </h2>

        <p
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          Turning data into meaningful insights and driving business decisions
          through
          <span className="text-blue-400"> analytical thinking</span> and
          <span className="text-gold-400"> data visualization</span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/13oK3zHOy9u18lPIZRF2aku1xXMgEvcSV/view?usp=drive_link" // 🔗 replace with your resume file path or Google Drive link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-gold-400 text-gold-400 font-semibold rounded-full hover:bg-gold-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 inline-block text-center"
          >
            View Business Analyst Resume
          </a>
          <a
            href="https://drive.google.com/file/d/1orMtVMaIpb-ccKVixrTPHacPvt-Y9nOv/view?usp=drive_link" // 🔗 replace with your resume file path or Google Drive link
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-Silver-400 text-Silver-400 font-semibold rounded-full hover:bg-gold-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 inline-block text-center"
          >
            View Data Analyst Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
