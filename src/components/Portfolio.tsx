import React, { useEffect } from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import EducationSection from './EducationSection';
import ContactSection from './ContactSection';

interface PortfolioProps {
  isVisible: boolean;
}

const Portfolio: React.FC<PortfolioProps> = ({ isVisible }) => {
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'auto';
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="min-h-screen bg-gray-900 text-white animate-slide-in">
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;