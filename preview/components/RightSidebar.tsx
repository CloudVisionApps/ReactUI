import React from 'react';
import { Configurator } from './Configurator';
import type { ThemeConfig } from '../useThemeConfig';

interface RightSidebarProps {
  themeConfig: ThemeConfig;
  onThemeConfigChange: (patch: Partial<ThemeConfig>) => void;
  onThemeConfigReset: () => void;
}

export function RightSidebar({
  themeConfig,
  onThemeConfigChange,
  onThemeConfigReset,
}: RightSidebarProps) {
  return (
    <aside className="w-64 bg-surface border-l border-border h-screen fixed right-0 top-0 flex flex-col z-50 transition-colors overflow-y-auto pt-6">
      <Configurator
        config={themeConfig}
        onConfigChange={onThemeConfigChange}
        onReset={onThemeConfigReset}
      />
    </aside>
  );
}
