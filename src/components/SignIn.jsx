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
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Sign In</h1>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent"
              required
              disabled={loading}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent"
              required
              disabled={loading}
            />
          </div>
          
          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-[#41521F] hover:underline"
              disabled={loading}
            >
              Forgot Password?
            </button>
          </div>
          
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="w-full bg-[#41521F] text-white py-3 px-4 rounded-full font-medium hover:bg-[#2d3916] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-500 mb-4">Don't Have an Account Yet?</p>
          <button
            onClick={() => {
              if (props.onSwitchToSignUp) {
                props.onSwitchToSignUp();
              }
            }}
            className="w-full bg-white text-[#41521F] py-3 px-4 rounded-full font-medium border-2 border-[#41521F] hover:bg-[#41521F] hover:text-white transition-colors duration-200"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

