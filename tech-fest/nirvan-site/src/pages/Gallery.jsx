import { useState, useEffect, useRef, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    src: "/gallery/hackathon_1.jpg",
    alt: "Hackathon - Focus Mode",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    src: "/gallery/hackathon_2.jpg",
    alt: "Hackathon - Teamwork",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 3,
    src: "/gallery/ctf_1.jpg",
    alt: "CTF CyberQuest",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    id: 4,
    src: "/gallery/esport_1.jpg",
    alt: "E-Sports Arena",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    id: 5,
    src: "/gallery/treasure_1.jpg",
    alt: "Treasure Hunt Adventures",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    id: 6,
    src: "/gallery/ctf_2.jpg",
    alt: "CTF Problem Solving",
    span: "md:col-span-1 md:row-span-1",
  },
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const fadeRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    fadeRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const addFadeRef = (el) => {
    if (el && !fadeRefs.current.includes(el)) {
      fadeRefs.current.push(el);
    }
  };

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  }, []);

  const nextImage = useCallback(() => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevImage = useCallback(() => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextImage, prevImage]);

  return (
    <div className="min-h-screen pt-20 pb-24 px-6 max-w-7xl mx-auto">
      {/* ── Page Header ── */}
      <div className="text-center mb-16" ref={addFadeRef}>
        <span className="label-mono text-accent-gold text-xs tracking-[0.15em] mb-4 block fade-up">
          VISUAL ARCHIVES
        </span>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-warm mb-6 fade-up">
          The Gallery
        </h1>
        <p className="font-body text-text-muted max-w-2xl mx-auto text-lg leading-relaxed fade-up">
          Glimpses into the magical intersection of technology and artistry from
          our past iterations.
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent-gold to-transparent mx-auto mt-8 opacity-50 fade-up" />
      </div>

      {/* ── Masonry Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            ref={addFadeRef}
            className={`fade-up relative overflow-hidden rounded-lg group cursor-pointer ${image.span}`}
            style={{ transitionDelay: `${(index % 4) * 0.1}s` }}
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-void/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
              <Maximize2 size={32} className="text-accent-gold mb-3 opacity-80" />
              <span className="font-display text-xl text-text-warm font-medium">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox Modal ── */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-void/95 backdrop-blur-md">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-surface/50 text-text-muted hover:text-text-warm hover:bg-surface transition-colors z-10"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            className="absolute left-6 p-3 rounded-full bg-surface/50 text-text-muted hover:text-text-warm hover:bg-surface transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Current Image */}
          <div className="relative w-full max-w-5xl max-h-[85vh] px-16 flex flex-col items-center justify-center">
            <img
              src={galleryImages[currentImageIndex].src}
              alt={galleryImages[currentImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
            />
            <p className="text-text-muted font-display text-lg mt-4 text-center">
              {galleryImages[currentImageIndex].alt}
            </p>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="absolute right-6 p-3 rounded-full bg-surface/50 text-text-muted hover:text-text-warm hover:bg-surface transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
}
