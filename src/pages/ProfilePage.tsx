import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import blankProfile from '../assets/profile-pic.jpg';
import '../styles/profilePage.css';
function ProfilePage() {
  return (
    <div className="profile-pic-container">
        <h1>Henry Dang</h1>
        <img
          src={blankProfile}
          alt="Profile"
          className="profile-pic"
        />
        <div className="icon-links">
          <a href="https://www.linkedin.com/in/henry-dang891" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/bboyhungry" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="/projects" target="_blank">
            <FontAwesomeIcon icon={faFolderOpen} size="2x" />
          </a>
        </div>
    </div>
  );
}

export default ProfilePage;
