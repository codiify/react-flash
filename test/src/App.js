import React from 'react';
import { useToast } from './components/ToastProvider';

const App = () => {
  const { addToast } = useToast();

  const showToast = () => {
    addToast('success', 'This is a success message!', {
      timeout: 3000,
      animationSpeed: '0.5s',
      colorful: true,
      icon: true,
      position: 'top-right',
      progressBar: true,
      progressBarColor: '#00FF00',
    });
  };

  return (
      <div>
        <button onClick={showToast}>Show Toast</button>
      </div>
  );
};

export default App;
