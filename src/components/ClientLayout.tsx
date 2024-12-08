'use client';

import { useEffect } from 'react';
import { ThemeProvider } from '../context/ThemeContext';
import { removeGrammarlyAttributes } from '../utils/removeGrammarly';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Initialize theme on client-side only
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    
    // Remove Grammarly attributes
    return removeGrammarlyAttributes();
  }, []);

  return <ThemeProvider>{children}</ThemeProvider>;
}
