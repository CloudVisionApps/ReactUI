import React from 'react';

interface SectionHeaderProps {
  title: string;
  description: string;
}

export function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <header className="pb-8">
      <h1 className="text-3xl font-bold text-fg tracking-tight">
        {title}
      </h1>
      <p className="mt-2 text-[15px] text-fg-muted leading-relaxed max-w-2xl">
        {description}
      </p>
    </header>
  );
}
