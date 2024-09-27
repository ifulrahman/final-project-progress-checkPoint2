import React from 'react';
import australia from '../assets/australia.jpg';
import makkah from '../assets/makkah.jpg';
import mandalika from '../assets/mandalika.jpg';

const Destinations = () => {
  return (
    <section className="p-12 font-league-spartan bg-blueBg pt-18 pb-28">
      <h2 className="text-[85px] font-extralight font-lora mb-[-30px] text-left text-blueText text-opacity-10 pl-24">
        Explore
      </h2>
      <h2 className="text-[45px] font-lora font-semibold mb-8 text-left text-blueText pl-24">
        Our Destinations
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 px-24 h-[480px]">
        {/* Australia Card */}
        <div className="relative overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl">
          <img src={australia} alt="Australia" className="object-cover w-full h-64" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left bg-white top-customTop rounded-t-3xl">
            <h3 className="flex items-center justify-between text-2xl font-medium text-blueText">
              Australia
              <div className="flex space-x-1">
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
              </div>
            </h3>
            <p className="mt-4 text-gray-500">
              We offer a variety of travel packages, from budget-friendly adventures to luxury getaways.
            </p>
            <div className="flex items-center justify-between mt-6">
              <button className="px-4 py-2 text-white transition rounded-lg bg-mainBlue hover:bg-blue-700">
                Explore Now
              </button>
              <span className="text-lg text-mainBlue">IDR 3.998.000<span className='text-[11px] text-black font-medium'>  PER TOUR</span></span>
            </div>
          </div>
        </div>

        {/* Mandalika Card */}
        <div className="relative overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl">
          <img src={mandalika} alt="Mandalika" className="object-cover w-full h-64" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left bg-white top-customTop rounded-t-3xl">
            <h3 className="flex items-center justify-between text-2xl font-medium text-blueText">
              Mandalika
              <div className="flex space-x-1">
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
              </div>
            </h3>
            <p className="mt-4 text-gray-500">
              Experience the wonders of Mandalika with our exclusive tour packages.
            </p>
            <div className="flex items-center justify-between mt-6">
              <button className="px-4 py-2 text-white transition rounded-lg bg-mainBlue hover:bg-blue-700">
                Explore Now
              </button>
              <span className="text-lg text-mainBlue">IDR 500.899<span className='text-[11px] text-black font-medium'>  PER TOUR</span></span>
            </div>
          </div>
        </div>

        {/* Makkah Card */}
        <div className="relative overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-3xl hover:shadow-2xl">
          <img src={makkah} alt="Makkah" className="object-cover w-full h-64" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left bg-white top-customTop rounded-t-3xl">
            <h3 className="flex items-center justify-between text-2xl font-medium text-blueText">
              Makkah
              <div className="flex space-x-1">
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
                <i className="text-sm text-yellow-400 fa fa-star" aria-hidden="true"></i>
              </div>
            </h3>
            <p className="mt-4 text-gray-500">
              Experience a spiritual journey to Makkah with our premium packages.
            </p>
            <div className="flex items-center justify-between mt-6">
              <button className="px-4 py-2 text-white transition rounded-lg bg-mainBlue hover:bg-blue-700">
                Explore Now
              </button>
              <span className="text-lg text-mainBlue">IDR 12.750.999<span className='text-[11px] text-black font-medium'>  PER TOUR</span></span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Destinations;