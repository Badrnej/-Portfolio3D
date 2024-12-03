import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  vuejs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  Alx,
  Simplon,
  carrent,
  jobit,
  tripguide,
  // threejs,
  laravel,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Alx",
    icon: Alx,
    iconBg: "#383E56",
    date: "Jui 2023 - Sep 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Simplon",
    icon: Simplon,
    iconBg: "#E6DEDD",
    date: "Mar 2024 - Oct 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Engineer speacialist backend",
    company_name: "Alx",
    icon: Alx,
    iconBg: "#383E56",
    date: "Sep 2024 - Nov 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "youssef ibba",
    designation: "Software Engineer",
    company: "Acme Co",
    image: "https://media.licdn.com/dms/image/v2/D5603AQEyU2DLwJZKoA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725465432099?e=1738195200&v=beta&t=FpMHUdNXlu9XkBpnlDBILHVv40aaqod6C3H4Rl9t1U4",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "kamal miftah",
    designation: "Software Engineer",
    company: "DEF Corp",
    image: "https://media.licdn.com/dms/image/v2/D4E03AQFnZ5nMu47Zbg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723587573129?e=1738195200&v=beta&t=C0g5G4UQgq8Dm1TQYS0S7x3eSAIrHq3kOoKpYqoMlPI",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "mustapha rafiki",
    designation: "Software Engineer",
    company: "456 Enterprises",
    image: "https://media.licdn.com/dms/image/v2/D4E35AQHkLGqXIOk3pA/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1699347375202?e=1733112000&v=beta&t=IJbgBHI57A9DcwYTk89OwL6GGS2ySvyn0OcSTqaUCfM",
  },
];

const projects = [
  {
    name: "Github-Insights",
    description:
      "Github-Insights est une application web qui offre des analyses détaillées des dépôts GitHub, permettant de suivre les contributions, les pull requests, les issues, et d'autres métriques clés pour mieux gérer vos projets.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Css",
        color: "orange-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Badrnej/Github-Insights",
  },
  {
    name: "Gestok",
    description:
      "Gestock is a stock and delivery management solution optimized with Laravel and Vue.js. It ensures real-time tracking, data security, and an intuitive interface to simplify logistics for businesses.",
    tags: [
      {
        name: "Laravel",
        color: "blue-text-gradient",
      },
      {
        name: "vuejs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Badrnej/Webstack---Portfolio-Project",
  },
  {
    name: "task master",
    description:
      "TaskMaster is a task management application designed to streamline workflow and boost productivity. Built with Vue.js and Laravel, it features task assignment, progress tracking, and a user-friendly interface for efficient team collaboration.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
