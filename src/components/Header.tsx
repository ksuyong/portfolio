import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className="nav-links">
          <Link to="/" className="nav-link">🏠 홈</Link>
          <Link to="/projects" className="nav-link" style={{ display: 'none' }}>💼 프로젝트</Link>
          <Link to="/about" className="nav-link">👨‍💻 소개</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;