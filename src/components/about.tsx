'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
      <p className="mb-4">
  I’m George Lennon, also known as malicious-bunny. I’m a full-stack developer with 4 years of programming experience, currently navigating the challenges of college life. My journey into programming ignited a passion for building robust systems and solving complex problems. I enjoy working with ASP.NET, Expo-React Native, Next.js, and I have a keen interest in QA and DevOps, along with a foundation in C++. Throughout my journey, I’ve tackled various projects, from personal endeavors to collaborative efforts. I'm always eager to learn new technologies and expand my skill set.
</p>


        <p>
          I&apos;m open to Job opportunities where I can contribute, learn and
          grow. If you have a good opportunity that matches my skills and
          experience then don&apos;t hesitate to contact me.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
