'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Home,
  User,
  Hammer,
  FileText,
  GraduationCap,
  Briefcase,
  Mail,
  Moon,
  Sun,
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#hero', icon: Home },
  { name: 'About', href: '#about', icon: User },
  { name: 'Skills', href: '#skills', icon: Hammer },
  { name: 'Projects', href: '#projects', icon: FileText },
  { name: 'Education', href: '#education', icon: GraduationCap },
  { name: 'Experience', href: '#experience', icon: Briefcase },
  { name: 'Contact', href: '#contact', icon: Mail },
];

export default function NavBar() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-black">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <Link href="#hero">Balaji.dev</Link>
        </div>

        <div className="flex items-center space-x-4">
          {navItems.map(({ name, href, icon: Icon }) => (
            <Link
              key={name}
              href={href}
              onClick={() => setActive(name)}
              className={`group relative flex items-center justify-center text-sm text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition ${
                active === name ? 'text-blue-600 dark:text-blue-400' : ''
              }`}
            >
              <div className="relative flex items-center">
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                {active === name && (
                  <span className="ml-2 px-2 py-1 rounded bg-gray-200 dark:bg-gray-800 text-sm animate-slide-in">
                    {name}
                  </span>
                )}
              </div>
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
