import {
  nitk,
  cluboard,
  cash_flow,
  gdsc,
  iris,
  ecell,
  genesis,
  portfolio,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  averlon,
  devfolio,
  pba,
  sslc,
  ethglobal,
  java,
  html,
  react,
  excel,
  mysql,
  javascript,
  mech,
  robot,
  polkadot,
  lightspeed,
  dennisivy,
  manipal,
  icon,
  ethforall,
  uxmint,
  resumePdf,
  freadom,
  bank,
  todo,
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiFastapi,
  SiFlask,
  SiSpringboot,
  SiGraphql,
  SiPython,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiFirebase,
  SiNextdotjs,
  SiBitbucket,
  SiJira,
  SiSwagger,
  SiDocker,
  SiLinux,
  SiPycharm,
  SiEclipseide,
  SiSlack,
  SiIntellijidea,
  SiTypescript,
  SiNodedotjs,
  SiAngular,
  SiIonic,
  SiMongodb,
  SiPostgresql,
  SiVite,
  SiWordpress,
  SiShopify,
  SiConfluence,
} from "react-icons/si";

import { FaGolang } from "react-icons/fa6";
import { DiCss3, DiJava, DiGrails } from "react-icons/di";

export const resumeLink = resumePdf;
export const repoLink = "https://github.com/NaveenJsDevops/portfolio";
export const callToAction = "https://www.linkedin.com/in/naveen-js-dev";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "achievements",
    title: "Achievements & Certifications",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contactMe",
    title: "Get in Touch",
  },
];

// Academic background
export const educationList = [
  {
    id: "education-1",
    icon: nitk,
    title: "Sri Balaji Chockalingam Engineering College, Arni",
    degree: "Bachelor of Engineering (BE MECH)",
    duration: "August 2019 - June 2023",
    content1: "Anna University | Major: Mechanical Engineering",
    content2: "Aggregate: 85% (CGPA: 8.5)",
  },
  {
    id: "education-2",
    icon: pba,
    title: "Don Bosco Hr. Sec. School, Polur",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "June 2018 - March 2019",
    content1: "State Board of Tamil Nadu",
    content2: "Percentage: 50%",
  },
  {
    id: "education-3",
    icon: sslc,
    title: "Asian Matriculation School, Sengunam",
    degree: "Secondary School Leaving Certificate (SSLC)",
    duration: "June 2016 - March 2017",
    content1: "State Board of Tamil Nadu",
    content2: "Percentage: 80%",
  },
];

export const achievements = [
  {
    id: "a-1",
    icon: java,
    event: "Full Stack Java, React & Web Development",
    position: "Certified Program",
    content1: "Besant Technologies, Chennai — Comprehensive training in Core Java, React, Angular, JavaScript, MySQL, HTML5 & CSS3.",
    project: "https://drive.google.com/file/d/1cLlaZwEU9UfZNzM2PVhVmTSr6oGQ2LZb/view?usp=drive_link",
  },
  {
    id: "a-2",
    icon: excel,
    event: "Advanced Excel Tutorial & Analytics",
    position: "Certified",
    content1: "Elearning Market — Advanced formula modeling, data visualization, and reporting.",
    project: "https://drive.google.com/file/d/1BYvJ0LZB1cnYFfuz7lEegaer3JBQVRJT/view?usp=drive_link",
  },
  {
    id: "a-3",
    icon: robot,
    event: "Robotics Simulation for Manufacturing",
    position: "Industry Certified",
    content1: "Skill Sonics by Naan Mudhalvan — Industrial robotics workflows and automated manufacturing systems.",
    project: "https://drive.google.com/file/d/1mbUyooLrhV7vMglPIKteIAppNpGKXmgH/view?usp=drive_link",
  },
  {
    id: "a-4",
    icon: mech,
    event: "Design and Analysis of Two Wheeler Clutch Inner Hub",
    position: "Published Journal Paper",
    content1: "Published in IJIRSET, Volume 12, Issue 5, May 2023 — Finite element modeling and structural analysis.",
    project: "https://drive.google.com/file/d/1riJDLozgb0dm2oKCgtOGx-dmGn56eBru/view?usp=drive_link",
  },
];

