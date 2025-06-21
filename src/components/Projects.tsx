import React from 'react';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import './Projects.css';

/**
 * Projects section component displaying GitHub repositories
 * @component
 * @returns {JSX.Element} Grid of project cards with repository information
 */
export const Projects: React.FC = () => {
  const projects = [
    {
      name: 'ts-template-api',
      description: 'A robust TypeScript API template with best practices and modern architecture',
      tags: ['TypeScript', 'Node.js', 'API', 'Template'],
      url: 'https://github.com/PedroSales117/ts-template-api'
    },
    {
      name: 'ts-cli-template-maker',
      description: 'CLI tool for generating TypeScript project templates with customizable options',
      tags: ['TypeScript', 'CLI', 'Node.js', 'Tools'],
      url: 'https://github.com/PedroSales117/ts-cli-template-maker'
    },
    {
      name: 'react-ts-signin-signup',
      description: 'Modern authentication system built with React and TypeScript',
      tags: ['React', 'TypeScript', 'Authentication', 'Frontend'],
      url: 'https://github.com/PedroSales117/react-ts-signin-signup'
    },
    {
      name: 'python-gpt-service',
      description: 'Python service integrating GPT models for AI-powered applications',
      tags: ['Python', 'GPT', 'AI', 'Flask'],
      url: 'https://github.com/PedroSales117/python-gpt-service'
    },
    {
      name: 'node-ts-monthly-control',
      description: 'Financial control application for monthly expense tracking',
      tags: ['TypeScript', 'Node.js', 'Finance', 'Backend'],
      url: 'https://github.com/PedroSales117/node-ts-monthly-control'
    },
    {
      name: 'udemy-rmanguinho-clean-ts-api',
      description: 'Clean Architecture API implementation following SOLID principles',
      tags: ['Clean Architecture', 'TypeScript', 'TDD', 'DDD'],
      url: 'https://github.com/PedroSales117/udemy-rmanguinho-clean-ts-api'
    },
    {
      name: 'ts-watson-workflow-controller',
      description: 'Workflow controller for IBM Watson Assistant integrations',
      tags: ['TypeScript', 'Watson', 'AI', 'Chatbot'],
      url: 'https://github.com/PedroSales117/ts-watson-workflow-controller'
    },
    {
      name: 'node-js-watson-create-intent-service',
      description: 'Service for creating and managing Watson Assistant intents',
      tags: ['Node.js', 'Watson', 'AI', 'API'],
      url: 'https://github.com/PedroSales117/node-js-watson-create-intent-service'
    },
    {
      name: 'ts-watson-dialog-tree-service',
      description: 'Dialog tree management service for Watson Assistant',
      tags: ['TypeScript', 'Watson', 'Conversational AI'],
      url: 'https://github.com/PedroSales117/ts-watson-dialog-tree-service'
    },
    {
      name: 'ts-signup-service',
      description: 'Secure user registration service with validation and authentication',
      tags: ['TypeScript', 'Auth', 'Backend', 'Security'],
      url: 'https://github.com/PedroSales117/ts-signup-service'
    },
    {
      name: 'ts-watson-service',
      description: 'Comprehensive Watson Assistant integration service',
      tags: ['TypeScript', 'Watson', 'AI', 'Integration'],
      url: 'https://github.com/PedroSales117/ts-watson-service'
    },
    {
      name: 'ts-email-service',
      description: 'Email service with templates and queue management',
      tags: ['TypeScript', 'Email', 'Backend', 'Service'],
      url: 'https://github.com/PedroSales117/ts-email-service'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Open source contributions and personal projects
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="project-header">
                <h3 className="project-name">{project.name}</h3>
                <ExternalLink size={20} className="project-link-icon" />
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>

              <div className="project-footer">
                <div className="project-stats">
                  <span className="project-stat">
                    <Star size={16} />
                    <span>Star</span>
                  </span>
                  <span className="project-stat">
                    <GitFork size={16} />
                    <span>Fork</span>
                  </span>
                </div>
                <Github size={20} className="github-icon" />
              </div>
            </a>
          ))}
        </div>

        <div className="projects-cta">
          <a
            href="https://github.com/PedroSales117"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-button"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};