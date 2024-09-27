import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import travelDayLogo from '../assets/td-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);  // Menyimpan data user setelah login
  const navigate = useNavigate();

  useEffect(() => {
    // Cek apakah token ada di localStorage, jika ada maka ambil data user
    const token = localStorage.getItem('token');
    console.log('Token yang disimpan:', token);
    if (token) {
      axios.get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', {
        headers: {
          'Authorization': `Bearer ${token}`,
          'apiKey': '24405e01-fbc1-45a5-9f5a-be13afcd757c'  // API KEY dari dibimbing
        }
      }).then((response) => {
        setUser(response.data.data);  // Simpan data user yang didapat dari API
      }).catch((error) => {
        console.error('Error fetching user data:', error);
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('token');  // Hapus token jika tidak valid
          navigate('/login');  // Redirect ke halaman login jika token tidak valid
        }
      });
    }
  }, [navigate]);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogoutClick = () => {
    // Logika logout
    localStorage.removeItem('token');  // Menghapus token dari local storage
    setUser(null);  // Menghapus data user dari state
    navigate('/login');  // Redirect ke halaman login setelah logout
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);  // Fungsi untuk men-toggle menu di mobile view
  };

  return (
    <nav className="shadow-md bg-blueBg font-league-spartan">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto md:px-12 lg:px-20">
        
        {/* Logo */}
        <div>
          <img src={travelDayLogo} alt="Travel Day Logo" className="w-24 h-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden space-x-8 text-lg md:flex text-blueText">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/destinations" className="hover:text-blue-600">Destinations</Link>
          <Link to="/promo" className="hover:text-blue-600">Promo</Link>
          <Link to="/category" className="hover:text-blue-600">Category</Link>
          <Link to="/activity" className="hover:text-blue-600">Activities</Link>
          
          {/* Menu Dashboard hanya tampil jika hanya admin atau ada tokennya */}
          {user?.role === 'admin' && (
            <Link to="/dashboard" className="hover:text-blue-600">Dashboard</Link>
          )}
        </div>

        {/* Login/Profile Button */}
        <div className="items-center hidden space-x-4 md:flex">
          {user ? (
            <>
              <img 
                src={user.profilePictureUrl}  // Menampilkan foto profil jika sudah login
                alt="Profile" 
                className="w-10 h-10 rounded-full"
              />
              <button 
                onClick={handleLogoutClick}
                className="px-4 py-2 text-blue-600 bg-white rounded-full hover:bg-blue-100"
              >
                Logout
              </button>
            </>
          ) : (
            <button 
              onClick={handleLoginClick}
              className="px-4 py-2 text-blue-600 bg-white rounded-full hover:bg-blue-100"
            >
              <i className="mr-2 fa fa-user"></i>
              Log in / Register
            </button>
          )}
        </div>

        {/* Hamburger Menu mobile view */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <i className="text-2xl fa fa-bars text-blueText"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="px-6 py-4 space-y-4 text-lg md:hidden bg-blueBg text-blueText">
          <Link to="/" className="block hover:text-blue-600">Home</Link>
          <Link to="/destinations" className="block hover:text-blue-600">Destinations</Link>
          <Link to="/promo" className="block hover:text-blue-600">Promo</Link>
          <Link to="/category" className="block hover:text-blue-600">Category</Link>
          <Link to="/activity" className="block hover:text-blue-600">Activities</Link>
          
          {/* Menu Dashboard untuk admin */}
          {user?.role === 'admin' && (
            <Link to="/dashboard" className="block hover:text-blue-600">Dashboard</Link>
          )}

          {/* Button Login atau Logout sesuai dengan kondisi user */}
          {user ? (
            <div className="flex items-center space-x-4">
              <img 
                src={user.profilePictureUrl} 
                alt="Profile" 
                className="w-10 h-10 rounded-full"
              />
              <button 
                onClick={handleLogoutClick}
                className="flex items-center justify-center w-full px-4 py-2 text-blue-600 bg-white rounded-full hover:bg-blue-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={handleLoginClick}
              className="flex items-center justify-center w-full px-4 py-2 text-blue-600 bg-white rounded-full hover:bg-blue-100"
            >
              <i className="fa fa-user"></i>
              <span className="ml-2">Log in / Register</span>
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;