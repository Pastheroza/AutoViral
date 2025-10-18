// components/CreateVideoModal.tsx
import React from 'react';
import { XIcon } from './icons';

interface CreateVideoModalProps {
  onClose: () => void;
}

/**
 * @component CreateVideoModal
 * @description A modal allowing users to create and publish a video for a trend.
 * It includes a form for video upload and a caption.
 */
const CreateVideoModal: React.FC<CreateVideoModalProps> = ({ onClose }) => {

  // Placeholder function for handling video publication
  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const videoFile = formData.get('video-file');
    const caption = formData.get('caption');
    console.log('Publishing video with:', { videoFile, caption });
    // TODO: Replace with an actual API call to the backend.
    // This would involve uploading the file and sending the caption.
    // On success, close the modal.
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30 p-4">
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl p-6 text-[#eaeaea] relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
          <XIcon />
        </button>
        
        <h3 className="text-lg font-bold text-center mb-6">Create Your Own Trend Video</h3>
        
        <form onSubmit={handlePublish} className="space-y-4">
          <div>
            <label htmlFor="video-file" className="block text-sm font-medium text-neutral-400">Upload Video</label>
            <input 
              type="file" 
              name="video-file" 
              id="video-file" 
              accept="video/*"
              required 
              className="mt-1 block w-full text-sm text-neutral-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-600 file:text-white hover:file:bg-green-700 cursor-pointer"
            />
          </div>
          <div>
            <label htmlFor="caption" className="block text-sm font-medium text-neutral-400">Caption</label>
            <textarea
              name="caption"
              id="caption"
              rows={3}
              placeholder="Add a caption, hashtags, etc."
              className="mt-1 block w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
            Publish
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateVideoModal;