
// Import assets if needed, or use paths as strings if they are in public or imported here
// For now, I will use placeholder strings or imported assets in the component if dynamic imports are tricky without a mapping.
// Common pattern: store paths as strings and have a utility or import them all here. 
// Given Vite, dynamic imports of assets from strings can be tricky. 
// Best practice: Import images at the top if there are few, or use specific folder structure.
// For this portfolio, let's assume valid paths or we import them in the array (which functions in Vite).

import joshua from '/src/assets/joshua.png';

export const projects = [
  {
    id: 'sample-project',
    title: 'Sample Project Title',
    bannerImage: joshua, // Using existing asset for now
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
    year: '2025',
    tags: ['React', 'Three.js', 'Web Audio'],
    technologies: ['React', 'Three.js', 'Web Audio API', 'GSAP'], // Explicit technologies list
    client: 'Google Creative Lab',
    collaborators: 'Jane Doe, John Smith',
    description: {
      situation: 'The client needed a way to visualize complex audio data in real-time for a web experiment.',
      task: 'My role was to build the frontend visualization engine and integrate it with the backend ML model.',
      action: 'I used Three.js for high-performance rendering and the Web Audio API to process the raw audio streams. I optimized the particle system to handle 10k+ points at 60fps.',
      result: 'The experiment was launched successfully and featured on Awwwards. It engaged over 100k users in the first week.',
    },
    images: [
      joshua, // Placeholder
      joshua, // Placeholder
      joshua, // Placeholder
      joshua, // Placeholder
    ],
    liveLink: 'https://example.com',
    repoLink: 'https://github.com',
  },
  // Add more projects here
];
