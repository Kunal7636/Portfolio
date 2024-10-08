// import React from 'react';
// import Navbar from '../components/Navbar/Navbar';
// import Introduction from '../components/Introduction/Introduction';

// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Introduction />
//       {/* You can add more sections like Experience, Projects, Education here */}
//     </div>
//   );
// };

// export default Home;
import React from 'react';

const Home = () => {
  const containerStyle = {
    height: '100vh', // Full viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #1e3a8a, #60a5fa)', // Blue gradient similar to pink shade
    color: '#fff',
    textAlign: 'center',
    fontFamily: "'Poppins', sans-serif",
    padding: '0 20px',
  };

  const messageStyle = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '20px',
    animation: 'fadeIn 2s ease-in-out',
  };

  const subMessageStyle = {
    fontSize: '24px',
    animation: 'slideIn 2s ease-in-out',
  };

  const keyframesStyle = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes slideIn {
      from { transform: translateY(50px); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{keyframesStyle}</style> {/* Inline keyframe animations */}
      <p style={messageStyle}>Coming Soon!</p>
      <p style={subMessageStyle}>Kunal is creating something exciting for you. Stay tuned!</p>
    </div>
  );
};

export default Home;
