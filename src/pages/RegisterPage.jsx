import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash, FaEnvelope, FaLock, FaPhone, FaUser } from 'react-icons/fa'; // Font Awesome icons
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import tdLogo from '../assets/td-logo.png'; 
import nusaPenida from '../assets/nusa-penida.jpg'; 

const RegisterPage = () => {
  const [details, setDetails] = useState({ name: '', email: '', password: '', role: 'user', confirmPassword: '', profilePicture: null });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onChange = (e) => {
    if (e.target.name === 'profilePicture') {
      setDetails({ ...details, profilePicture: e.target.files[0] });
    } else {
      setDetails({ ...details, [e.target.name]: e.target.value });
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await axios.post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data.url;
    } catch (error) {
      console.error('Image upload failed:', error);
      throw error;
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (details.password !== details.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      const profilePictureUrl = await uploadImage(details.profilePicture);
      const userData = await register({ ...details, profilePicture: profilePictureUrl });
      dispatch(loginSuccess(userData));
      toast.success('Register successful');
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Register failed:', error);
      toast.error('Register failed');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex max-h-screen min-h-screen overflow-hidden font-league-spartan">
      {/* Form (50%) */}
      <div className="flex flex-col justify-center w-full p-8 bg-white md:w-1/2">
        <div className="flex justify-center mb-6">
          <img src={tdLogo} alt="Travel Day Logo" className="h-12" />
        </div>
        <h1 className="mb-4 text-3xl font-bold text-center text-mainBlue">Sign Up</h1>
        <p className="mb-8 text-center text-gray-500">Sign up to enjoy the travel day</p>
        <form onSubmit={onSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative max-w-md mx-auto">
            <FaEnvelope className="absolute text-gray-400 left-2 top-3" />
            <input
              type="email"
              name="email"
              value={details.email}
              onChange={onChange}
              placeholder="Email"
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:border-mainBlue"
              required
            />
          </div>
          
          {/* Name */}
          <div className="relative max-w-md mx-auto">
            <FaUser className="absolute text-gray-400 left-2 top-3" />
            <input
              type="text"
              name="name"
              value={details.name}
              onChange={onChange}
              placeholder="Name"
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:border-mainBlue"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="relative max-w-md mx-auto">
            <FaPhone className="absolute text-gray-400 left-2 top-3" />
            <input
              type="text"
              name="phoneNumber"
              value={details.phoneNumber}
              onChange={onChange}
              placeholder="Phone Number"
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:border-mainBlue"
              required
            />
          </div>

          {/* Password */}
          <div className="relative max-w-md mx-auto">
            <FaLock className="absolute text-gray-400 left-2 top-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={details.password}
              onChange={onChange}
              placeholder="Password"
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:border-mainBlue"
              required
            />
            <div onClick={togglePasswordVisibility} className="absolute cursor-pointer right-2 top-3">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Confirm Password */}
          <div className="relative max-w-md mx-auto">
            <FaLock className="absolute text-gray-400 left-2 top-3" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="confirmPassword"
              value={details.confirmPassword}
              onChange={onChange}
              placeholder="Confirm Password"
              className="w-full p-2 pl-10 border border-gray-300 rounded focus:border-mainBlue"
              required
            />
            <div onClick={togglePasswordVisibility} className="absolute cursor-pointer right-2 top-3">
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Role Dropdown */}
          <div className="max-w-md mx-auto">
            <select
              name="role"
              value={details.role}
              onChange={onChange}
              className="w-full p-2 border border-gray-300 rounded focus:border-mainBlue"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Profile Picture Upload */}
          <div className="max-w-md mx-auto">
            <label htmlFor="profilePicture" className="block mb-2 text-gray-500">Profile Picture</label>
            <input
              type="file"
              name="profilePicture"
              onChange={onChange}
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded focus:border-mainBlue"
            />
          </div>

          {/* Submit Button */}
          <div className="max-w-xs mx-auto">
            <button
              type="submit"
              className={`w-full font-bold bg-mainBlue text-white py-2 px-4 rounded ${loading && 'opacity-50 cursor-not-allowed'}`}
              disabled={loading}
            >
              {loading ? 'Loading...' : 'SIGN UP'}
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Already have an account?{' '}
          <a href="/login" className="text-mainBlue">Sign in</a>
        </p>
        <ToastContainer />
      </div>
      
      {/* Image Section with Text Overlay */}
      <div className="relative hidden w-1/2 md:block">
        <img src={nusaPenida} alt="Nusa Penida" className="object-cover w-full h-full" />
        
        {/* Text Overlay */}
        <div className="absolute flex items-center justify-center w-full text-white top-32">
          <div className="text-center">
            <h1 className="text-6xl font-bold">TRAVEL DAY</h1>
            <p className="mt-4 text-lg">Discover the world's wonders and create memories that transcend time. <br />Let every journey inspire your soul, as you embark on adventures that shape <br />who you are and where you’ll go. Travel Day <br />takes you beyond the ordinary, into the extraordinary</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;