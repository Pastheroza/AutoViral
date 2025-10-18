// components/SignUpModal.tsx
import React from 'react';
import { XIcon } from './icons';

interface SignUpModalProps {
  onClose: () => void;
  onSwitchToLogin: () => void;
}

/**
 * @component SignUpModal
 * @description A modal for user registration. Contains form fields for creating a new account.
 * Prepared for future backend integration.
 */
const SignUpModal: React.FC<SignUpModalProps> = ({ onClose, onSwitchToLogin }) => {

  // Placeholder function for handling sign-up submission
  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm-password');
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    console.log('Signing up with:', { email, password });
    // TODO: Replace with actual API call to the backend for registration.
    // On success, you might automatically log the user in or switch to the login view.
    onClose();
  };

  return (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-30 p-4">
      <div className="bg-[#1a1a1a] w-full max-w-md rounded-2xl p-6 text-[#eaeaea] relative animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-neutral-500 hover:text-white">
          <XIcon />
        </button>
        
        <h3 className="text-lg font-bold text-center mb-6">Sign Up</h3>
        
        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="email-signup" className="block text-sm font-medium text-neutral-400">Email</label>
            <input type="email" name="email" id="email-signup" required className="mt-1 block w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label htmlFor="password-signup" className="block text-sm font-medium text-neutral-400">Password</label>
            <input type="password" name="password" id="password-signup" required className="mt-1 block w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label htmlFor="confirm-password-signup" className="block text-sm font-medium text-neutral-400">Confirm Password</label>
            <input type="password" name="confirm-password" id="confirm-password-signup" required className="mt-1 block w-full bg-neutral-800 border border-neutral-700 rounded-md p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-green-500" />
          </div>
          <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition-colors">
            Create Account
          </button>
        </form>
        
        <p className="text-center text-neutral-500 text-xs mt-4">
          Already have an account?{' '}
          <button onClick={onSwitchToLogin} className="font-semibold text-green-500 hover:underline">
            Log In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUpModal;