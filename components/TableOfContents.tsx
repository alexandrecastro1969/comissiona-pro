'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TocHeading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Seletor atualizado para pegar apenas headings dentro do artigo
    const elements = Array.from(document.querySelector('article')?.querySelectorAll('h2, h3') || []);
    const headingsData = elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName[1]),
    }));

    setHeadings(headingsData);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentId = '';

      elements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        const elementTop = htmlElement.offsetTop;
        if (scrollPosition >= elementTop) {
          currentId = element.id;
        }
      });

      setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Executa ao montar

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const renderBullet = (level: number) => {
    if (level === 2) {
      return <span className="absolute left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400/50"></span>;
    }
    return <span className="absolute left-1.5 top-1/2 -translate-y-1/2 w-1 h-1 rounded-full bg-gray-400/50"></span>;
  };

  if (headings.length === 0) return null;

  return (
    <motion.nav
      className="toc"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.h2 
          className="text-lg font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Índice
        </motion.h2>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-white/5 rounded-lg transition-colors"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="text-gray-400"
          >
            <path d="m18 15-6-6-6 6"/>
          </motion.svg>
        </button>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <ul className="space-y-2 relative">
              <div className="absolute left-2 top-1 bottom-1 w-px bg-white/10"></div>
              {headings.map((heading, index) => (
                <motion.li
                  key={heading.id}
                  className="relative flex items-center"
                  style={{ paddingLeft: `${(heading.level - 1) * 1.5}rem` }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * (index + 1) }}
                >
                  {renderBullet(heading.level)}
                  <button
                    onClick={() => scrollToHeading(heading.id)}
                    className={`w-full text-left py-1.5 pl-4 pr-2 rounded transition-all duration-200
                      ${
                        activeId === heading.id
                          ? 'text-blue-400 font-medium'
                          : 'text-gray-400 hover:text-white hover:bg-white/10 hover:translate-x-1'
                      }`}
                  >
                    {heading.text}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}