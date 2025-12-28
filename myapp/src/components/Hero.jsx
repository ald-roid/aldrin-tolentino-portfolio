import { Link } from 'react-router-dom';
import './Hero.css';
import resumePdf from '../assets/Tolentino Resume.pdf';
import profileImage from '../assets/aldrin1.jpg';

function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = resumePdf;
    link.download = 'Tolentino_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name">Aldrin Tolentino</h1>
          <h2 className="hero-title">Aspiring Data Scientist and Software Developer</h2>
          <p className="hero-description">
          I create clean, functional, and data-driven web experiences, combining modern design, efficient code, and a strong focus on user experience.
          </p>
          <div className="hero-buttons">
            <button 
              className="btn btn-primary"
              onClick={handleResumeDownload}
            >
              Download Resume
            </button>
            <Link 
              to="/contact"
              className="btn btn-secondary"
            >
              Get In Touch
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-avatar">
            <img 
              src={profileImage} 
              alt="Aldrin Tolentino" 
              className="profile-photo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="avatar-placeholder" style={{ display: 'none' }}>
              <span>👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
