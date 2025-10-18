import React from 'react';
import { DetailedAnalysis } from '../types';
import { XIcon } from './icons';

interface DetailsModalProps {
  analysis: DetailedAnalysis;
  onClose: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ analysis, onClose }) => {
  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 p-4">
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl p-6 text-[#eaeaea] relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
          <XIcon />
        </button>
        
        <h3 className="text-lg font-bold text-center mb-6">Detailed Analysis</h3>

        <div className="space-y-5">
          <div>
            <h4 className="font-semibold text-green-400">About the Trend</h4>
            <p className="text-neutral-300 mt-1 text-sm leading-relaxed">{analysis.about}</p>
          </div>
          <div>
            <h4 className="font-semibold text-blue-400">Target Audience</h4>
            <p className="text-neutral-300 mt-1 text-sm leading-relaxed">{analysis.audience}</p>
          </div>
          <div>
            <h4 className="font-semibold text-purple-400">Versatility</h4>
            <p className="text-neutral-300 mt-1 text-sm leading-relaxed">{analysis.versatility}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsModal;