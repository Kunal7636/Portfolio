import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Top Background Image Section */}
            <div 
                className="background-top"
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + '/background-top.jpg'})`,
                }}
            ></div>
            
            {/* Content Section */}
            <div className="background-bottom">
                <div className="intro-section">
                    {/* Avatar */}
                    <div className="intro-avatar">
                        <img src="/avatar.png" alt="Kunal Kapoor Full-body Avatar" className="avatar-full-body" />
                    </div>

                    {/* Introductory Text */}
                    <div className="intro-text">
                        <h1>Hi, I'm Kunal Kapoor.</h1>
                        <h2>Software Developer dedicated to creating efficient, scalable applications and optimizing system performance.</h2>
                        <p>With expertise in both back-end and front-end technologies, I build seamless, high-performance systems that drive business growth.</p>
                        <a href="https://github.com/Kunal7636" className="cta-button">View My Work</a>
                    </div>
                </div>

                {/* What I Bring Section */}
                <div className="what-i-bring">
                    <div className="strength-card">
                        <h3>Scalable Solutions Architect</h3>
                        <p>Proven ability to architect scalable solutions in fast-paced environments.</p>
                    </div>
                    <div className="strength-card">
                        <h3>Performance Optimization Expert</h3>
                        <p>Expertise in performance optimization for applications running at scale.</p>
                    </div>
                    <div className="strength-card">
                        <h3>Clean Code Advocate</h3>
                        <p>Strong focus on clean code, testing, and deployment automation.</p>
                    </div>
                    <div className="strength-card">
                        <h3>Versatile Technologist</h3>
                        <p>Hands-on experience with a broad range of programming languages, frameworks, and cloud platforms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
