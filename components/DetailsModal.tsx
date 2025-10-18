import React from 'react';
import { DetailedAnalysis } from '../types';
import { XIcon } from './icons';

interface DetailsModalProps {
  /** The detailed analysis object containing the content for the modal. */
  analysis: DetailedAnalysis;
  /** A callback function to be invoked when the modal is closed. */
  onClose: () => void;
}

/**
 * @component DetailsModal
 * @description A modal dialog that appears as an overlay to display a detailed breakdown
 * of a trend's analysis, including its nature, target audience, and versatility.
 */
const DetailsModal: React.FC<DetailsModalProps> = ({ analysis, onClose }) => {
  return (
    // Full-screen overlay with a blurred background.
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-20 p-4">
      {/* The main modal container with a subtle fade-in animation. */}
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl p-6 text-[#eaeaea] relative animate-fade-in">
        {/* Close button positioned at the top-right corner. */}
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
          <XIcon />
        </button>
        
        <h3 className="text-lg font-bold text-center mb-6">Detailed Analysis</h3>

        {/* Container for the different sections of the analysis. */}
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
