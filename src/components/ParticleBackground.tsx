import { useEffect } from "react";
import Particles from "@tsparticles/react";
import { loadAll } from "@tsparticles/all";
import { tsParticles } from "@tsparticles/engine";

export default function ParticleBackground() {
  useEffect(() => {
    loadAll(tsParticles);
  }, []);

  return (
    <Particles
      id="tsparticles"
      className="fixed inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#121212",
          },
          image:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQ...')", // truncated for clarity
          opacity: 0.8,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#1e90ff", "#ff7700", "#44cc44", "#ffffff"],
          },
          links: {
            color: "#1e90ff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: true,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              width: 800,
              height: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}