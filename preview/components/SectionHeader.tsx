import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="pb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
        {title}
      </h1>
      <p className="mt-2 text-[15px] text-gray-600 dark:text-zinc-400 leading-relaxed max-w-2xl">
        {description}
      </p>
    </header>
  );
}
