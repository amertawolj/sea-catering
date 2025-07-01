import { useState } from 'react';
import supabase from '../helper/supabaseClient';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
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

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match");
      setLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.fullName,
          }
        }
      });

      if (error) {
        setError(error.message);
      } else {
        console.log('Sign up successful:', data);
      }
    } catch (err) {
      setError('An unexpected error occurred');
    } finally {
      setLoading(false);
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
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Sign Up</h1>
  
        {error && (
          <div className="mb-3 p-2 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}
  
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent text-sm"
              required
              disabled={loading}
            />
          </div>
  
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
              placeholder="Min. 8 Characters"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent placeholder-gray-400 text-sm"
              minLength="8"
              required
              disabled={loading}
            />
          </div>
  
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Min. 8 Characters"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#41521F] focus:border-transparent placeholder-gray-400 text-sm"
              minLength="8"
              required
              disabled={loading}
            />
          </div>
  
          <button
            onClick={handleSignUp}
            disabled={loading}
            className="w-full bg-[#41521F] text-white py-2.5 px-4 rounded-full font-medium hover:bg-[#2d3916] transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
  
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-sm mb-2">Already Have an Account?</p>
          <button
            onClick={() => {
              console.log('Navigate to Sign In');
            }}
            className="w-full bg-white text-[#41521F] py-2.5 px-4 rounded-full font-medium border-2 border-[#41521F] hover:bg-[#41521F] hover:text-white transition-colors duration-200 text-sm"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}