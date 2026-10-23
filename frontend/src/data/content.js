// Edit this file to change the site's content. Components stay untouched.
export const profile = {
  name: 'Adeshola John',
  role: 'FRONTEND DEVELOPER · CREATIVE PROBLEM SOLVER',
  headline: 'Turning Ideas Into Exceptional Digital Experiences.',
  pitch:
    'Hi, I\'m Adeshola John — a Frontend Developer passionate about building modern, responsive, and intuitive web applications that combine beautiful design with seamless functionality.',
bio: [
  'I specialize in building responsive websites and web applications using modern frontend technologies, including HTML, CSS, JavaScript, and React.js. I focus on creating interfaces that are not only visually appealing but also intuitive, functional, and accessible across different devices and screen sizes.',

  'My approach combines clean, maintainable code with thoughtful design, attention to detail, and a problem-solving mindset. From developing interactive user interfaces to integrating APIs and improving website responsiveness, I enjoy tackling challenges that turn complex ideas into simple, seamless experiences.',

  "I'm continuously learning, refining my skills, and exploring better ways to build for the web. My goal is to create digital products that solve real problems, deliver value, and leave a lasting impression.",
],
  facts: [
    { label: 'Before', value: 'Frontend Developer, TechSolve Innovations (2024 to 2025)' },
    { label: 'Responsibility', value: 'Developed a clean, mobile-first landing page with responsive layouts and smooth user interactions and Improved UI/UX standards adopted as base template across multiple client projects.' },
    {label: 'Now', value: 'Freelancing since January 2025'}
  ],
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

// level is 0-100. Adjust honestly.
export const skills = [
  { group: 'Languages', items: [['JavaScript', 92], ['TypeScript', 80], ['HTML & CSS', 95], ['SQL', 70]] },
  { group: 'Frameworks & libraries', items: [['React', 92], ['Tailwind CSS', 94], ['Node.js & Express', 80], ['Bootstrap', 85]] },
  { group: 'Tools', items: [['Git & GitHub', 88], ['REST APIs', 88], ['Figma', 70], ['Vite', 85]] },
];

// Sample projects: replace titles, links and tags with your own.
export const projects = [
  { image: '/images/projects/Aase-tech-admin.png',
    title: 'Aase Tech Admin', 
    desc: 'A modular landing page template system. Mix ready-made sections to ship a branded page in minutes.', 
    tags: ['React', 'Tailwind', 'Vite'],
    live: 'https://aasetech.netlify.app/',
    github: 'https://github.com/Adeshola2/AaseTech',
  },
  { image: '/images/projects/Aasd-clothing.png',
    title: 'Aasd Clothing', 
    desc: 'A fashion e-commerce experience designed to showcase clothing collections, organize products, and provide a streamlined shopping and checkout journey.', 
    tags: ['React', 'Bootstrap', 'JavaScript', 'E-commerce UI'],
    live: 'https://aasd-clothing.netlify.app/',
    github: 'https://github.com/Adeshola2/Aasd-clothing', 
  },
  { image: '/images/projects/Accounting.png',
    title: 'Accounting and Bookkeeping', 
    desc: 'Fast e-commerce storefront with cart, search and a mobile-first checkout flow.', 
    tags: ['React', 'Node', 'Bootstrap'],
    live: 'https://ledgerclouda.netlify.app/',
    github: 'https://github.com/Adeshola2/LedgerCloud',
  },
  { image: '/images/projects/apexmedical.png',
    title: 'Apexmedical', 
    desc: 'A healthcare appointment platform concept that helps patients explore doctors, schedule consultations, and manage appointment-related information.', tags: ['React', 'Tailwind CSS', 'React Calendar', 'REST APIs'],
    live: 'https://apexmedica.netlify.app/',
    github: 'https://github.com/Adeshola2/ApexMedical',
  },
  { image: '/images/projects/JobVibe.png',
    title: 'JobVibe', 
    desc: 'A recruitment platform concept connecting job seekers and employers, with job discovery, company profiles, and application workflows.', 
    tags: ['React', 'API Integration', 'Tailwind CSS'],
    live: 'https://jobvibejo.netlify.app/',
    github: 'https://github.com/Adeshola2/JobVibe', 
  },
  { image: '/images/projects/st-jude-international-college.png',
    title: 'St Jude International College', 
    desc: 'Markdown blog with an admin editor, tags and RSS feed.', 
    tags: ['Next.js', 'Express', 'PostgreSQL'],
    live: 'https://stjudeinternationalcollege.netlify.app/',
    github: 'https://github.com/Adeshola2/St.-Jude-International-College',
  },
  { image: '/images/projects/Cargo.png',
    title: 'Cargo Website', 
    desc: 'Real-time chat with rooms, typing indicators and message history.', 
    tags: ['React', 'Bootstrap', 'Node'],
    live: 'https://cargocel.netlify.app/',
    github: 'https://github.com/Adeshola2/Cargo-Website', 
  },
  { image: '/images/projects/Pillar.png',
    title: 'Pillar', 
    desc: 'This is just a simple sign up page that registers you and takes you to the dashboard. Idea is to provide a from for new users when the users are done filling the from the back save the information and display the information in the user dashboard', 
    tags: ['React', 'Express', 'Postgres'],
    live: 'https://pillar-signup.netlify.app/signin',
    github: 'https://github.com/Adeshola2/pillar-signup', 
  },
];

// Replace with your real links. WhatsApp format: https://wa.me/<countrycode><number> (no + or spaces)
export const socials = [
  { label: 'GitHub', href: 'https://github.com/Adeshola2' },
  { label: 'LinkedIn', href: 'www.linkedin.com/in/joseph-john-a4a2ab315' },
  { label: 'WhatsApp', href: 'https://wa.me/2348109223641' },
  { label: 'Email', href: 'mailto:adesholajohnjoseph@gmail.com' },
];
