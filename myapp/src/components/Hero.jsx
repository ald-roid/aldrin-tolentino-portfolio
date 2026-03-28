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
      <div className="hero-accent-bar" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-kicker-row">
            <span className="hero-pulse" aria-hidden="true" />
            <span className="hero-kicker">Open to junior dev roles</span>
          </div>
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1 className="hero-name">
            <span className="hero-name-line hero-name-line--1">Aldrin</span>
            <span className="hero-name-line hero-name-line--2">Tolentino</span>
          </h1>
          <h2 className="hero-title">
            <span className="hero-title-tag">Junior Software Developer</span>
          </h2>
          <p className="hero-description">
            I create clean, functional, and data-driven web experiences. With a strong
            foundation in modern web technologies, I enjoy turning complex problems into
            simple, beautiful, and intuitive solutions.
          </p>
          <div className="hero-buttons">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleResumeDownload}
            >
              Download Resume
            </button>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
          
        </div>
        <div className="hero-visual">
          <div className="hero-frame">
            <div className="hero-frame-ring" aria-hidden="true" />
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
      </div>
    </section>
  );
}

export default Hero;
