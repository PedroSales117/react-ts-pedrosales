import React from 'react';
import { Code2, Brain, Cloud, Database, GitBranch, Terminal } from 'lucide-react';
import './Skills.css';

/**
 * Skills section component displaying technical expertise
 * @component
 * @returns {JSX.Element} Skills grid with categories and technologies
 */
export const Skills: React.FC = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Languages',
      skills: ['TypeScript', 'Python', 'Rust', 'JavaScript', 'Java'],
      color: 'primary'
    },
    {
      icon: <Brain size={32} />,
      title: 'AI & ML',
      skills: ['GPT Models', 'Google Gemini', 'Dialogflow', 'Watson Assistant', 'TensorFlow'],
      color: 'secondary'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Platforms',
      skills: ['Google Cloud Platform', 'Microsoft Azure', 'Amazon Web Services', 'BigQuery', 'Cloud Functions'],
      color: 'tertiary'
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'BigQuery'],
      color: 'primary'
    },
    {
      icon: <Terminal size={32} />,
      title: 'Frameworks',
      skills: ['Node.js', 'Flask', 'FastAPI', 'React', 'TypeORM'],
      color: 'secondary'
    },
    {
      icon: <GitBranch size={32} />,
      title: 'DevOps & Tools',
      skills: ['Docker', 'Git', 'CI/CD', 'Jest', 'Kubernetes'],
      color: 'tertiary'
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Building innovative solutions with modern technologies
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className={`skill-card ${category.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="skill-icon">{category.icon}</div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-list">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-highlights">
          <div className="highlight-card">
            <h4 className="highlight-title">Core Principles</h4>
            <p className="highlight-text">
              TDD, DDD, SOLID, Clean Architecture, Microservices
            </p>
          </div>
          <div className="highlight-card">
            <h4 className="highlight-title">Specialization</h4>
            <p className="highlight-text">
              Conversational AI, Financial Solutions, Cloud Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};