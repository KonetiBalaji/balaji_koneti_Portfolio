'use client';

import React from 'react';

const education = [
  {
    title: "Master's in Computer Science",
    institution: 'Northern Arizona University, AZ',
    year: '2024 – 2025',
    tags: ['AI Focused', 'Teaching Assistant', 'LLMs'],
  },
  {
    title: 'Bachelor of Technology – Computer Science',
    institution: 'JNTU Anantapur, India',
    year: '2016 – 2020',
    tags: ['Foundation', 'Project Management', 'Hackathons'],
  },
];

const work = [
  {
    title: 'Teaching Assistant',
    org: 'Northern Arizona University',
    duration: 'Jan 2025 – Present',
    desc: [
      'Assisted in teaching and mentoring students on LLM concepts and real-world applications.',
      'Developed and evaluated assignments related to fine-tuning LLMs and transformer architectures.',
      'Provided technical guidance on Python-based LLM frameworks and Hugging Face.',
      'Conducted office hours and troubleshooting sessions.',
    ],
    tags: ['LLMs', 'Python', 'Mentoring'],
  },
  {
    title: 'International Student Ambassador',
    org: 'Northern Arizona University',
    duration: 'Aug 2024',
    desc: [
      'Supported new international students at NAU, ensuring a smooth transition.',
      'Assisted in orientation activities for Fall 2024.',
      'Recognized by leadership for exceptional support.',
    ],
    tags: ['Leadership', 'Mentoring'],
  },
  {
    title: 'Senior Software Engineer',
    org: 'Infosys',
    duration: 'Mar 2022 – Dec 2023',
    desc: [
      'Worked on Apple Inc. projects with Java, Python, Git, Oracle SQL, Spring Microservices.',
      'Integrated AWS services and implemented automation strategies.',
      'Received "Rise Award" and "Insta Award" for contributions.',
    ],
    tags: ['Java', 'Python', 'Microservices', 'Automation'],
  },
  {
    title: 'Full Stack Developer',
    org: 'Nerds and Geeks Pvt Ltd',
    duration: 'Jan 2021 – Feb 2022',
    desc: [
      'Built and maintained websites with full stack capabilities.',
      'Collaborated with frontend/backend teams to ship features.',
    ],
    tags: ['Full Stack', 'JavaScript', 'Python'],
  },
  {
    title: 'Executive Body Member',
    org: 'Computer Society of India',
    duration: 'Aug 2018 – Nov 2020',
    desc: [
      'Promoted IT innovation through technical events and workshops.',
      'Boosted participation and engagement through leadership roles.',
    ],
    tags: ['Leadership', 'Project Management', 'Events'],
  },
  {
    title: 'Student Coordinator',
    org: 'Computer Society of India',
    duration: 'Aug 2016 – Jul 2018',
    desc: [
      'Organized hackathons, webinars, and technical fests.',
      'Led initiatives that developed leadership and organizational skills.',
    ],
    tags: ['Leadership', 'Networking'],
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        Education Timeline
      </h2>

      <div className="space-y-10">
        {education.map((item, idx) => (
          <div key={idx} className="border-l border-gray-300 dark:border-gray-700 pl-6 relative">
            <div className="absolute left-[-10px] top-1 w-5 h-5 bg-blue-500 rounded-full"></div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.institution}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.year}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white my-16">
        Work Experience
      </h2>

      <div className="space-y-10">
        {work.map((item, idx) => (
          <div key={idx} className="border-l border-gray-300 dark:border-gray-700 pl-6 relative">
            <div className="absolute left-[-10px] top-1 w-5 h-5 bg-blue-500 rounded-full"></div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{item.org}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{item.duration}</p>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 mb-2">
              {item.desc.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 dark:bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-800 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
