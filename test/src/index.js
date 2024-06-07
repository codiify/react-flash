import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import ToastProvider from './components/ToastProvider';

// Create the root element
const container = document.getElementById('root');
const root = createRoot(container);

// Render the App component wrapped in ToastProvider
root.render(
    <React.StrictMode>
        <ToastProvider>
            <App />
        </ToastProvider>
    </React.StrictMode>
);
