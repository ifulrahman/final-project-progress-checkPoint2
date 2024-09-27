import React from 'react';

const Activities = ({ activities }) => {
  return (
    <section className="p-12 font-league-spartan bg-white pt-18 pb-28">
      <h2 className="text-[85px] font-extralight font-lora mb-[-30px] text-left text-blueText text-opacity-10 pl-24">
        Activities
      </h2>
      <h2 className="text-[45px] font-lora font-semibold mb-8 text-left text-blueText pl-24">
        Activities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-24">
        {activities.map((activity, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img src={activity.imageUrls[0]} alt={activity.title} className="w-full h-64 object-cover" />
            <h3 className="mt-4 text-xl">{activity.title}</h3>
            <p>{activity.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;