import React from 'react';
import { Sun, Moon, Palette } from 'lucide-react';
import { Configurator } from './Configurator';
import type { ThemeConfig } from '../useThemeConfig';
import { cn } from '../../src/utils/cn';

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
    <aside className="w-64 h-screen fixed right-0 top-0 flex flex-col z-50 transition-colors overflow-y-auto bg-black/35 backdrop-blur-2xl border-l border-white/20 dark:border-white/10">
      <div className="p-5 border-b border-white/15 dark:border-white/10 bg-transparent">
        <div className="flex items-center gap-2 mb-4">
          <Palette className="w-4 h-4 text-fg-muted shrink-0" strokeWidth={2} />
          <span className="text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
            Theme
          </span>
        </div>
        <div className="flex rounded-ui overflow-hidden border border-white/20 dark:border-white/15 bg-black/20 dark:bg-white/5 p-0.5">
          <button
            type="button"
            onClick={() => onThemeChange('light')}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium rounded-[calc(var(--ui-radius)-2px)] transition-colors',
              theme === 'light'
                ? 'bg-white/20 dark:bg-white/10 text-fg shadow-sm'
                : 'text-fg-muted hover:text-fg hover:bg-white/5'
            )}
            aria-label="Light mode"
          >
            <Sun className="w-4 h-4" strokeWidth={2} />
            Light
          </button>
          <button
            type="button"
            onClick={() => onThemeChange('dark')}
            className={cn(
              'flex-1 flex items-center justify-center gap-2 py-2.5 text-[13px] font-medium rounded-[calc(var(--ui-radius)-2px)] transition-colors',
              theme === 'dark'
                ? 'bg-white/20 dark:bg-white/10 text-fg shadow-sm'
                : 'text-fg-muted hover:text-fg hover:bg-white/5'
            )}
            aria-label="Dark mode"
          >
            <Moon className="w-4 h-4" strokeWidth={2} />
            Dark
          </button>
        </div>
      </div>
      <Configurator
        config={themeConfig}
        onConfigChange={onThemeConfigChange}
        onReset={onThemeConfigReset}
      />
    </aside>
  );
}
