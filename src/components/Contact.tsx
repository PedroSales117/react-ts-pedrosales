import React from 'react';
import { Mail, MessageCircle, Linkedin, Github, Send } from 'lucide-react';
import './Contact.css';

/**
 * Contact section component with multiple communication channels
 * @component
 * @returns {JSX.Element} Contact section with social links and contact info
 */
export const Contact: React.FC = () => {
  /**
   * Handle contact method clicks
   * @param {string} method - The contact method (email, whatsapp, etc)
   */
  const handleContact = (method: string) => {
    switch (method) {
      case 'email':
        window.location.href = 'mailto:pedrohenrisales@gmail.com';
        break;
      case 'whatsapp':
        window.open('https://wa.me/5511930105237', '_blank');
        break;
      case 'linkedin':
        window.open('https://www.linkedin.com/in/pedrosales117/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/PedroSales117', '_blank');
        break;
    }
  };

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      value: 'pedrosales@gmail.com',
      action: () => handleContact('email'),
      color: 'primary'
    },
    {
      icon: <MessageCircle size={24} />,
      title: 'WhatsApp',
      value: '(11) 93010-5237',
      action: () => handleContact('whatsapp'),
      color: 'secondary'
    },
    {
      icon: <Linkedin size={24} />,
      title: 'LinkedIn',
      value: 'Pedro Sales',
      action: () => handleContact('linkedin'),
      color: 'tertiary'
    },
    {
      icon: <Github size={24} />,
      title: 'GitHub',
      value: '@PedroSales117',
      action: () => handleContact('github'),
      color: 'primary'
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Let's Connect</h2>
          <p className="section-subtitle">
            Ready to build something amazing together? Get in touch!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-intro">
            <h3 className="contact-intro-title">
              Open to New Opportunities
            </h3>
            <p className="contact-intro-text">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question, a business proposal, or just want to say hi, 
              I'll try my best to get back to you!
            </p>
            
            <div className="availability-badge">
              <span className="availability-dot"></span>
              Available for freelance and full-time positions
            </div>
          </div>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <button
                key={method.title}
                className={`contact-method ${method.color}`}
                onClick={method.action}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="contact-icon">{method.icon}</div>
                <div className="contact-info">
                  <span className="contact-title">{method.title}</span>
                  <span className="contact-value">{method.value}</span>
                </div>
                <Send size={16} className="contact-arrow" />
              </button>
            ))}
          </div>
        </div>

        <div className="contact-footer">
          <p className="footer-text">
            Built with React, TypeScript, and ❤️ by Pedro Sales
          </p>
          <p className="footer-copyright">
            © 2024 Pedro Sales. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};