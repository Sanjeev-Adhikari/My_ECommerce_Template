import { useState, useEffect } from "react";
import banner1 from '../../../images/banner1.png';
import banner2 from '../../../images/banner1.png';
import banner3 from '../../../images/banner1.png';

const banners = [
  { id: 1, imageSrc: banner1 , alt: "Banner 1" },
  { id: 2, imageSrc: banner2, alt: "Banner 2" },
  { id: 3, imageSrc: banner3, alt: "Banner 3" },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000); // Change banner every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <section className="relative w-full h-96 overflow-hidden bg-gray-300 mt-10">
      <div 
     
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="min-w-full flex justify-center items-center h-full">
            {/* Make sure the image is centered and maintains aspect ratio */}
            <img 
              src={banner.imageSrc} 
              alt={banner.alt} 
              className="w-auto h-full object-contain" // Adjusts the image size
            />
          </div>
        ))}
      </div>
      {/* Optional Previous/Next Controls */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}
      >
        Prev
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}
      >
        Next
      </button>
    </section>
  );
};

export default HeroCarousel;
