import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Initialize theme to dark by default
const initializeTheme = () => {
  // Check if theme is already set in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  if (!savedTheme) {
    // If no theme is saved, set to dark theme
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (savedTheme === 'dark') {
    // If saved theme is dark, apply it
    document.documentElement.classList.add('dark');
  } else {
    // If saved theme is light, apply it
    document.documentElement.classList.remove('dark');
  }
};

// Initialize theme before rendering
initializeTheme();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
