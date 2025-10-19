import React, { useState } from 'react';
import { api } from '../services/api';

interface TrendActionsProps {
  trendId: string;
  keyword: string;
  onTrendStopped?: () => void;
}

const TrendActions: React.FC<TrendActionsProps> = ({ trendId, keyword, onTrendStopped }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleStopTrend = async () => {
    if (!confirm(`Stop trend "${keyword}"?`)) return;
    
    setLoading(true);
    try {
      await api.stopTrend(trendId);
      setMessage('Trend stopped');
      onTrendStopped?.();
    } catch (error) {
      setMessage('Failed to stop trend');
    } finally {
      setLoading(false);
    }
  };

  const handleStopKeyword = async () => {
    if (!confirm(`Stop ALL trends with keyword "${keyword}"?`)) return;
    
    setLoading(true);
    try {
      const result = await api.stopKeyword(keyword);
      setMessage(result.message);
      onTrendStopped?.();
    } catch (error) {
      setMessage('Failed to stop keyword');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex space-x-2 mt-2">
      <button
        onClick={handleStopTrend}
        disabled={loading}
        className="px-2 py-1 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white text-xs rounded transition-colors"
      >
        {loading ? '⏳' : '⏹️'} Stop
      </button>
      
      <button
        onClick={handleStopKeyword}
        disabled={loading}
        className="px-2 py-1 bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 text-white text-xs rounded transition-colors"
      >
        {loading ? '⏳' : '🚫'} Stop All
      </button>

      {message && (
        <span className="text-xs text-yellow-400 self-center">
          {message}
        </span>
      )}
    </div>
  );
};

export default TrendActions;
