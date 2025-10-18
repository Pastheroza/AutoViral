import React, { useState, useEffect } from 'react';

interface ApiStatusProps {
  apiUrl: string;
}

const ApiStatus: React.FC<ApiStatusProps> = ({ apiUrl }) => {
  const [status, setStatus] = useState<'checking' | 'connected' | 'error'>('checking');
  const [lastUpdate, setLastUpdate] = useState<string>('');

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`${apiUrl}/health`);
        if (response.ok) {
          setStatus('connected');
          setLastUpdate(new Date().toLocaleTimeString());
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000);
    return () => clearInterval(interval);
  }, [apiUrl]);

  const getStatusColor = () => {
    switch (status) {
      case 'connected': return 'bg-green-500';
      case 'error': return 'bg-red-500';
      default: return 'bg-yellow-500';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'connected': return `Live • ${lastUpdate}`;
      case 'error': return 'API Error';
      default: return 'Checking...';
    }
  };

  return (
    <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-xs text-white/70">
      <div className={`w-2 h-2 rounded-full ${getStatusColor()}`}></div>
      <span>{getStatusText()}</span>
    </div>
  );
};

export default ApiStatus;
