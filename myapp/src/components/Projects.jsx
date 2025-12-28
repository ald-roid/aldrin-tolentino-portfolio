import { useState } from 'react';
import './Projects.css';

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Digicomp Sales and Service Management Information System',
      description: 'A comprehensive management system for sales and service operations, featuring inventory tracking, customer management, service scheduling, and reporting capabilities.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery'],
      github: '#',
      live: '#',
      image: '💼'
    },
    {
      id: 2,
      title: 'Sudoku Game',
      description: 'An interactive Sudoku puzzle game with multiple difficulty levels, hint system, and timer functionality. Built with clean UI and smooth gameplay experience.',
      tech: ['JavaScript', 'HTML/CSS', 'React', 'LocalStorage'],
      github: '#',
      live: '#',
      image: '🧩'
    },
    {
      id: 3,
      title: 'Diploma Retrieval System',
      description: 'A digital system for managing and retrieving academic diplomas and certificates. Features secure document storage, search functionality, and verification system.',
      tech: ['PHP', 'MySQL', 'PDF Generation', 'JavaScript', 'Bootstrap'],
      github: '#',
      live: '#',
      image: '🎓'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className={`project-overlay ${hoveredProject === project.id ? 'active' : ''}`}>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>GitHub</span>
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
