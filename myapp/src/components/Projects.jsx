import { useState } from 'react';
import ProjectModal from './ProjectModal';
import './Projects.css';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const graphicDesignProjects = [
    {
      id: 1,
      title: 'HCDC Research Portal',
      description: 'Complete UI/UX design for a research data portal. Delivered user flows, wireframes, high-fidelity mockups, and interactive prototypes. Designed for researchers to easily access and visualize data—prioritizing clarity, accessibility, and a seamless user experience.',
      tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Design Systems', 'Wireframing'],
      image: '🎨',
      category: 'graphic-design',
      figmaEmbed: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2FI69hXqTvdG8kDOf3sdQZpU%2FHCDC-RESEARCH-PORTAL',
      figmaUrl: 'https://www.figma.com/design/I69hXqTvdG8kDOf3sdQZpU/HCDC-RESEARCH-PORTAL?node-id=0-1',
      openModal: true
    }
  ];

  const developmentProjects = [
    {
      id: 7,
      title: 'Digicomp Sales and Service MIS',
      description: 'Comprehensive management system for sales and service operations with inventory tracking, customer management, service scheduling, and reporting capabilities.',
      tech: ['PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery'],
      image: '💼',
      category: 'development',
      links: [
        { url: '#', label: 'GitHub' },
        { url: '#', label: 'Live Demo' }
      ],
      openModal: false
    },
    {
      id: 8,
      title: 'Sudoku Game',
      description: 'Interactive Sudoku puzzle game with multiple difficulty levels, hint system, and timer. Clean UI and smooth gameplay built with JavaScript and React.',
      tech: ['JavaScript', 'HTML/CSS', 'React', 'LocalStorage'],
      image: '🧩',
      category: 'development',
      links: [
        { url: '#', label: 'GitHub' },
        { url: '#', label: 'Live Demo' }
      ],
      openModal: false
    },
    {
      id: 12,
      title: 'Crack a Number',
      description: 'Number guessing puzzle game. Players crack the hidden number through clues and logic. Built with clean, engaging UI and smooth gameplay.',
      tech: ['JavaScript', 'HTML/CSS', 'React'],
      image: '🔢',
      category: 'development',
      links: [
        { url: '#', label: 'GitHub' },
        { url: '#', label: 'Live Demo' }
      ],
      openModal: false
    },
    {
      id: 14,
      title: 'WordWhiz',
      description: 'Word puzzle and vocabulary game. Challenge your language skills with engaging word-based gameplay and multiple difficulty levels.',
      tech: ['JavaScript', 'HTML/CSS', 'React'],
      image: '📝',
      category: 'development',
      links: [
        { url: '#', label: 'GitHub' },
        { url: '#', label: 'Live Demo' }
      ],
      openModal: false
    },
    {
      id: 15,
      title: 'CountPia',
      description: 'Counting and math-based application. Interactive tool for learning and practicing counting skills with a clean, user-friendly interface.',
      tech: ['JavaScript', 'HTML/CSS', 'React'],
      image: '🔢',
      category: 'development',
      links: [
        { url: '#', label: 'GitHub' },
        { url: '#', label: 'Live Demo' }
      ],
      openModal: false
    },
    {
      id: 16,
      title: 'De La Salle John BSoco Diploma Retrieval System',
      description: 'Digital system for De La Salle John BSoco for managing and retrieving academic diplomas and certificates. Secure document storage, search functionality, and verification system.',
      tech: ['PHP', 'MySQL', 'PDF Generation', 'JavaScript', 'Bootstrap'],
      image: '🎓',
      category: 'development',
      links: [
        { url: '#', label: 'GitHub' },
        { url: '#', label: 'Live Demo' }
      ],
      openModal: false
    },
    {
      id: 13,
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React and Vite. Deployable to Vercel or Framer. This site—built and designed by me.',
      tech: ['React', 'Vite', 'CSS3', 'Vercel'],
      image: '🌐',
      category: 'development',
      links: [
        { url: 'https://github.com/ald-roid/aldrin-tolentino-portfolio', label: 'GitHub' },
        { url: '#', label: 'Live Site' }
      ],
      openModal: false
    }
  ];

  const handleProjectClick = (project) => {
    if (project.openModal) {
      setSelectedProject(project);
    }
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <span className="title-number">03.</span>
          My Work
        </h2>
        <p className="projects-intro">
          Development projects and the HCDC Research Portal design. Click HCDC to explore the Figma design.
        </p>

        {/* DEVELOPMENT — First */}
        <div className="projects-section projects-section-dev">
          <h3 className="section-label section-label-dev">
            <span className="label-icon">◆</span>
            Development & Technical Projects
          </h3>
          <p className="section-hook">
            Full-stack and front-end projects that showcase technical ability alongside design thinking.
          </p>
          <div className="projects-grid projects-grid-dev">
            {developmentProjects.map((project) => (
              <div key={project.id} className="project-card project-card-dev">
                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-overlay project-overlay-dev">
                    <div className="project-links">
                      {project.links.filter(l => l.url && l.url !== '#').map((link, idx) => (
                        <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                          <span>{link.label}</span>
                        </a>
                      ))}
                      {project.links.filter(l => l.url && l.url !== '#').length === 0 && (
                        <span className="project-link disabled">Coming Soon</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category development">Development</span>
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

        {/* HCDC — Second */}
        <div className="projects-section">
          <h3 className="section-label">
            <span className="label-icon">✦</span>
            HCDC Research Portal
          </h3>
          <p className="section-hook">
            UI/UX design for a research data portal. Click to view the Figma prototype.
          </p>
          <div className="projects-grid projects-grid-design">
            {graphicDesignProjects.map((project) => (
              <div
                key={project.id}
                className="project-card project-card-design"
                onClick={() => handleProjectClick(project)}
              >
                <div className="project-image">
                  <div className="project-icon">{project.image}</div>
                  <div className="project-overlay project-overlay-design">
                    <span className="view-text">View Project</span>
                  </div>
                </div>
                <div className="project-content">
                  <span className="project-category graphic-design">Graphic Design</span>
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
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
