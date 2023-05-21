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
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  nagarro,
  iit,
  coding,
  threejs,
  myapp,
  rapidrender,
  rapidresume,
  snake,
  snappypost,
  stone,
  todo,
  urlzip,
  weather,
  chirag,
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Enthusiast",
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
    title: "Associate SDE",
    company_name: "Nagarro",
    icon: nagarro,
    iconBg: "#383E56",
    date: "Nov 2021 - Present",
    points: [
      "Worked on Adobe Experience Manager(AEM),a CMS solution for building websites, mobile apps and forms",
      "Worked with Reactjs and TypeScript to develop efficient and scalable software solutions",
      "Hands-on experience with web technologies like HTML, CSS and Javascript",
      "Used Git and GitHub for version controlling",
    ],
  },
  {
    title: "Trainee",
    company_name: "Nagarro",
    icon: nagarro,
    iconBg: "#E6DEDD",
    date: "Aug 2021 - Nov 2021",
    points: [
      "The training covered various topics such as Core Java, Databases, Data Structures, Angularjs, Reactjs, Adobe Experience Manager and other advanced modules",
      "The training program also included weekly assignments to monitor the progress of the trainees' learning",
      "The trainees were mentored by their respective mentors throughout the duration of the training program",
    ],
  },
  {
    title: "Intern",
    company_name: "Coding Ninjas India",
    icon: coding,
    iconBg: "#383E56",
    date: "Jul 2020 - Nov 2020",
    points: [
      "The primary responsibility was to solve doubts raised by students",
      "Understanding the students' perspective to identify the issue in the code",
      "Mentoring and motivating five students to complete their courses within time",
    ],
  },
  {
    title: "Summer Trainee",
    company_name: "ICT Academy, IIT Kanpur",
    icon: iit,
    iconBg: "#E6DEDD",
    date: "Jun 2019 - Jul 2019",
    points: [
      "During the Classroom Training on Artificial Intelligence in IIT Kanpur, the individual learned the concepts of Machine Learning",
      "Additionally, the individual was introduced to the basics of Convolutional Neural Network (CNN)",
      "The training took place in a classroom setting",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Sagar has a good hold of frontend development and is also proficient at building things from scratch with a long-term view in mind.",
    name: "Chirag Udeshi",
    designation: "SDE",
    company: "Credit Suisse",
    image: chirag,
  },
  // {
  //   testimonial:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique vestibulum orci, vitae euismod erat tempus sit amet.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras efficitur sodales fringilla.",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "RapidResume",
    description:
      "RapidResume is an elegantly designed application made in ReactJS, allowing users to craft their professional resume using its classy designs and elegant themes. ",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "auth 2.0",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rapidresume,
    source_code_link: "https://rapidresume.vercel.app/",
  },
  {
    name: "RapidRender",
    description:
      "Generate beautiful designs to elevate your User interfaces, including colors, gradients, patterns, or SVGs. Create backgrounds that perfectly match your branding needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "svgs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: rapidrender,
    source_code_link: "https://devsagarkhatri.github.io/rapidrender",
  },
  {
    name: "UrlZip",
    description:
      "Experience hassle-free sharing of URLs with URLZip! It makes it easy to shorten URLs in seconds, helping you cater to your clients and increase your brand outreach online.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: urlzip,
    source_code_link: "https://urlzip.vercel.app/",
  },

  {
    name: "Snappy Post",
    description:
      "Web-based platform that allows users to create engaging twitter like posts to be shared on other social platforms to increase your audience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "forms",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: snappypost,
    source_code_link: "https://snappypost.vercel.app/",
  },
  {
    name: "Weather App",
    description:
      "Experience the convenience of getting real-time weather updates with just a click using our user-friendly application. Never let the weather ruin your day again !",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://devsagarkhatri.github.io/weather/",
  },
  {
    name: "To-Do List",
    description:
      "A web-app that effortlessly sorts your tasks by status. Our elegant design ensures you prioritize with ease, with the ability to mark tasks as important for extra focus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "forms",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: todo,
    source_code_link: "https://github.com/",
  },
  {
    name: "Classic Snake",
    description:
      "Experience the nostalgic thrill of the classic snake game! Play now and indulge in the fun of maneuvering the snake to catch the food, all while avoiding the walls and your own tail.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: snake,
    source_code_link: "https://devsagarkhatri.github.io/snake/",
  },
  {
    name: "Stone-Paper-Scissors",
    description:
      "Challenge your friends to a game of Stone-Paper-Scissors with our sleek and modern ReactJS application! So why not put your skills to test and see who comes out on top?",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: stone,
    source_code_link: "https://devsagarkhatri.github.io/stone-paper-scissors/",
  },
  {
    name: "My Apps",
    description:
      "A collection of Apps like Merchandise Counter, Movies List, Todo App and Chart app made while learning the web development languages like ReactJs  and Javascript.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: myapp,
    source_code_link: "https://devsagarkhatri.github.io/my-app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
