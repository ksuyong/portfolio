import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="fade-in-up">
      {/* 히어로 섹션 */}
      <section className="hero">
        <h1>⚡백엔드 개발자 김수용⚡</h1>
        <p className="hero-subtitle">Java 기반 백엔드 개발자</p>
        <p>안녕하세요! 저는 열정적인 백엔드 개발자입니다.</p>
        <p>Java, Spring, REST API 개발에 전문성을 가지고 있으며, 효율적이고 확장 가능한 시스템을 구축합니다.</p>
        <p>API 개발 뿐만 아니라 TCP/IP 전문, 대용량 데이터 배치 개발 경험도 보유하고 있습니다.</p>
        {/*<div style={{ marginTop: '2rem' }}>*/}
        {/*  <Link to="/projects" className="btn" style={{ marginRight: '1rem' }}>*/}
        {/*    프로젝트 보기 📁*/}
        {/*  </Link>*/}
        {/*  <Link to="/about" className="btn btn-secondary">*/}
        {/*    더 알아보기 👨‍💻*/}
        {/*  </Link>*/}
        {/*</div>*/}
      </section>

      <div className="container">
        {/* 기술 스택 섹션 */}
        <section className="section">
          <h2>🛠️ 기술 스택</h2>
          <p>다양한 기술을 활용하여 견고하고 효율적인 백엔드 시스템을 개발합니다.</p>
          <div className="tech-stack">
            <span className="tech-item">☕ Java</span>
            <span className="tech-item">🌱 Spring Framework</span>
            <span className="tech-item">🍃 Spring Boot</span>
            <span className="tech-item">📊 JPA/Hibernate</span>
            <span className="tech-item">🏛️ Oracle</span>
            <span className="tech-item">🐬 MySQL</span>
            <span className="tech-item">🐘 PostgreSQL</span>
            <span className="tech-item">🔷 Tibero</span>
            <span className="tech-item">🌐 REST API</span>
            <span className="tech-item">💛 JavaScript</span>
            <span className="tech-item">📘 TypeScript</span>
            <span className="tech-item">💙 jQuery</span>
            <span className="tech-item">🐳 Docker</span>
            <span className="tech-item">🔴 Redis</span>
            <span className="tech-item">🐰 RabbitMQ</span>
            <span className="tech-item">🚀 Apache Kafka</span>
            <span className="tech-item">🔗 n8n</span>
          </div>
        </section>

        {/* 핵심 역량 섹션 */}
        <section className="section">
          <h2>💪 핵심 역량</h2>
          <div className="grid">
            <div className="grid-item">
              <h4>🏗️ 백엔드 아키텍처</h4>
              <ul>
                <li>RESTful API 설계 및 구현</li>
                <li>마이크로서비스 아키텍처</li>
                <li>데이터베이스 설계 및 최적화</li>
                <li>캐싱 전략 구현</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4>🔒 보안 & 인증</h4>
              <ul>
                <li>JWT 기반 인증 시스템</li>
                <li>전자 서명</li>
                <li>OAuth 2.0 연동</li>
                <li>데이터 암호화</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4>📈 성능 최적화</h4>
              <ul>
                <li>쿼리 성능 튜닝</li>
                <li>대용량 데이터 처리</li>
                <li>프로파일링 & 모니터링</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 연락처 정보 */}
        <section className="contact-info">
          <h2>Contact</h2>
          <p>📧 이메일: kimsy5026@gmail.com</p>
          <p>🐱 GitHub: <a href="https://github.com/ksuyong" target="_blank" rel="noreferrer"> https://github.com/ksuyong</a> </p>
          <p>💼 Blog: <a href="https://ksuyong91.tistory.com" target="_blank" rel="noreferrer"> https://ksuyong91.tistory.com</a> </p>
        </section>
      </div>
    </div>
  );
};

export default Home;