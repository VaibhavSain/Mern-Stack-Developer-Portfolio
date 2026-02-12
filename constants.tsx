
import { Project, Experience, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Nexus Cloud Analytics',
    description: 'A real-time data visualization platform for cloud infrastructure monitoring. Built with high-performance WebGL rendering.',
    tags: ['React', 'TypeScript', 'Three.js', 'Node.js', 'PostgreSQL'],
    link: '#',
    github: 'https://github.com/VaibhavSain',
    image: 'https://picsum.photos/seed/nexus/800/450'
  },
  {
    id: '2',
    title: 'SecureFlow Payment Gateway',
    description: 'A high-concurrency payment processing engine with PCI-DSS compliance and automated fraud detection using ML models.',
    tags: ['Go', 'Redis', 'Docker', 'Kubernetes', 'gRPC'],
    link: '#',
    github: 'https://github.com/VaibhavSain',
    image: 'https://picsum.photos/seed/secure/800/450'
  },
  {
    id: '3',
    title: 'AgileStream CRM',
    description: 'Modern CRM focused on developer relations. Features include automated LinkedIn outreach and GitHub activity tracking.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'OpenAI'],
    link: '#',
    github: 'https://github.com/VaibhavSain',
    image: 'https://picsum.photos/seed/agile/800/450'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'exp1',
    role: 'MERN Stack Developer',
    company: 'TechFlow Solutions',
    duration: '2023 - Present',
    description: [
      'Developed and optimized core microservices using Node.js and MongoDB.',
      'Implemented responsive and high-performance frontends with React and Tailwind CSS.',
      'Collaborated on improving API latency by 30% through efficient database indexing.'
    ]
  },
  {
    id: 'exp2',
    role: 'Software Engineering Intern',
    company: 'Creative Pixels',
    duration: 'Summer 2023',
    description: [
      'Assisted in building UI components for client-facing dashboards using React.',
      'Identified and fixed 20+ frontend bugs, improving overall application stability.',
      'Learned and applied best practices for Git version control and code reviews.'
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: 'Problem Solving', level: 98, category: 'Core' },
  { name: 'System Architecture', level: 85, category: 'Core' },
  { name: 'React / Next.js', level: 92, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'PostgreSQL', level: 82, category: 'Backend' },
  { name: 'MongoDB', level: 90, category: 'Backend' },
  { name: 'Docker / K8s', level: 70, category: 'DevOps' },
  { name: 'AWS / GCP', level: 65, category: 'DevOps' },
  { name: 'Git / GitHub', level: 95, category: 'Tools' },
  { name: 'Figma', level: 75, category: 'Tools' },
];

export const BIO_CONTEXT = `
Vaibhav Sain is a dynamic MERN Stack Developer with 1 year of professional experience.
GitHub: https://github.com/VaibhavSain
LinkedIn: https://www.linkedin.com/in/vaibhav-28887b2a2
Email: xyzx010101@gmail.com
Education: BCA from Lords University, Alwar.
Current Location: Alwar, Rajasthan, India.
Skills: MongoDB, Express.js, React, Node.js, Next.js, and TypeScript.
`;
