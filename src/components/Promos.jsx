import React from 'react';

const Promos = ({ promos }) => {
  return (
    <section className="p-12 font-league-spartan bg-white pt-18 pb-28">
      <h2 className="text-[85px] font-extralight font-lora mb-[-30px] text-left text-blueText text-opacity-10 pl-24">
        Promos
      </h2>
      <h2 className="text-[45px] font-lora font-semibold mb-8 text-left text-blueText pl-24">
        Current Promos
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-24">
        {promos.map((promo, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <img src={promo.imageUrl} alt={promo.title} className="w-full h-64 object-cover" />
            <h3 className="mt-4 text-xl">{promo.title}</h3>
            <p>{promo.description}</p>
            <p>{promo.terms_condition}</p>
            <p>{promo.promo_code}</p>
            <p>{promo.promo_discount_price}</p>
            <p>{promo.minimum_claim_price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promos;