import React, { useState, useEffect } from 'react';
import Images from '../../../assets/images/index';

const slidesData = [
  {
    id: 1,
    imageSrc: Images.onboardingscreenOne,
    headline: 'Manage Your Hiring Process Effortlessly',
    subtext: 'Post Jobs, review candidates, schedule interviews and create course all in one place.',
  },
  {
    id: 2,
    imageSrc: Images.onboardingscreentwo,
    headline: 'Turn Knowledge into Impact',
    subtext: 'Share your expertise with learners worldwide.',
  },
];

const OnboardingScreen = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalTime = 5500; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevIndex) => (prevIndex + 1) % slidesData.length);
    }, intervalTime);

    return () => clearTimeout(timer);
  }, [currentSlide, intervalTime]);

  const slide = slidesData[currentSlide];

  return (
    <div
      className="bg-black text-white p-0 overflow-hidden flex flex-col justify-between items-center "
      style={{
        width: '449px',
        height: '418px',
        opacity: 1,
      }}
    >
      
      <img
        src={slide.imageSrc}
        alt={`Slide ${slide.id}`}
        className="w-[308px] h-[272px] object-contain mt-4 rounded-xl shadow-lg"
      />

      
      <div className="flex flex-col items-center text-center mb-4">
        <h2
          className="transition-opacity duration-1000 text-center text-white font-[Urbanist] font-bold"
          style={{
            width: '449px',
            height: '29px',
            fontSize: '24px',
            lineHeight: '100%',
            letterSpacing: '-0.02em',
            color: '#FFFFFF',
          }}
        >
          {slide.headline}
        </h2>

        <p
          className="transition-opacity duration-1000 text-center text-gray-400 font-[Urbanist] mt-2"
          style={{
            width: '449px',
            fontWeight: 400,
            fontSize: '16px',
            lineHeight: '100%',
            color: '#B3B3B3',
          }}
        >
          {slide.subtext}
        </p>
      </div>

      
      <div className="flex justify-center w-full mb-4 gap-[8px] ">
        {slidesData.map((_, index) => (
          <div
            key={index}
            className="transition-all duration-300"
            style={{
              width: '32px',
              height: '5px',
              borderRadius: '43px',
              backgroundColor: currentSlide === index ? '#168DE1' : '#4D4D4D',
             
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default OnboardingScreen;
