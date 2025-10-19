import React from 'react';
import { TrendsQuery } from '../services/api';

interface TrendFiltersProps {
  filters: TrendsQuery;
  onFiltersChange: (filters: TrendsQuery) => void;
}

const TrendFilters: React.FC<TrendFiltersProps> = ({ filters, onFiltersChange }) => {
  const updateFilter = (key: keyof TrendsQuery, value: any) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="bg-[#1a1a1a] p-4 mx-4 rounded-lg mb-4">
      <h3 className="text-white text-sm font-bold mb-3">Filters</h3>
      
      <div className="grid grid-cols-2 gap-3">
        {/* Time Filter */}
        <div>
          <label className="text-xs text-gray-400 block mb-1">Time</label>
          <select 
            value={filters.since || ''} 
            onChange={(e) => updateFilter('since', e.target.value || undefined)}
            className="w-full bg-[#2a2a2a] text-white text-xs rounded px-2 py-1 border border-gray-600"
          >
            <option value="">All time</option>
            <option value="30m">Last 30 min</option>
            <option value="1h">Last hour</option>
            <option value="2h">Last 2 hours</option>
            <option value="1d">Last day</option>
            <option value="7d">Last week</option>
          </select>
        </div>

        {/* Status Filter */}
        <div>
          <label className="text-xs text-gray-400 block mb-1">Status</label>
          <select 
            value={filters.status || ''} 
            onChange={(e) => updateFilter('status', e.target.value || undefined)}
            className="w-full bg-[#2a2a2a] text-white text-xs rounded px-2 py-1 border border-gray-600"
          >
            <option value="">All status</option>
            <option value="discovering">🔍 Discovering</option>
            <option value="selected">✅ Selected</option>
            <option value="blocked">🚫 Blocked</option>
            <option value="stopped">⏹️ Stopped</option>
          </select>
        </div>

        {/* Source Filter */}
        <div>
          <label className="text-xs text-gray-400 block mb-1">Source</label>
          <select 
            value={filters.source || ''} 
            onChange={(e) => updateFilter('source', e.target.value || undefined)}
            className="w-full bg-[#2a2a2a] text-white text-xs rounded px-2 py-1 border border-gray-600"
          >
            <option value="">All sources</option>
            <option value="instagram">📷 Instagram</option>
            <option value="x">🐦 X (Twitter)</option>
            <option value="reddit">🤖 Reddit</option>
          </select>
        </div>

        {/* Limit Filter */}
        <div>
          <label className="text-xs text-gray-400 block mb-1">Limit</label>
          <select 
            value={filters.limit || 10} 
            onChange={(e) => updateFilter('limit', parseInt(e.target.value))}
            className="w-full bg-[#2a2a2a] text-white text-xs rounded px-2 py-1 border border-gray-600"
          >
            <option value={5}>5 trends</option>
            <option value={10}>10 trends</option>
            <option value={20}>20 trends</option>
            <option value={50}>50 trends</option>
          </select>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="mt-3 flex flex-wrap gap-2">
        <button
          onClick={() => onFiltersChange({ since: '1h', status: 'discovering', limit: 10 })}
          className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white text-xs rounded transition-colors"
        >
          🔥 Hot Now
        </button>
        <button
          onClick={() => onFiltersChange({ since: '30m', limit: 5 })}
          className="px-2 py-1 bg-orange-600 hover:bg-orange-700 text-white text-xs rounded transition-colors"
        >
          ⚡ Latest
        </button>
        <button
          onClick={() => onFiltersChange({})}
          className="px-2 py-1 bg-gray-600 hover:bg-gray-700 text-white text-xs rounded transition-colors"
        >
          🔄 Clear
        </button>
      </div>
    </div>
  );
};

export default TrendFilters;
