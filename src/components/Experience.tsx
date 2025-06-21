import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import './Experience.css';

/**
 * Experience section component displaying work history
 * @component
 * @returns {JSX.Element} Timeline of professional experiences
 */
export const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'GFT Technologies',
      position: 'Sr. Software Developer & AI Solutions Specialist',
      period: 'May 2024 - Present',
      location: 'São Paulo, Brasil',
      description: 'Architecting and developing cutting-edge solutions in the financial sector using modern technologies and industry best practices.',
      highlights: [
        'Conversational AI with Google DialogFlow ES & CX',
        'Cloud Infrastructure on Google Cloud Platform',
        'AI/ML Integration with Google Gemini Models',
        'Backend Development with Python and Flask',
        'TDD methodologies with Jest framework'
      ]
    },
    {
      company: 'Compass UOL',
      position: 'Back-end Developer & AI Engineer',
      period: 'May 2022 - May 2024',
      location: 'São Paulo, Brasil',
      description: 'Developed innovative financial solutions using TypeScript with TDD, DDD, and SOLID principles in microservices architecture.',
      highlights: [
        'TypeScript with microservices architecture',
        'OpenAI GPT Models integration',
        'Cloud platforms: GCP, Azure, AWS',
        'Twilio Studio & Flex implementation',
        'Docker containerization'
      ]
    },
    {
      company: 'Compass UOL',
      position: 'Artificial Intelligence Developer',
      period: 'November 2021 - May 2022',
      location: 'São Paulo, Brasil',
      description: 'Worked with various AI systems including IBM Watson and GPT models, creating integrations using NodeJS.',
      highlights: [
        'IBM Watson integration',
        'GPT models implementation',
        'NodeJS backend development',
        'MongoDB and SQL databases'
      ]
    },
    {
      company: 'Digitaly Tech',
      position: 'IBM Watson Team Lead',
      period: 'July 2021 - November 2021',
      location: 'São Paulo, Brasil',
      description: 'Led chatbot projects with architecture, development, pre-sales, and team leadership responsibilities.',
      highlights: [
        'IBM Watson Assistant',
        'Amazon Alexa integration',
        'Twilio WhatsApp integration',
        'Team leadership and mentoring'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            Building the future of AI and software development
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div 
              key={`${exp.company}-${exp.position}`} 
              className="timeline-item"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="experience-header">
                  <h3 className="experience-position">{exp.position}</h3>
                  <div className="experience-company">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                
                <div className="experience-meta">
                  <span className="experience-period">
                    <Calendar size={14} />
                    {exp.period}
                  </span>
                  <span className="experience-location">
                    <MapPin size={14} />
                    {exp.location}
                  </span>
                </div>

                <p className="experience-description">{exp.description}</p>

                <div className="experience-highlights">
                  {exp.highlights.map((highlight) => (
                    <span key={highlight} className="highlight-tag">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};