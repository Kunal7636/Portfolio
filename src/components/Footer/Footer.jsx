import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024 Kunal Kapoor. All Rights Reserved.</p>
                <p>Contact: 03kunalkapoor@gmail.com</p>
                <p>Follow me: 
                    <a href="https://www.linkedin.com/in/kunalkapoor03/" target="_blank" rel="noopener noreferrer"> LinkedIn</a> | 
                    <a href="https://github.com/Kunal7636" target="_blank" rel="noopener noreferrer"> GitHub</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;