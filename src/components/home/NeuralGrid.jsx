import { useEffect, useState, useMemo, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const T_COLORS = {
  palette: ["#39FF14", "#FF073A", "#00FFFF", "#FFDF00", "#FF007F", "#BF00FF"],
  gold: "#FFD700",
};

function getWidthConfig(w) {
  if (w < 480)
    return { particles: 10, linkDistance: 100, emitterQty: 5, maxSize: 2, maxParticleSize: 1.2 };
  if (w < 768)
    return { particles: 30, linkDistance: 120, emitterQty: 8, maxSize: 2.5, maxParticleSize: 1.5 };
  if (w < 1024)
    return { particles: 50, linkDistance: 150, emitterQty: 11, maxSize: 3, maxParticleSize: 2 };
  if (w < 1440)
    return { particles: 70, linkDistance: 180, emitterQty: 10, maxSize: 4, maxParticleSize: 2.5 };
  return { particles: 90, linkDistance: 200, emitterQty: 10, maxSize: 4.5, maxParticleSize: 3 };
}

function toBreakpoint(w) {
  if (w < 480) return 480;
  if (w < 768) return 768;
  if (w < 1024) return 1024;
  if (w < 1440) return 1440;
  return Infinity;
}

const reducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function NeuralGrid({ opacity = 1.0 }) {
  const [init, setInit] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [width, setWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1440,
  );
  const containerRef = useRef(null);

  useEffect(() => {
    if (reducedMotion) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0 },
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const onResize = () => {
      const w = window.innerWidth;
      setWidth((prev) => (toBreakpoint(prev) !== toBreakpoint(w) ? w : prev));
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const particlesOptions = useMemo(() => {
    const { particles: particleCount, linkDistance, emitterQty, maxSize, maxParticleSize } =
      getWidthConfig(width);
    const isMobile = width < 768;

    return {
      fullScreen: { enable: false },
      fpsLimit: 30,
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: { enable: !isMobile, mode: "attract" },
          onClick: { enable: false },
        },
        modes: {
          attract: { distance: 150, factor: 2, speed: 0.5 },
        },
      },
      emitters: [
        {
          direction: "random",
          rate: { quantity: emitterQty, delay: 5 },
          size: { width: 100, height: 100, mode: "percent" },
          position: { x: 50, y: 50 },
          particles: {
            color: { value: T_COLORS.gold },
            move: { speed: 8, random: true, outModes: "destroy" },
            size: { value: { min: 1, max: maxSize } },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 0,
                sync: true,
                startValue: "max",
                destroy: "min",
              },
            },
          },
        },
      ],
      particles: {
        color: { value: T_COLORS.palette },
        links: {
          color: "random",
          distance: linkDistance,
          enable: true,
          frequency: 0.3,
          opacity: 0.5,
          width: 1,
        },
        move: {
          enable: true,
          speed: { min: 0.05, max: 0.15 },
          direction: "none",
          outModes: { default: "out" },
        },
        number: { value: particleCount },
        opacity: {
          value: { min: 0.3, max: 0.7 },
          animation: { enable: true, speed: 0.4, minimumValue: 0.2, sync: false },
        },
        size: { value: { min: 0.8, max: maxParticleSize } },
      },
      detectRetina: true,
    };
  }, [width]);

  if (reducedMotion) return null;

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none",
        opacity,
      }}
    >
      {init && isVisible && (
        <Particles
          id="tsparticles_bg"
          options={particlesOptions}
          style={{ width: "100%", height: "100%" }}
        />
      )}
    </div>
  );
}
