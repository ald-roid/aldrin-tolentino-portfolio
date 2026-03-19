import { useEffect } from 'react';
import './ProjectModal.css';

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close">
          ×
        </button>
        
        <div className="modal-header">
          <span className="modal-category">{project.category === 'graphic-design' ? 'Graphic Design' : 'Development'}</span>
          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.description}</p>
          <div className="modal-tech">
            {project.tech.map((tech, i) => (
              <span key={i} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>

        <div className="modal-body">
          {project.figmaEmbed && (
            <div className="modal-figma-embed">
              <iframe
                title={project.title}
                src={project.figmaEmbed}
                allowFullScreen
              />
            </div>
          )}
          {project.gallery && project.gallery.length > 0 && (
            <div className="modal-gallery">
              {project.gallery.map((img, i) => (
                <div key={i} className="gallery-item">
                  <img src={img} alt={`${project.title} - ${i + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
