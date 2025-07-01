import { useState } from 'react';
import supabase from '../helper/supabaseClient';
import SignUp from '../components/SignUp';


export default function SignIn(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (error) setError(null);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) {
        setError(error.message);
      } else {
        console.log('Sign in successful:', data);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!formData.email) {
      setError('Please enter your email address first');
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(formData.email);
      if (error) {
        setError(error.message);
      } else {
        alert('Password reset email sent! Check your inbox.');
      }
    } catch (err) {
      setError('Failed to send reset email');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {props.onClose && (
          <button
            onClick={props.onClose}
            className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl font-bold"
          >
            ×
          </button>
        )}
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign In</h1>
  
        {error && (
          <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
  
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent text-sm"
              required
              disabled={loading}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent text-sm"
              required
              disabled={loading}
            />
          </div>
  
          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-xs text-[#41521F] hover:underline"
              disabled={loading}
            >
              Forgot Password?
            </button>
          </div>
  
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-[#41521F] text-white py-2.5 px-4 rounded-full font-medium hover:bg-[#2d3916] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>
  
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm mb-2">Don't Have an Account Yet?</p>
          <button
            onClick={() => {
              if (props.onSwitchToSignUp) {
                props.onSwitchToSignUp();
              }
            }}
            className="w-full bg-white text-[#41521F] py-2.5 px-4 rounded-full font-medium border-2 border-[#41521F] hover:bg-[#41521F] hover:text-white transition-colors duration-200 text-sm"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

