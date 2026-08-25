import { useEffect, useRef } from "react";

/**
 * MagicalBackground — Harry Potter-style animated canvas background.
 * Creates floating particles (like golden dust / fireflies),
 * twinkling stars, and a subtle fog/mist layer.
 * Pure CSS + Canvas — no external libraries.
 */
export default function MagicalBackground({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let stars = [];

    function resize() {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    // ── Particle class (golden dust / fireflies) ──
    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = canvas.offsetHeight + Math.random() * 100;
        this.size = Math.random() * 2.5 + 0.5;
        this.speedY = -(Math.random() * 0.4 + 0.1);
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.opacity = 0;
        this.maxOpacity = Math.random() * 0.6 + 0.2;
        this.fadeIn = true;
        this.life = Math.random() * 400 + 200;
        this.age = 0;
        // Gold / warm tones
        const colors = [
          [232, 191, 122],  // gold
          [240, 208, 144],  // light gold
          [188, 194, 255],  // indigo
          [167, 139, 250],  // violet
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      update() {
        this.x += this.speedX + Math.sin(this.age * 0.01) * 0.15;
        this.y += this.speedY;
        this.age++;

        if (this.fadeIn && this.opacity < this.maxOpacity) {
          this.opacity += 0.005;
          if (this.opacity >= this.maxOpacity) this.fadeIn = false;
        }
        if (this.age > this.life * 0.7) {
          this.opacity -= 0.003;
        }
        if (this.opacity <= 0 || this.y < -20) {
          this.reset();
        }
      }
      draw() {
        const [r, g, b] = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0, this.opacity)})`;
        ctx.fill();

        // Glow effect
        if (this.size > 1.2) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${Math.max(0, this.opacity * 0.12)})`;
          ctx.fill();
        }
      }
    }

    // ── Star class (twinkling background stars) ──
    class Star {
      constructor() {
        this.x = Math.random() * canvas.offsetWidth;
        this.y = Math.random() * canvas.offsetHeight;
        this.size = Math.random() * 1.2 + 0.3;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinkleOffset = Math.random() * Math.PI * 2;
        this.baseOpacity = Math.random() * 0.4 + 0.1;
      }
      update(time) {
        this.opacity =
          this.baseOpacity +
          Math.sin(time * this.twinkleSpeed + this.twinkleOffset) *
            this.baseOpacity *
            0.6;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 205, 240, ${Math.max(0, this.opacity)})`;
        ctx.fill();
      }
    }

    function init() {
      resize();
      particles = [];
      stars = [];

      const particleCount = Math.min(50, Math.floor(canvas.offsetWidth / 25));
      for (let i = 0; i < particleCount; i++) {
        const p = new Particle();
        p.y = Math.random() * canvas.offsetHeight; // start scattered
        p.age = Math.random() * 200;
        p.opacity = Math.random() * p.maxOpacity;
        p.fadeIn = false;
        particles.push(p);
      }

      const starCount = Math.min(80, Math.floor(canvas.offsetWidth / 15));
      for (let i = 0; i < starCount; i++) {
        stars.push(new Star());
      }
    }

    let time = 0;
    function animate() {
      time++;
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Draw stars
      for (const star of stars) {
        star.update(time);
        star.draw();
      }

      // Draw particles
      for (const particle of particles) {
        particle.update();
        particle.draw();
      }

      animationId = requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener("resize", () => {
      init();
    });

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
