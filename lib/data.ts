import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'festusolaleyef@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fisayomi, I am reaching out to you because...',

    resume: "/resume/resume.pdf",
    upworkProfile: 'https://www.upwork.com/freelancers/~019a3094aa4c0b97e3?mp_source=share',

    yearsOfExperience: "2+",
    completedProjects: "3+",
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/OlaleyeFisayo' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/oluwafisayomi-festus-olaleye-67a778227/' },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'TypeScript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Vue',
            icon: '/logo/vue.svg',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Nuxt.js',
            icon: '/logo/nuxt.svg',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Pinia',
            icon: '/logo/pinia.svg',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Sass',
            icon: '/logo/sass.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'SQLite',
            icon: '/logo/sqlite.svg',
        },
        {
            name: 'Drizzle ORM',
            icon: '/logo/drizzle.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Figma',
            icon: '/logo/figma.svg',
        },
        {
            name: 'Cloudinary',
            icon: '/logo/cloudinary.svg',
        },
        {
            name: 'OpenAI',
            icon: '/logo/openai.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
  {
    title: 'IKENNE Microfinance Bank Landing Page',
    slug: 'ikenne-mfb',
    liveUrl: 'https://ikennemfb.com/',
    year: 2025,
    description: `
      A modern and responsive landing page built for Ikenne Microfinance Bank to serve as their primary digital touchpoint. It provides streamlined access to customer forms, banking services, and real-time support. <br/><br/>
      Key Features:<br/>
      <ul>
        <li>📄 Service Overview: Clearly structured sections for offerings and banking forms</li>
        <li>📞 Live Support: Integrated Tawk.to widget for seamless real-time customer support</li>
        <li>📱 Mobile Optimized: Fully responsive UI across devices</li>
      </ul><br/>
      Technical Highlights:
      <ul>
        <li>Built from scratch using Vue.js for a performant and dynamic UI</li>
        <li>Integrated Tawk.to via embedded scripts for live chat capabilities</li>
      </ul>
    `,
    role: `
      Frontend Developer<br/>
      Owned the frontend development of the project:
      <ul>
        <li>🎨 Implemented the full layout and component logic using Vue.js</li>
        <li>📞 Embedded and configured live chat integration with Tawk.to</li>
        <li>📱 Ensured responsiveness and cross-device compatibility</li>
      </ul>
    `,
    techStack: ['Vue.js', 'Tawk.to', "Sass"],
    thumbnail: '/projects/thumbnail/ikenne-mfb.webp',
    longThumbnail: '/projects/long/ikenne-mfb.webp',
    images: [
      '/projects/images/ikenne-mfb-1.webp',
      '/projects/images/ikenne-mfb-2.webp',
      '/projects/images/ikenne-mfb-3.webp',
    ],
  },
  {
    title: 'Ventiii (Event Management System)',
    slug: 'ventiii',
    liveUrl: 'https://ventiii.vercel.app/',
    year: 2025,
    description: `
      Ventiii is a comprehensive event management platform designed to help users create, promote, and manage events effortlessly. Currently in development, it features dynamic event creation, speaker association, user authentication, and image management. <br/><br/>

      Key Features:<br/>
      <ul>
        <li>🧑‍💼 Auth System: Email/password & Google OAuth login using BetterAuth</li>
        <li>📆 Event Management: Create, update, and delete events with unique landing pages</li>
        <li>🎤 Speaker Module: Add and manage speakers tied to specific events</li>
        <li>🖼️ Image Handling: Upload and store images securely via Cloudinary</li>
        <li>📱 Responsive UI: Built with Tailwind CSS for mobile-first design</li>
      </ul><br/>

      Technical Highlights:
      <ul>
        <li>Utilized Nuxt.js for SSR and optimal routing</li>
        <li>Implemented Drizzle ORM with SQLite for schema-safe queries and development agility</li>
        <li>Set up form validation, error handling, and live updates for smooth UX</li>
      </ul>
    `,
    role: `
      Full-Stack Developer<br/>
      Leading the entire development process:
      <ul>
        <li>🛠️ Built authentication (email/password & Google OAuth) with BetterAuth</li>
        <li>📋 Designed CRUD operations for events and user profiles</li>
        <li>🖼️ Integrated Cloudinary for seamless image uploads and rendering</li
        <li>🎙️ Implemented speaker association logic per event</li
        <li>🧱 Structured and queried the database using Drizzle ORM + SQLite</li>
      </ul>
    `,
    techStack: [
      'Vue.js',
      'Nuxt.js',
      'Tailwind CSS',
      'Drizzle ORM',
      'SQLite',
      'Cloudinary',
      'BetterAuth',
    ],
    thumbnail: '/projects/thumbnail/ventiii.webp',
    longThumbnail: '/projects/thumbnail/ventiii.webp',
    images: [
      '/projects/images/ventiii-1.webp',
      '/projects/images/ventiii-2.webp',
      '/projects/images/ventiii-3.webp',
    ],
  },
];

export const MY_EXPERIENCE = [
    {
        title: 'Frontend Developer Intern',
        company: 'Fonu',
        duration: 'Aug 2025 - Present',
    },
    {
        title: 'Open-Source Contribution',
        company: 'AstroNvim',
        duration: 'Jul 2025',
    },
    {
        title: 'Junior Application Developer (Intern)',
        company: 'Phlex Payment Limited',
        duration: 'Jan 2024 - Jun 2024',
    },
];
