// components/LoginModal.tsx
import React from 'react';
import { XIcon } from './icons';

interface LoginModalProps {
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

/**
 * @component LoginModal
 * @description A modal for user login. Contains form fields and a submit button.
 * Prepared for future backend integration.
 */
const LoginModal: React.FC<LoginModalProps> = ({ onClose, onSwitchToSignUp }) => {
  
  // Placeholder function for handling login submission
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log('Logging in with:', { email, password });
    // TODO: Replace with actual API call to the backend for login.
    // On success, you would typically close the modal and update user state.
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30 p-4">
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl p-6 text-[#eaeaea] relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
          <XIcon />
        </button>
        
        <h3 className="text-lg font-bold text-center mb-6">Log In</h3>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-400">Email</label>
            <input type="email" name="email" id="email" required className="mt-1 block w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-neutral-400">Password</label>
            <input type="password" name="password" id="password" required className="mt-1 block w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
            Log In
          </button>
        </form>
        
        <p className="text-center text-neutral-500 text-xs mt-4">
          Don't have an account?{' '}
          <button onClick={onSwitchToSignUp} className="font-semibold text-green-500 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;