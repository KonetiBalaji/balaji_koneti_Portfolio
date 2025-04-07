'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-20 pt-10 border-t border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
        <p className="text-sm">&copy; 2025 Balaji Koneti. All rights reserved.</p>
        <div className="flex gap-5">
          <Link href="https://www.linkedin.com/in/yourprofile" target="_blank" aria-label="LinkedIn">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-75 transition" />
          </Link>
          <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-75 transition" />
          </Link>
          <Link href="https://www.credly.com/users/yourprofile" target="_blank" aria-label="Credly">
            <img src="/icons/credly.svg" alt="Credly" className="w-6 h-6 hover:opacity-75 transition" />
          </Link>
          
        </div>
      </div>
    </footer>
  );
}
