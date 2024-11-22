import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './src/App3'; // After renaming App3.jsx to App3.js

// Create the root element
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Render the App component
root.render(<App />);

// Alert for AI chatbot
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('aiChatbotAlertShown')) {
    alert("Welcome! There's an AI chatbot at the bottom right to help with the website.");
    localStorage.setItem('aiChatbotAlertShown', 'true');
  }
});
