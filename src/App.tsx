import { JSX } from 'react';
import { Header, Hero, Skills, Experience, Projects, Contact } from './components';
import './App.css';

/**
 * Main application component for Pedro Sales portfolio
 * @component
 * @returns {JSX.Element} The complete portfolio application
 */
export default function App(): JSX.Element {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}