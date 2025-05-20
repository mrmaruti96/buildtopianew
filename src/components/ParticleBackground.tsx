import { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { ISourceOptions, Engine } from "tsparticles-engine";

export default function ParticleBackground() {
  const [engine, setEngine] = useState<Engine | null>(null);

  useEffect(() => {
    async function initParticles(engineInstance: Engine) {
      await loadFull(engineInstance);
      setEngine(engineInstance);
    }
    // We won't call initParticles here but via the particles init callback
  }, []);

  const options: ISourceOptions = {
    background: {
      color: "#121212",
      image:
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMUUwRjdGODQzOTExMUUyODNBQzk2RUVBQjREODUxQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMUUwRjdGOTQzOTExMUUyODNBQzk2RUVBQjREODUxQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExRTBGN0Y2NDM5MTExRTI4M0FDOTZERUFCNEQ4NTFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExRTBGN0Y3NDM5MTExRTI4M0FDOTZERUFCNEQ4NTFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BCuYQQAAADBJREFUeNpi/P//PwMMsDAwMDAxQADjEFGBRNWMMIeQoZqxWQsviKVMCxMDAwUACDAATxIrCkgGPxgAAAAASUVORK5CYII=')",
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
  };

  return (
    <Particles
      id="tsparticles"
      init={initParticles}  // Pass init callback to Particles
      options={options}
      className="fixed inset-0 -z-10"
    />
  );
}