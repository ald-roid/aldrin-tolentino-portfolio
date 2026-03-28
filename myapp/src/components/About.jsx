import { useCallback, useState } from 'react';
import './About.css';

const GALLERY_SLIDES = [
  {
    src: '/about-gallery/certificate-internship.png',
    alt: 'Certificate of completion for technical and software development training at Infosoft / Mini Clean',
    caption: 'Certificate of completion — Infosoft / Mini Clean Business Solutions',
  },
  {
    src: '/about-gallery/ojt-exit-conference.png',
    alt: 'Holding certificate of completion at Infosoft exit conference',
    caption: 'Exit conference — Infosoft',
  },
  {
    src: '/about-gallery/ojt-team-meeting.png',
    alt: 'Team meeting during OJT with colleagues around a conference table and presentation screen',
    caption: 'OJT — collaborating with the team at Infosoft',
  },
  {
    src: '/about-gallery/ojt-coding.png',
    alt: 'Working on frontend code in Visual Studio Code during internship',
    caption: 'Building UI with React and JavaScript on the job',
  },
];

function AboutGallery() {
  const [index, setIndex] = useState(0);
  const len = GALLERY_SLIDES.length;
  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + len) % len);
    },
    [len]
  );

  const slide = GALLERY_SLIDES[index];

  const onGalleryKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      go(-1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      go(1);
    }
  };

  return (
    <div
      className="about-gallery about-gallery--embedded"
      role="region"
      aria-roledescription="carousel"
      aria-label="Infosoft internship photos and certificate"
      tabIndex={0}
      onKeyDown={onGalleryKeyDown}
    >
      <div className="about-gallery-viewport">
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="about-gallery-img"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      </div>
      <p className="about-gallery-caption">{slide.caption}</p>
      <div className="about-gallery-controls">
        <button type="button" className="about-gallery-btn" onClick={() => go(-1)} aria-label="Previous image">
          ‹
        </button>
        <div className="about-gallery-dots" role="tablist" aria-label="Slide">
          {GALLERY_SLIDES.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Slide ${i + 1} of ${len}`}
              className={`about-gallery-dot${i === index ? ' is-active' : ''}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
        <button type="button" className="about-gallery-btn" onClick={() => go(1)} aria-label="Next image">
          ›
        </button>
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I&apos;m a Junior Software Developer who loves building digital solutions that make a
              difference. I graduated with a Bachelor of Science in Information Technology. With PHP, React,
              JavaScript, and MySQL, I ship web apps that are clean, functional, and user-focused—from
              management systems to interactive experiences and diploma retrieval platforms.
            </p>
            <p>
              I enjoy exploring new technologies, writing efficient code, and contributing to projects that
              solve real problems. I care about clear structure, performance, and interfaces that people
              actually enjoy using.
            </p>
            <p>
              I also have a growing interest in graphic design and want to keep blending technical skills with
              visual creativity—so the products I help build look as thoughtful as they behave.
            </p>

            <div className="about-experience">
              <h3 className="about-experience-title">Experience</h3>
              <article className="about-experience-card">
                <div className="about-experience-layout">
                  <div className="about-experience-copy">
                    <div className="about-experience-meta">
                      <span className="about-experience-role">Frontend Developer Intern</span>
                      <span className="about-experience-org">Infosoft / Mini Clean Business Solutions</span>
                      <span className="about-experience-loc">Matina, Davao City</span>
                      <span className="about-experience-dates">Sep 2025 — Nov 2025 · 486 hours</span>
                    </div>
                    <p className="about-experience-desc">
                      On-the-job training where I worked on real product UI alongside the team: implementing and
                      refining frontend features, collaborating in a professional software environment, and
                      applying technical training in software development (.NET, WordPress, and Vue.js were part
                      of the company stack I was exposed to). This internship strengthened how I translate designs
                      and requirements into responsive, usable interfaces.
                    </p>
                  </div>
                  <div className="about-experience-media">
                    <AboutGallery />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
