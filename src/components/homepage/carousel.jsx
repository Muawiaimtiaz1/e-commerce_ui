import { useState, useEffect } from "react";

export function Carousel(props) {
  
  const images = props.carousel_images;
  
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  const handleClick = (i) => {
    if (i === active) return;
    setPrev(active);
    setActive(i);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(active);
      setActive((prevActive) => (prevActive + 1) % images.length);
    }, 5000); // change every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [active, images.length]);

  return (
    <div className="relative w-full">
      {/* Image Container */}
      <div className="w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="w-full h-full  object-cover flex-shrink-0  "
            />
          ))}
        </div>
      </div>

      {/* Right-side Buttons */}
      <div className="flex flex-col lg:gap-4 gap-2 absolute top-1/2 right-0 p-0 font-thin text-sm items-end ">
        {images.map((img, i) => {
          let translateClass = "";

          if (i === active) translateClass = "-translate-x-5";
          else if (i === prev) translateClass = "";

          return (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className={`flex items-center gap-y-7 text-black  transition-all duration-700 ease-in-out ${translateClass}`}
              style={{ padding: 0 }}
            >
              {/* Number */}
              <span className="w-[30px] text-black font-light tracking-tight">
                0{i + 1}
              </span>

              {/* Line */}
              <div className="h-[2px] bg-white overflow-hidden">
                <div
                  className={`h-full bg-black transition-all duration-700 ease-in-out ${
                    i === active ? "w-[60px]" : "w-0"
                  }`}
                ></div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}