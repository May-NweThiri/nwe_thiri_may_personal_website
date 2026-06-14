particlesJS("particles-js", {
  particles: {
    number: {
      value: 60, 
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#fffffe", 
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 0.8,
      random: true,
    },
    size: {
      value: 6, 
      random: true,
    },
    line_linked: {
      enable: false,
      distance: 120,
      color: "#f8f6f0",
      opacity: 0.4,
      width: 1.5,
    },
    move: {
      enable: true,
      speed: 3, 
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 0.6,
        },
      },
      push: {
        particles_nb: 4,
      },
    },
  },
  retina_detect: true,
});