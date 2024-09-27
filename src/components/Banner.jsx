import React from 'react';
import Slider from "react-slick";

const Banner = ({ banners }) => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 500,
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="p-12 font-league-spartan bg-white pt-36 pb-28">
      <h2 className="text-[85px] font-extralight font-lora mb-[-30px] text-left text-blueText text-opacity-10 pl-24">
        Banners
      </h2>
      <h2 className="text-[45px] font-lora font-semibold mb-8 text-left text-blueText pl-24">
        Featured Banners
      </h2>

      <div className="px-24">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <div className="rounded-lg">
                <img src={banner.imageUrl} alt={banner.name} className="w-full h-80 object-cover rounded-lg" />
                <h3 className="mt-4 text-xl">{banner.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Banner;