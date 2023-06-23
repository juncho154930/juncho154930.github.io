import {
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  docker,
  threejs,
  jQuery,
  sass,
  mysql,
  wordpress,
  gulp,
  webpack,
  php,
  flutter,
  aws,
  vuejs,
  nextjs,
  propulsionlabs,
  UTD,
  kaizenovate,
  twinpeaks,
  selectquote,
  cfr,
  assurance,
  carhub,
  dalle,
  sumz,
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
    title: "Web Development",
  },
  {
    title: "CMS Integration",
  },
  {
    title: "API & Reactive Front-End Design",
  },
  {
    title: "Automation & Improvement",
  },
  {
    title: "Security, Scalability, & Reliability",
  },
  {
    title: "Database Management",
  },
  {
    title: "Debugging & Testing",
  },
  {
    title: "Continuous Integration",
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "jQuery",
    icon: jQuery,
  },
  {
    name: "sass",
    icon: sass,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
  {
    name: "gulp",
    icon: gulp,
  },
  {
    name: "webpack",
    icon: webpack,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "vuejs",
    icon: vuejs,
  },
  {
    name: "nextjs",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Bachelor of Arts, Biology",
    company_name: "University of Texas at Dallas | AES Scholarship",
    icon: UTD,
    iconBg: "#E6DEDD",
    date: "August 2015 - May 2019",
    points: [
      "Academic Excellence Scholarships (AES) Scholarship",
      "Graduated with a 3.5 GPA.",
      "Studied Computer Science courses alongside Biology courses such as Data Structure & Algorithms, Java, C++, etc,",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Propulsion Labs LLC",
    icon: propulsionlabs,
    iconBg: "#2693DA",
    date: "November 2017 - May 2023",
    points: [
      "Initially hired for intern-level position and progressed to leadership role based on adaptability, technical savvy, and performance",
      "Engaged with agencies such as The Infinite Agency and Rain for Growth to develop and implement web and mobile applications for clients",
      "Designed and built custom software solutions, created responsive websites, integrated APIs, and provided ongoing technical support",
      "Collaborated to facilitate both frontend and backend development process, for cohesive, high-quality end products",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Kaizenovate",
    description:
      "Partnered with CTO on backend/frontend development, taking ownership of 70% of full-stack development; selected appropriate technologies for each step of the process",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "mobile",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "NodeJS/SailsJS",
        color: "purple-text-gradient",
      },
    ],
    image: kaizenovate,
    site_link: "https://www.kaizenovate.com/",
  },
  {
    name: "Twin Peaks",
    description:
      "Spearheaded development of TwinPeaks project as Fullstack developer. Project consisted of multiple websites, including US and Mexico Site. Maintained TP Franchise site, catering to individuals interested in purchasing a franchise and created Twin Peaks marketing site for internal use",
    tags: [
      {
        name: "WordPress",
        color: "blue-text-gradient",
      },
      {
        name: "Vue",
        color: "green-text-gradient",
      },
      {
        name: "NodeJS",
        color: "purple-text-gradient",
      },
      {
        name: "handlebars",
        color: "pink-text-gradient",
      },
    ],
    image: twinpeaks,
    site_link: "https://twinpeaksrestaurant.com/",
  },
  {
    name: "SelectQuote",
    description:
      "Developed and maintained lead capture forms, optimizing user experience for multi-generational demographics in the insurance industry. Implemented reactive form built with React to enhance user engagement",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "C#/.net",
        color: "green-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: selectquote,
    site_link: "https://life.selectquote.com/quote-form/",
  },
  {
    name: "CFR MyMoneyGoals",
    description:
      "Used Flutter to introduce company to mobile app development market, taking lead role to design and implement app with seamless integration with our existing API",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "C#/.net",
        color: "green-text-gradient",
      },
    ],
    image: cfr,
    site_link: "https://www.communityfinancialresources.org/mymoneygoalsapp",
  },
  {
    name: "Assurance Mortgage",
    description:
      "Maintained main site and built internal site from ground up (af-hub.com) with frontend/backend development using PHP",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Wordpress",
        color: "green-text-gradient",
      },
      {
        name: "Gulp",
        color: "purple-text-gradient",
      },
      {
        name: "MySQL",
        color: "pink-text-gradient",
      },
    ],
    image: assurance,
    site_link: "https://assurancemortgage.com/",
  },
];

const demos = [
  {
    name: "DALLE-E 2.0",
    description:
      "Emulates the functionality of 'DALL-E 2' by utilizing Open AI to create realistic images based on user description",
    tags: [
      {
        name: "Open AI",
        color: "blue-text-gradient",
      },
      {
        name: "MERN",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "purple-text-gradient",
      },
    ],
    image: dalle,
    site_link: "https://main--endearing-puppy-8d9cc5.netlify.app/",
    source_code_link: "https://github.com/juncho154930/dalle_clone",
  },
  {
    name: "Article Summarizer",
    description:
      "Utilizes Open AI GPT-4 to summarize lengthy articles into clear and concise summaries.",
    tags: [
      {
        name: "Open AI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    site_link:
      "https://648f464d3b6450546cec6939--preeminent-sprinkles-ffe314.netlify.app/",
    source_code_link: "https://github.com/juncho154930/ai_summarizer",
  },
  {
    name: "Car Hub",
    description:
      "Web-based platform that allows users to search and compare car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "RapidAPI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carhub,
    site_link: "https://car-showcase-gfwix9xjz-juncho154930.vercel.app/",
    source_code_link: "https://github.com/juncho154930/car_showcase",
  },
];

export { services, technologies, experiences, testimonials, projects, demos };