// Technical skills grouped by categories
export const skills = [
  {
    title: "Programming Languages",
    items: [
      {
        id: "pl-1",
        icon: FaGolang,
        name: "Golang",
      },
      {
        id: "pl-2",
        icon: DiJava,
        name: "Java",
      },
      {
        id: "pl-3",
        icon: SiPython,
        name: "Python",
      },
      {
        id: "pl-4",
        icon: SiJavascript,
        name: "JavaScript",
      },
      {
        id: "pl-5",
        icon: SiTypescript,
        name: "TypeScript",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS3",
      },
      {
        id: "pl-7",
        icon: AiFillHtml5,
        name: "HTML5",
      },
    ],
  },
  {
    title: "Frontend & Mobile",
    items: [
      {
        id: "fm-1",
        icon: SiReact,
        name: "React JS",
      },
      {
        id: "fm-2",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "fm-3",
        icon: SiAngular,
        name: "Angular",
      },
      {
        id: "fm-4",
        icon: SiNextdotjs,
        name: "Next.js",
      },
      {
        id: "fm-5",
        icon: SiIonic,
        name: "Ionic",
      },
      {
        id: "fm-6",
        icon: SiVite,
        name: "Vite",
      },
      {
        id: "fm-7",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },
      {
        id: "fm-8",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
    ],
  },
  {
    title: "Backend Frameworks & APIs",
    items: [
      {
        id: "b-1",
        icon: SiNodedotjs,
        name: "Node.js",
      },
      {
        id: "b-2",
        icon: SiFastapi,
        name: "FastAPI",
      },
      {
        id: "b-3",
        icon: SiFlask,
        name: "Flask",
      },
      {
        id: "b-4",
        icon: SiSpringboot,
        name: "Spring Boot",
      },
      {
        id: "b-5",
        icon: DiGrails,
        name: "Grails",
      },
      {
        id: "b-6",
        icon: SiGraphql,
        name: "GraphQL",
      },
    ],
  },
  {
    title: "Database Management & Cloud",
    items: [
      {
        id: "db-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "db-2",
        icon: SiPostgresql,
        name: "PostgreSQL",
      },
      {
        id: "db-3",
        icon: SiMongodb,
        name: "MongoDB",
      },
      {
        id: "db-4",
        icon: SiFirebase,
        name: "Firebase",
      },
    ],
  },
  {
    title: "DevOps, Tools & IDEs",
    items: [
      {
        id: "t-1",
        icon: SiDocker,
        name: "Docker",
      },
      {
        id: "t-2",
        icon: SiLinux,
        name: "Linux",
      },
      {
        id: "t-3",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-4",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-5",
        icon: AiOutlineGitlab,
        name: "GitLab",
      },
      {
        id: "t-6",
        icon: SiBitbucket,
        name: "Bitbucket",
      },
      {
        id: "t-7",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-8",
        icon: SiSwagger,
        name: "Swagger",
      },
      {
        id: "t-9",
        icon: SiJira,
        name: "Jira",
      },
      {
        id: "t-10",
        icon: SiConfluence,
        name: "Confluence",
      },
      {
        id: "t-11",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-12",
        icon: SiIntellijidea,
        name: "IntelliJ IDEA",
      },
      {
        id: "t-13",
        icon: SiPycharm,
        name: "PyCharm",
      },
      {
        id: "t-14",
        icon: SiEclipseide,
        name: "Eclipse",
      },
      {
        id: "t-15",
        icon: SiSlack,
        name: "Slack",
      },
      {
        id: "t-16",
        icon: SiWordpress,
        name: "WordPress",
      },
      {
        id: "t-17",
        icon: SiShopify,
        name: "Shopify",
      },
    ],
  },
];

// Professional work experience
export const experiences = [
  {
    organisation: "UX Mint LLP, Chennai",
    logo: uxmint,
    link: "https://www.uxmint.in/",
    positions: [
      {
        title: "Jr Full Stack Developer",
        duration: "July 2025 - Present",
        content: [
          {
            text: "Collaborated on the Sify Technologies project, involving the development and maintenance of the NSE project, network dashboards, and customer portals.",
          },
          {
            text: "Leveraged Node.js, Next.js, and Angular for full-stack development, ensuring robust and scalable application performance; integrated and managed MongoDB databases to handle complex data requirements and efficient retrieval for dashboards and portals.",
          },
          {
            text: "Contributed to the Octakidz project, a kids' learning platform, by developing a web interface where kids complete activities and upload answers; integrated the Mistral AI model to evaluate and analyze student submissions. Built the platform using Angular, Node.js, and Python, and developed a cross-platform mobile app using Angular Ionic.",
          },
          {
            text: "Worked on WordPress, Shopify, and React Native mobile apps for various client projects.",
          },
        ],
      },
    ],
  },
  {
    organisation: "CyberLiver Limited, Chennai",
    logo: oracle,
    link: "https://www.cyberliver.com/about-us.html",
    positions: [
      {
        title: "MedTech Full Stack Engineer",
        duration: "Nov 2023 - Jan 2025",
        content: [
          {
            text: "Developed and maintained platform-level APIs using Python (FastAPI), Java, Firebase, and MySQL to support digital therapeutics applications for alcohol addiction, mental health, and cirrhosis.",
          },
          {
            text: "Contributed to platform infrastructure, ensuring seamless functionality across applications like AlcoChange, Companion App for AlcoChange, DryDay, BeeDry, BeeHappy, and Cognitive Behavioral Therapy (CBT) modules.",
          },
          {
            text: "Enhanced backend capabilities to manage user data, daily progress tracking, and dynamic content delivery — enabling real-time updates via clinical dashboards without requiring app-side modifications.",
          },
          {
            text: "Implemented multilingual, personalized patient engagement solutions for data collection and analysis, enabling the CirrhoX and AlcoX algorithms in therapeutic interventions.",
          },
          {
            text: "Optimized master data loading by structuring data into TSV files and updating master datasets during app startup, significantly reducing SQL query execution times and improving overall application performance.",
          },
        ],
      },
      {
        title: "MedTech Full Stack Engineer (Intern)",
        duration: "Jun 2023 - Nov 2023",
        content: [
          {
            text: "Migrated Java models to Python SQLAlchemy models, streamlining the transition and ensuring compatibility with the evolving platform architecture.",
          },
        ],
      },
    ],
  },
  {
    organisation: "Shiash Info Solution Pvt Ltd, Chennai (Remote)",
    logo: iris,
    link: "https://shiash.com/about-us.php",
    positions: [
      {
        title: "Full Stack Java Developer (Intern)",
        duration: "Jan 2023 - May 2023",
        content: [
          {
            text: "Completed a project titled 'Brunt Reversal Just-In-Time Glitch Prophecy' utilizing Java/J2EE (JDK 8).",
          },
          {
            text: "Developed a web application for data warehousing with unique ID generation and QR code scanning — significantly enhancing security, preventing data loss, and improving data retrieval efficiency.",
          },
        ],
      },
    ],
  },
];

// All 14 projects from GitHub portfolio
export const projects = [
  {
    id: "project-1",
    title: "Sify & NSE Network Monorepo",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/sifymonorepo",
    link: "https://sifymonorepo.vercel.app",
    image: cdc,
    content:
      "Enterprise monorepo application collaborated for Sify Technologies and NSE project, featuring high-performance network monitoring dashboards, analytics, and responsive customer portals.",
    stack: [
      { id: "i-1", icon: SiNextdotjs, name: "Next.js" },
      { id: "i-2", icon: SiAngular, name: "Angular" },
      { id: "i-3", icon: SiNodedotjs, name: "Node.js" },
      { id: "i-4", icon: SiMongodb, name: "MongoDB" },
    ],
  },
  {
    id: "project-2",
    title: "Metadata Tree Schema Builder",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/metadata-tree-poc",
    link: "https://github.com/NaveenJsDevops/metadata-tree-poc",
    image: chargeswap,
    content:
      "Production-ready tree-based visual metadata schema builder developed with React 19, TypeScript, Vite, React Flow, and Dagre for interactive node diagrams and hierarchical schema management.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React 19" },
      { id: "i-2", icon: SiTypescript, name: "TypeScript" },
      { id: "i-3", icon: SiVite, name: "Vite" },
    ],
  },
  {
    id: "project-3",
    title: "DevBox Backend Platform",
    category: "Python & Backend",
    github: "https://github.com/NaveenJsDevops/devbox-backend",
    link: "https://github.com/NaveenJsDevops/devbox-backend",
    image: averlon,
    content:
      "Robust containerized backend architecture engineered in Python for scalable multi-service orchestration, automated API routes, database integrations, and developer sandbox environments.",
    stack: [
      { id: "i-1", icon: SiPython, name: "Python" },
      { id: "i-2", icon: SiFastapi, name: "FastAPI" },
      { id: "i-3", icon: SiDocker, name: "Docker" },
      { id: "i-4", icon: SiPostgresql, name: "PostgreSQL" },
    ],
  },
  {
    id: "project-4",
    title: "Mint Tenant Core Engine",
    category: "Python & Backend",
    github: "https://github.com/NaveenJsDevops/mint-tenant-core",
    link: "https://github.com/NaveenJsDevops/mint-tenant-core",
    image: recruitment,
    content:
      "Multi-tenant core architectural engine built in Python providing isolated tenant database separation, role-based access control (RBAC), and centralized API management.",
    stack: [
      { id: "i-1", icon: SiPython, name: "Python" },
      { id: "i-2", icon: SiMysql, name: "MySQL" },
      { id: "i-3", icon: SiLinux, name: "Linux" },
    ],
  },
  {
    id: "project-5",
    title: "Mint Tenant Admin Portal",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/mint-tenant-core-frontend",
    link: "https://github.com/NaveenJsDevops/mint-tenant-core-frontend",
    image: freadom,
    content:
      "Modern tenant administration frontend portal built with React and Tailwind CSS, allowing organization provisioning, permission controls, and usage analytics dashboards.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React" },
      { id: "i-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "i-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-6",
    title: "MoodTune AI Audio Microservice",
    category: "Python & Backend",
    github: "https://github.com/NaveenJsDevops/Mood-Tune-Python-Service",
    link: "https://github.com/NaveenJsDevops/Mood-Tune-Python-Service",
    image: iris,
    content:
      "Python microservice powered by machine learning algorithms designed to analyze user emotion states and dynamically generate personalized music recommendations.",
    stack: [
      { id: "i-1", icon: SiPython, name: "Python" },
      { id: "i-2", icon: SiFlask, name: "Flask" },
      { id: "i-3", icon: SiFastapi, name: "FastAPI" },
    ],
  },
  {
    id: "project-7",
    title: "MoodTune Music Player App",
    category: "Mobile Apps",
    github: "https://github.com/NaveenJsDevops/Mood-Tune-App",
    link: "https://github.com/NaveenJsDevops/Mood-Tune-App",
    image: bank,
    content:
      "Emotion-driven music streaming mobile application built in React Native, delivering customized acoustic experiences based on detected user sentiment and mood analysis.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React Native" },
      { id: "i-2", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-8",
    title: "Focus Bubble Mobile App",
    category: "Mobile Apps",
    github: "https://github.com/NaveenJsDevops/focus-bubble",
    link: "https://github.com/NaveenJsDevops/focus-bubble",
    image: cluboard,
    content:
      "Offline focus and productivity timer mobile application built with React Native for Android, helping users maximize deep work sessions without digital distractions.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React Native" },
      { id: "i-2", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-9",
    title: "Simple & Scientific Calculator",
    category: "Mobile Apps",
    github: "https://github.com/NaveenJsDevops/Calculator-App",
    link: "https://github.com/NaveenJsDevops/Calculator-App",
    image: mech,
    content:
      "Simple and scientific calculator application created using React Native for Android, featuring advanced mathematical functions, formula evaluation, and a responsive interface.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React Native" },
      { id: "i-2", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-10",
    title: "Apica Search Engine (Go + React)",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/search-engine-golang-react",
    link: "https://github.com/NaveenJsDevops/search-engine-golang-react",
    image: huntly,
    content:
      "High-performance full-stack search engine engineered for blazing-fast indexing and retrieval of large-scale log data and structured records. Powered by Golang for speed, paired with React.js.",
    stack: [
      { id: "i-1", icon: FaGolang, name: "Golang" },
      { id: "i-2", icon: SiReact, name: "React" },
      { id: "i-3", icon: SiTailwindcss, name: "TailwindCSS" },
    ],
  },
  {
    id: "project-11",
    title: "Transport Hub Logistics Portal",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/Transport_Hub",
    link: "https://github.com/NaveenJsDevops/Transport_Hub",
    image: genesis,
    content:
      "Frontend logistics management web app for Transport Hub, coordinating fleet dispatch, real-time cargo status tracking, and transit scheduling.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React" },
      { id: "i-2", icon: SiBootstrap, name: "Bootstrap" },
      { id: "i-3", icon: SiJavascript, name: "JavaScript" },
    ],
  },
  {
    id: "project-12",
    title: "Secret Santa Assignment Engine",
    category: "Python & Backend",
    github: "https://github.com/NaveenJsDevops/secret-santa-game",
    link: "https://github.com/NaveenJsDevops/secret-santa-game",
    image: todo,
    content:
      "Automated Secret Santa assigning project in Python implementing randomized fair pairing algorithms with zero self-matches, validation checks, and email distribution.",
    stack: [
      { id: "i-1", icon: SiPython, name: "Python" },
    ],
  },
  {
    id: "project-13",
    title: "Commercial Invoice Generator",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/invoice-generator",
    link: "https://naveenjsdevops.github.io/invoice-generator/",
    image: greentrust,
    content:
      "Commercial invoice generator designed to streamline invoice creation for international trade businesses. Automates calculations of taxes, duties, and totals with instant print/export.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React" },
      { id: "i-2", icon: SiTailwindcss, name: "TailwindCSS" },
    ],
  },
  {
    id: "project-14",
    title: "Modern Developer Portfolio",
    category: "Full Stack & Web",
    github: "https://github.com/NaveenJsDevops/portfolio",
    link: "https://naveenjsdevops.github.io/portfolio/",
    image: comicify_ai,
    content:
      "Personal developer portfolio built with React 18, Vite, and Tailwind CSS. Features full Light/Dark themes, Framer Motion animations, modular data architecture, and interactive contact & messaging integration.",
    stack: [
      { id: "i-1", icon: SiReact, name: "React" },
      { id: "i-2", icon: SiTailwindcss, name: "TailwindCSS" },
      { id: "i-3", icon: SiVite, name: "Vite" },
    ],
  },
];

