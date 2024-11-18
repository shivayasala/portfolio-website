import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Alert for AI chatbot
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('aiChatbotAlertShown')) {
    alert("Welcome! There's an AI chatbot at the bottom right to help with the website.");
    localStorage.setItem('aiChatbotAlertShown', 'true');
  }
});
