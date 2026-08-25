import { useState, useEffect } from "react";

const images = [
  "/backgrounds/screen.png",
  "/backgrounds/screen (2).png",
  "/backgrounds/screen (3).png",
  "/backgrounds/screen (4).png",
];

export default function ImageSlideshow({ className = "" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {images.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            idx === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={src}
            alt="Nirvana Design"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-void/30 mix-blend-multiply" />
    </div>
  );
}
