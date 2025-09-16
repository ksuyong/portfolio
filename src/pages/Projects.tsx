import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  status: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
        // 프로젝트가 아직 준비되지 않음 - 빈 배열로 설정
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return { background: '#e8f5e8', color: '#2d5a3d' };
      case 'IN_PROGRESS':
        return { background: '#fff3cd', color: '#856404' };
      case 'PLANNING':
        return { background: '#e2e3e5', color: '#495057' };
      default:
        return { background: '#f8f9fa', color: '#6c757d' };
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'COMPLETED':
        return '✅ 완료';
      case 'IN_PROGRESS':
        return '🚧 진행중';
      case 'PLANNING':
        return '📋 계획중';
      case 'DISCONTINUED':
        return '⏸️ 중단';
      default:
        return status;
    }
  };

  if (loading) {
    return <div className="loading">프로젝트를 로딩 중... ⏳</div>;
  }

  return (
    <div className="fade-in-up" style={{ display: 'none' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '1rem' }}>
            💼 프로젝트 포트폴리오
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
            다양한 기술을 활용하여 개발한 프로젝트들을 소개합니다. 각 프로젝트는 실무에서 활용 가능한 기능들을 포함하고 있습니다.
          </p>
        </div>
        
        {projects.length === 0 ? (
          <div className="section" style={{ textAlign: 'center' }}>
            <h2>📝 프로젝트 준비중</h2>
            <p>곧 흥미로운 프로젝트들을 선보일 예정입니다!</p>
          </div>
        ) : (
          <div className="grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: '#2c3e50', marginBottom: '0.5rem', display: 'block' }}>
                    🛠️ 기술 스택:
                  </strong>
                  <div className="tech-stack">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-item">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <span 
                    className="project-status"
                    style={getStatusColor(project.status)}
                  >
                    {getStatusText(project.status)}
                  </span>
                </div>

                <div className="project-links">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="project-link"
                    >
                      🐱 GitHub
                    </a>
                  )}
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      🚀 데모
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 추가 정보 섹션 */}
        <section className="section" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <h2>🚀 더 많은 프로젝트</h2>
          <p>GitHub에서 더 많은 프로젝트와 코드를 확인하실 수 있습니다.</p>
          <a 
            href="https://github.com/developer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn"
            style={{ marginTop: '1rem' }}
          >
            GitHub 프로필 보기 🐱
          </a>
        </section>
      </div>
    </div>
  );
};

export default Projects;