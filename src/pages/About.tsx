import React from 'react';

const About: React.FC = () => {
  return (
    <div className="fade-in-up">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#2c3e50', marginBottom: '1rem' }}>
            👨‍💻 개발자 소개
          </h1>
        </div>

        {/* 경력 섹션 */}
        <section className="section">
          <h2>💼 경력</h2>
          <div style={{ borderLeft: '4px solid #667eea', paddingLeft: '2rem', marginLeft: '1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                NICE평가정보 · 2021년 5월 ~ 2025년 4월
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                CB 온라인 전문, 배치, API 개발 업무를 수행했습니다.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#2c3e50', marginBottom: '0.5rem', display: 'block' }}>🛠️ 사용 기술:</strong>
                <p>Java, Spring Framework, Oracle, Tibero, WebToB, Jeus</p>
              </div>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>CB 온라인 전문 및 배치 개발</li>
                <li>AML API 서비스 개발 및 운영</li>

                <li>부동산 API 서비스 개발 및 운영</li>
                <li>대부업 마이데이터 서비스 API 개발 및 운영</li>
                <li>보이스피싱 방지 서비스 API 개발 및 운영</li>
                <li>공공마이데이터 서비스 API 개발 및 운영</li>
                <li>KISA 전자유통허브 API 개발</li>
                <li>개발실 내 전문 및 API 테스트 페이지 개발</li>
              </ul>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                아비도스 · 2020년 5월 - 2021년 4월
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                공공기관 및 민간 홈페이지 및 서비스 개발 및 유지보수 업무를 수행했습니다.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#2c3e50', marginBottom: '0.5rem', display: 'block' }}>🛠️ 사용 기술:</strong>
                <p>Java, Spring Framework, Oracle, Tibero, Apache, Tomcat, Jboss, Vue.js, Redis, RabbitMQ</p>
              </div>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>KISA smartG2B 홈페이지 유지보수</li>
                <li>KISA 보호나라 홈페이지 유지보수</li>
                <li>ePrivacy 클린서비스 운영</li>
                <li>멀티캠퍼스 학습자 활동관리 시스템 개발</li>
                <li>타타 대우 TOSS 고객관리 시스템 개선 개발</li>
                <li>인천서구문화원 홈페이지 유지보수</li>
                <li>서울예술단 홈페이지 유지보수</li>
                <li>KAIT 전자계약시스템 유지보수</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                이젠솔루션 · 2018년 1월 ~ 2020년 1월
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                LG 유플러스 PASS앱 관련 API, 전문, 배치 개발 업무를 수행했습니다.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#2c3e50', marginBottom: '0.5rem', display: 'block' }}>🛠️ 사용 기술:</strong>
                <p>Java, Spring Framework, Oracle, Altibase, Apache, Tomcat, Netty, Apache Kafka</p>
              </div>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>LG 유플러스 모바일 상품권 다회선 분리 프로젝트</li>
                <li>LG 유플러스 PASS 인증서 프로젝트</li>
                <li>LG 유플러스 휴대폰 본인확인 방통위 대응 프로젝트</li>
                <li>LG 유플러스 FIDO SDK 프로젝트</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                닐슨컴퍼니코리아 · 2016년 8월 ~ 2017년 10월
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                공공기관 및 기업 설문 작성폼 개발 업무를 수행했습니다.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#2c3e50', marginBottom: '0.5rem', display: 'block' }}>🛠️ 사용 기술:</strong>
                <p>JavaScript, Jquery</p>
              </div>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>공공기관 및 기업 설문 작성 프로젝트 참여</li>
              </ul>
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                지아이링크 · 2015년 12월 ~ 2016년 5월
              </p>
              <p style={{ color: '#666', marginBottom: '1rem' }}>
                글로벌와이파이 홈페이지에서 리뉴얼 작업 및 유지보수 업무를 수행했습니다.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: '#2c3e50', marginBottom: '0.5rem', display: 'block' }}>🛠️ 사용 기술:</strong>
                < div className="tech-stack" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <p>Java, JSP, MySQL, JavaScript, Jquery</p>
                </div>
              </div>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>글로벌와이파이 홈페이지 유지보수 및 리뉴얼</li>
              </ul>
            </div>
            
          </div>
        </section>

        {/* 학력 섹션 */}
        <section className="section">
          <h2>🎓 학력</h2>
          <div style={{ borderLeft: '4px solid #667eea', paddingLeft: '2rem', marginLeft: '1rem' }}>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>
              컴퓨터공학과 학사
            </h3>
            <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              학점은행제 · 2024년 11월 - 2025년 8월
            </p>
            <div style={{ marginBottom: '2rem' }}></div>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>
              디지털전자과 전문학사
            </h3>
            <p style={{ color: '#667eea', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              인하공업전문대학 · 2011년 3월 - 2015년 2월
            </p>
          </div>
        </section>

        {/* 기술 스킬 섹션 */}
        <section className="section">
          <h2>🛠️ 기술 스킬</h2>
          <div className="grid">
            <div className="grid-item">
              <h4>☕ 백엔드</h4>
              <ul>
                <li>Java (Advanced)</li>
                <li>Spring (Advanced)</li>
                <li>Spring Cloud(Beginner)</li>
                <li>JPA/Hibernate (Beginner)</li>
                <li>Node.js (Beginner)</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4>🗄️ 데이터베이스</h4>
              <ul>
                <li>Oracle (Intermediate)</li>
                <li>MySQL (Intermediate)</li>
                <li>PostgreSQL (Intermediate)</li>
                <li>Redis (Beginner)</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4>🌐 서버&프레임워크</h4>
              <ul>
                <li>Apache HTTP Server (Intermediate)</li>
                <li>Apache Tomcat (Intermediate)</li>
                <li>Tmax WebToB (Intermediate)</li>
                <li>Tmax Jeus (Intermediate)</li>
              </ul>
            </div>
            <div className="grid-item">
              <h4>🛠️ 도구 & 플랫폼</h4>
              <ul>
                <li>Eclipse (Advanced)</li>
                <li>IntelliJ IDEA (Intermediate)</li>
                <li>Git/GitHub (Intermediate)</li>
                <li>Maven/Gradle (Intermediate)</li>
                <li>Junit (Beginner)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 자격증 & 수상 섹션 */}
        <section className="section">
          <h2>🏆 자격증</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>📜 자격증</h3>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>
                  <strong>네트워크관리사 2급</strong>
                  <br />
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>한국정보통신자격협회 · 2025년</span>
                </li>
                <li>
                  <strong>SQLD(SQL 개발자)</strong>
                  <br />
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>한국데이터산업진흥원 · 2021년</span>
                </li>
                <li>
                  <strong>정보처리산업기사</strong>
                  <br />
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>한국산업인력공단 · 2015년</span>
                </li>
                <li>
                  <strong>컴퓨터활용능력 2급</strong>
                  <br />
                  <span style={{ color: '#666', fontSize: '0.9rem' }}>대한상공회의소 · 2014년</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 관심사 & 목표 섹션 */}
        <section className="section">
          <h2>🎯 관심사 & 목표</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>💡 관심 분야</h3>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>헥사고날 아키텍처</li>
                <li>마이크로서비스 아키텍처</li>
                <li>클린코드</li>
                <li>TDD</li>
                <li>DDD</li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>🚀 향후 목표</h3>
              <ul style={{ color: '#555', lineHeight: '1.8' }}>
                <li>Tistory 기술 블로그 운영</li>
                <li>Python Advanced 레벨</li>
                <li>AI/ML/DL</li>
                <li>개발자 커뮤니티 활동</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 연락처 정보 */}
        <section className="contact-info">
          <h2>📞 연락처</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            <p>📧 이메일: kimsy5026@gmail.com</p>
            <p>🐱 GitHub: https://github.com/ksuyong</p>
            <p>💼 Blog: https://ksuyong91.tistory.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;