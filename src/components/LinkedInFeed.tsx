import linkedinPosts from '@/../data/linkedin.json';

interface Post {
  title: string;
  url: string;
  date: string;
}

export default function LinkedInFeed() {
  return (
    <section id="linkedin" className="px-6 py-16 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">From LinkedIn</h2>
      <ul className="space-y-6">
        {linkedinPosts.map((post: Post, index: number) => (
          <li key={index} className="border rounded-lg p-4 hover:shadow transition">
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-sm text-gray-500 mb-2">
              {new Date(post.date).toLocaleDateString()}
            </p>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read on LinkedIn →
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
