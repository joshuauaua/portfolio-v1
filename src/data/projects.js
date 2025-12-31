
import joshua from '/src/assets/joshua.png';
import projSonic1 from '/src/assets/projSonic1.png';
import projSonic2 from '/src/assets/projSonic2.png';
import projSonic3 from '/src/assets/projSonic3.png';
import projSonic4 from '/src/assets/projSonic4.png';

import projAudioMl1 from '/src/assets/projAudioMl1.png';
import projAudioMl2 from '/src/assets/projAudioMl2.png';
import projAudioMl3 from '/src/assets/projAudioMl3.png';
import projAudioMl4 from '/src/assets/projAudioMl4.png';


export const projects = [
  {
    id: 'sonic-assembly',
    title: 'Sonic Assembly',
    bannerImage: projSonic1,
    video: 'https://www.w3schools.com/html/mov_bbb.mp4', // Placeholder video
    year: '2025',
    tags: ['Web'],
    technologies: ['React'],
    client: 'Sonic Assembly',
    description: {
      situation: 'The client needed a way to visualize complex audio data in real-time for a web experiment.',
      task: 'My role was to build the frontend visualization engine and integrate it with the backend ML model.',
      action: 'I used Three.js for high-performance rendering and the Web Audio API to process the raw audio streams. I optimized the particle system to handle 10k+ points at 60fps.',
      result: 'The experiment was launched successfully and featured on Awwwards. It engaged over 100k users in the first week.',
    },
    images: [
      projSonic1,
      projSonic2,
      projSonic3,
      projSonic4,
    ],
    liveLink: 'https://sonicassembly.se',
    repoLink: 'https://github.com/joshuauaua/Sonic-Assembly',
  },
];
