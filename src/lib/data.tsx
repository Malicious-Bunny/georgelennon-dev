import { Icons } from '@/components/icons';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/socialhub.svg',
    title: 'SocialHub',
    description:
      'Next-generation social media app, built with its own backend.',
    technologies: ['Next.js', 'TypeScript', ' Nest.js', 'Tailwind', 'Prisma'],
    links: {
      preview: 'https://socialhub-ms.vercel.app/',
      github: 'https://github.com/Malicious-Bunny/SocialHub',
      githubApi: 'https://api.github.com/repos/Skolaczk/SocialHub',
    },
  },
  {
    image: '/projects/audiophile.svg',
    title: 'Audiophile',
    description: 'Online store specializing in headphones and speakers.',
    technologies: [
      'React',
      'Styled-components',
      'TypeScript',
      'Stripe',
      'Firebase',
    ],
    links: {
      preview: 'https://audiophile-ms.netlify.app/',
      github: 'https://github.com/Malicious-Bunny/Audiophile',
      githubApi: 'https://api.github.com/repos/Skolaczk/Audiophile',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'Internship at glothelo',
    location: 'Bastos, Yaounde-Cameroon',
    description:
      'During this internship, I focused on two key areas: creating Wordpress plugins and managing website content, plugins, and settings.',
    date: 'March-2023',
  },
  {
    title: 'Internship at Camtel',
    location: 'Yaounde-Cameroon',
    description:
     'Focused on building the website views for the company\'s rebranding to blue',
    date: 'August-2023',
  },
  {
    title: 'Freelancing',
    location: 'Remote',
    description:
      'As a freelancer, I specialized in graphic design using Figma and website development using Next.js with Sanity CMS. I undertook projects independently, from design conceptualization to final implementation, ensuring client satisfaction.',
    date: 'March - June 2024',
  },
  {
    title: 'Freelancing',
    location: 'Brandenburg, Germany',
    description:
    'Being the main developer for the modeling agency Oasis, I was responsible for the website\'s design and implementation. I also managed the website\'s content and settings.',
    date: 'October 2024 - Present',
  },
] as const;

export const skillsData = [
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <Icons.prisma className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
  { icon: <Icons.git className="size-12" /> },
  { icon: <Icons.nestjs className="size-12" /> },

] as const;
