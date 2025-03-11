import { useEffect, useRef } from "react";

const ClientSlideshow = ({ speed = 20 }) => {
  const sliderRef = useRef(null);
  let images = [
    "/dt.png",
    "/dpworld.png",
    "/dapster.png",
    "/artofQR.png",
    "/colon-broom.svg",
    "/noodlefactory.webp"
  ];
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const cloneImages = () => {
      const images = slider.querySelectorAll("img");
      images.forEach((img) => {
        const clone = img.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneImages();
    slider.style.display = "flex";
    slider.style.animation = `scroll ${speed}s linear infinite`;
  }, [speed]);

  return ( 
    <div className="overflow-hidden relative w-full h-42 py-12">
      <div
        ref={sliderRef}
        className="flex whitespace-nowrap w-max"
        style={{ whiteSpace: "nowrap" }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide-${index}`}
            className="h-20 w-40 mx-10 object-contain"
          />
        ))}
      </div>
      <style>
        {`
            @keyframes scroll {
              from {
                transform: translateX(0);
              }
              to {
                transform: translateX(-50%);
              }
            }
          `}
      </style>
    </div>
  );
};

export default ClientSlideshow;
