import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar'; 
import axios from 'axios';
import banner from '../assets/banner.jpg';
import Highlight from '../components/Highlight'; 
import Destinations from '../components/Destinations'; 
import Footer from '../components/Footer';
import Promos from '../components/Promos'; 
import Categories from '../components/Categories'; 
import Activities from '../components/Activities'; 
import Banner from '../components/Banner'; 

const API_URL = 'https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1';
const API_KEY = '24405e01-fbc1-45a5-9f5a-be13afcd757c';

const LandingPage = () => {
  const [banners, setBanners] = useState([]);
  const [promos, setPromos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/banners`, { headers: { apiKey: API_KEY } })
      .then(response => setBanners(response.data.data))
      .catch(error => console.error('Error fetching banners:', error));

    axios.get(`${API_URL}/promos`, { headers: { apiKey: API_KEY } })
      .then(response => setPromos(response.data.data))
      .catch(error => console.error('Error fetching promos:', error));

    axios.get(`${API_URL}/categories`, { headers: { apiKey: API_KEY } })
      .then(response => setCategories(response.data.data))
      .catch(error => console.error('Error fetching categories:', error));

    axios.get(`${API_URL}/activities`, { headers: { apiKey: API_KEY } })
      .then(response => setActivities(response.data.data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <header className="font-league-spartan h-[680px] bg-cover bg-center text-white flex items-center justify-start relative" 
        style={{ backgroundImage: `url(${banner})` }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blueText via-transparent to-transparent"></div>
        <div className="relative z-10 pl-32 text-left">
          <h1 className="font-semibold text-7xl font-lora">Spend your holiday</h1>
          <p className="mt-10 text-[18px] max-w-lg">
            We offer a variety of travel packages, from budget-friendly adventures to luxury getaways, ensuring an unforgettable experience for all types of travelers and preferences.
          </p>
          <button className="px-6 py-3 mt-6 text-base font-semibold bg-white text-blueText rounded-xl hover:bg-blue-50">
            Explore Now
          </button>
        </div>
      </header>

      <Banner banners={banners} />
      <Destinations />
      <Promos promos={promos} />
      <Categories categories={categories} />
      <Activities activities={activities} />
      <Highlight />
      <Footer />
    </div>
  );
};

export default LandingPage;