import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <section id="contact" className="contact">
    <div className="container-four">
      <div className="title-decoration">
        <h1>CONTACT</h1>
      </div>
      <div className="contact-text">
        <p>
          I am currently looking for a junior developer position and I'm always
          happy to chat. <br /> I enjoy Coding, Brazilian jiu-jitsu, Rugby, Oil
          painting, Photography, Philosophy{' '}
        </p>
        <a className="footer-email" href="mailto:james.michael.darby@gmail.com">
          james.michael.darby@gmail.com
        </a>
        <div>
          <a
            className=""
            href="https://www.linkedin.com/in/j-darby"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="3x"
              className="fontawesome"
            />
          </a>{' '}
          <a
            className=""
            href="https://github.com/Darbjm"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="3x"
              className="fontawesome"
            />
          </a>
        </div>
      </div>
    </div>
    <div className="bottom">
      © Copright 2020 James Darby - Built with React, SASS and HTML
    </div>
  </section>
);
export default Footer;
