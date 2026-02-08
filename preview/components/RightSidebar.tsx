import React from 'react';
import { Configurator } from './Configurator';
import type { ThemeConfig } from '../useThemeConfig';

interface RightSidebarProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  themeConfig: ThemeConfig;
  onThemeConfigChange: (patch: Partial<ThemeConfig>) => void;
  onThemeConfigReset: () => void;
}

export function RightSidebar({
  theme,
  onThemeChange,
  themeConfig,
  onThemeConfigChange,
  onThemeConfigReset,
}: RightSidebarProps) {
  return (
    <aside className="w-64 bg-surface border-l border-border h-screen fixed right-0 top-0 flex flex-col z-50 transition-colors overflow-y-auto">
      <div className="p-4 border-b border-border bg-surface flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-fg">Theme</span>
        <button
          type="button"
          onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 rounded-ui border border-border bg-surface-muted text-fg hover:bg-border/50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-ring"
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>
      <Configurator
        config={themeConfig}
        onConfigChange={onThemeConfigChange}
        onReset={onThemeConfigReset}
      />
    </aside>
  );
}
