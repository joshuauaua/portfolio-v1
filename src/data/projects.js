import restaurant from "../assets/restaurant.png";
import buildboard from "../assets/buildboard.png";
import velosonics from "../assets/velosonics.png";

export const projects = [
  {
    title: "Hyper Radio",
    tags: [
      ".NET Core WebAPI",
      "C#",
      "HTTP LiveStreaming",
      "React",
      "FFMPEG",
      "Entity Framework",
      "SQL Server",
      "WebAudio API",
    ],
    description:
      "Web radio music streaming platform that allows users to submit mp3 files with accompanying data and tracks get placed in relevant playlists for playback in a stream.",
    image: restaurant,
    button: {
      link: "https://hyperradio.online/",
      text: "Join Waitlist ↗",
    },
  },
  {
    title: "Open Audio Streaming Kit",
    tags: [
      ".NET Core WebAPI",
      "C#",
      "DI/Repo Pattern",
      "React",
      "Entity Framework",
      "SQL Server",
    ],
    description:
      "Open source audio streaming kit built in C#. Allows users to build their own modular audio streaming platform while taking care of different complex backend services, such as HLS conversion, Blob storage management and persistent audio player frontend.",
    image: restaurant,
    button: {
      link: "https://github.com/joshuauaua/Open-Audio-Streaming-Kit",
      text: "View Code ↗",
    },
  },
  {
    title: "Sonic Assembly",
    tags: ["CSS", "Tailwind CSS", "Html", "Javascript"],
    description:
      "I built the website for my company, Sonic Assembly. I aimed to design a 'play-fessional' experience that showcase the different projects I have worked on, but also present the company as a serious collaborator in the industry.",
    image: buildboard,
    button: {
      link: "http://sonicassembly.se/",
      text: "View Website ↗",
    },
  },
  {
    title: "Velosonics",
    tags: ["React", "Bootstrap", "Tensorflow.js", "p5.js"],
    description:
      "Commissioned by the Goethe Institutte, an audio classification tool built using Google's Teachable Machine and TensorFlow.js with a React frontend and p5.js for audio visualization. Pilot project tested to detect maintenance issues in delivery bikes in Italy using audio recordings",
    image: velosonics,
    button: {
      link: "https://github.com/joshuauaua/TeachableMachine_React_Audio",
      text: "View Code ↗",
    },
  },
];
