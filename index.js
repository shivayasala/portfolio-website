import { createRoot } from 'react-dom/client';
import './Appcss';
import App from './src/App'; // Ensure this path is correct

// Create the root element
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);

  // Render the App component
  root.render(<App />);
} else {
  console.error('Root element not found');
}

// Alert for AI chatbot
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('aiChatbotAlertShown')) {
    alert("Welcome! There's an AI chatbot at the bottom right to help with the website.");
    localStorage.setItem('aiChatbotAlertShown', 'true');
  }
});
