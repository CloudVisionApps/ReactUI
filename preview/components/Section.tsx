import React from 'react';
import { sectionConfig } from '../sectionConfig';
import { SectionHeader } from './SectionHeader';

interface SectionProps {
  sectionId: string;
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(function Section(
  { sectionId, children },
  ref
) {
  const config = sectionConfig[sectionId];
  return (
    <section
      ref={ref}
      data-section-id={sectionId}
      className="scroll-mt-8"
    >
      {config && <SectionHeader title={config.title} description={config.description} />}
      <div className="mt-10 space-y-8">
        {children}
      </div>
    </section>
  );
});
