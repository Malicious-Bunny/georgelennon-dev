import { env } from '@/env.mjs';

export const siteConfig = {
  title: 'George Lennon | Software developer',
  description:
    "Hello, I'm George Lennon, also known as malicious-bunny. I'm a fullstack developer with a focus on JavaScript (React), ASP.NET, and React Native. I enjoy building scalable systems and leading projects to success.",
    keywords: [
      'George Lennon',
      'malicious-bunny',
      'Fullstack developer',
      'Remote developer',
      'JavaScript',
      'React',
      'Next.js',
      'ASP.NET',
      'C#',
      'React Native',
      'Laravel',
      'Web development',
      'Backend development',
      'Mobile development',
      'Product management',
      'Tech startups',
      'DevOps',
      'QA',
      'Programming',
      'Scalable systems',
    ],
  
  url: env.SITE_URL || 'https://georgelennon-dev.vercel.app/',
  googleSiteVerificationId: env.GOOGLE_SITE_VERIFICATION_ID || '',
};
