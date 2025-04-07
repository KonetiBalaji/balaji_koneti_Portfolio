export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-20 max-w-5xl mx-auto text-center md:text-left"
    >
      <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
        About Me
      </h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
        I’m <strong>Balaji Koneti</strong>, a passionate Data Scientist and AI Engineer with <strong>3+ years</strong> of software experience.
        I’m currently pursuing my <strong>Master’s in Computer Science</strong> and working as a <strong>Teaching Assistant</strong> for the
        LLM (Large Language Models) course. I specialize in building intelligent systems using <strong>ML</strong>, <strong>GenAI</strong>, and <strong>RAG</strong> architectures.
      </p>

      <div className="flex flex-wrap justify-center md:justify-start gap-3">
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm transition-transform transform hover:scale-105">
          AI/ML/RAG/GenAI Developer
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm transition-transform transform hover:scale-105">
          Master’s in CS
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm transition-transform transform hover:scale-105">
          Teaching Assistant – LLMs
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm transition-transform transform hover:scale-105">
          3+ Years Experience
        </span>
        <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm transition-transform transform hover:scale-105">
          Ex Infoscion
        </span>
      </div>
    </section>
  );
}
