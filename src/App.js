import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App" data-testid="app-container" >
      <Home />
      <Footer /> 
      {/* If you have additional pages, you can set up routing here */}
    </div>
  );
}

export default App;