// Blog posts (optional)
export const blogPosts = [
  {
    id: "post-1",
    title: "Building Scalable Digital Therapeutics APIs with FastAPI & MySQL",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      { id: "tag-1", name: "FastAPI" },
      { id: "tag-2", name: "Python" },
      { id: "tag-3", name: "HealthTech" },
    ],
  },
];

// GitHub stats
export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "3+",
  },
  {
    id: "stats-2",
    title: "Years Experience",
    value: "3+",
  },
  {
    id: "stats-3",
    title: "Completed Projects",
    value: "14",
  },
];

// Extra curricular activities (optional)
export const extraCurricular = [];

// Social media links
export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/naveen-js-dev",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://github.com/NaveenJsDevops",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:naveenjs.be@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/Naveen_JS_kumar",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/bullet._x_.naveen",
  },
];

// Professional summary matching resume
export const aboutMe = {
  name: "Naveen Kumar J",
  title: "Full Stack Developer",
  phone: "9566702656",
  email: "naveenjs.be@gmail.com",
  githubUsername: "NaveenJsDevops",
  tagLine: "Full Stack Developer | Chennai, Tamil Nadu",
  intro:
    "Full-Stack Developer with 3 years of experience designing and building scalable applications across diverse domains, including Digital Therapeutics, Network Provider platforms, Kids' Learning solutions, and B2B/B2C Dashboards. Adept at translating complex business requirements into intuitive, high-performance products, with a strong focus on usability, scalability, and reliability.",
};

// Maximum items for OpenSource contributions
export const itemsToFetch = 20;

// Included GitHub repos for open-source PR fetching
export const includedRepos = [
  "NaveenJsDevops/sifymonorepo",
  "NaveenJsDevops/portfolio",
  "NaveenJsDevops/search-engine-golang-react",
  "NaveenJsDevops/invoice-generator",
  "NaveenJsDevops/metadata-tree-poc",
  "NaveenJsDevops/devbox-backend",
  "NaveenJsDevops/mint-tenant-core",
  "NaveenJsDevops/focus-bubble",
];