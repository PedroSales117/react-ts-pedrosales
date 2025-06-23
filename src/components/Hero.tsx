import React from 'react';
import { Github, Linkedin, MessageCircle, ArrowDown } from 'lucide-react';
import './Hero.css';

/**
 * Hero section component displaying main profile information
 * @component
 * @returns {JSX.Element} Hero section with profile info and social links
 */
export const Hero: React.FC = () => {
  /**
   * Handle WhatsApp click to open WhatsApp with pre-filled message
   */
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5511930105237', '_blank');
  };

  /**
   * Scroll to skills section
   */
  const scrollToSkills = () => {
    const element = document.getElementById('skills');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I'm</span>
            <span className="hero-name">Pedro Sales</span>
          </h1>
          
          <h2 className="hero-subtitle">
            Sr. Software Developer & AI Solutions Specialist
          </h2>
          
          <p className="hero-description">
            Passionate Back-end Developer & AI Engineer with over 5 years of experience 
            creating innovative solutions in Conversational AI, Cloud Engineering, and 
            modern software architecture.
          </p>

          <div className="hero-tags">
            <span className="hero-tag">TypeScript</span>
            <span className="hero-tag">Python</span>
            <span className="hero-tag">AI/ML</span>
            <span className="hero-tag">Cloud</span>
            <span className="hero-tag">Conversational AI</span>
          </div>

          <div className="hero-actions">
            <a 
              href="https://github.com/PedroSales117" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hero-button primary"
            >
              <Github size={20} />
              View Projects
            </a>
            
            <button className="hero-button secondary" onClick={handleWhatsAppClick}>
              <MessageCircle size={20} />
              Let's Talk
            </button>
          </div>

          <div className="hero-social">
            <a 
              href="https://www.linkedin.com/in/pedrosales117/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            
            <a 
              href="https://github.com/PedroSales117" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            
            <button 
              className="social-link"
              onClick={handleWhatsAppClick}
              aria-label="WhatsApp"
            >
              <MessageCircle size={24} />
            </button>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <div className="hero-image">
              <span className="hero-image-text">PS117</span>
            </div>
          </div>
        </div>
      </div>

      <button className="scroll-indicator" onClick={scrollToSkills}>
        <ArrowDown size={24} className="scroll-arrow" />
      </button>
    </section>
  );
};