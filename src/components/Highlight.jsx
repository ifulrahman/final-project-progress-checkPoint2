import React from 'react';

const Highlight = () => {
  return (
    <div className="absolute top-[700px] w-full z-20 flex justify-center font-league-spartan">
      <div className="bg-white shadow-lg p-9 rounded-lg flex justify-between items-center w-[85%] max-w-4xl space-x-4">
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">Destination</span>
          <span className="text-[17px] text-mainBlue">Where are you going?</span>
        </div>
        <div className="h-12 border-l border-gray-300"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">Start Dates</span>
          <span className="text-[17px] text-mainBlue">Add dates</span>
        </div>
        <div className="h-12 border-l border-gray-300"></div>
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">End Dates</span>
          <span className="text-[17px] text-mainBlue">Add dates</span>
        </div>
        <div className="h-12 border-l border-gray-300"></div> 
        <div className="flex flex-col items-center text-center">
          <span className="text-[17px] font-semibold">Travellers</span>
          <span className="text-[17px] text-mainBlue">Who is traveling with you?</span>
        </div>
      </div>
    </div>
  );
};

export default Highlight;