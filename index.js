import { createRoot } from 'https://esm.sh/react-dom/client';
import App from './src/App.jsx'; // Updated extension to .jsx

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(React.createElement(App));
} else {
  console.error('Root element not found');
}

document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('aiChatbotAlertShown')) {
    alert("Welcome! There's an AI chatbot at the bottom right to help with the website.");
    localStorage.setItem('aiChatbotAlertShown', 'true');
  }
});
