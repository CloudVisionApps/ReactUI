import React from 'react';
import { cn } from '../../src/utils/cn';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
}

const navigationItems = [
  { id: 'navigation', label: 'Navigation', icon: '🧭' },
  { id: 'hero', label: 'Hero Sections', icon: '🎯' },
  { id: 'buttons', label: 'Buttons', icon: '🔘' },
  { id: 'badges', label: 'Badges', icon: '🏷️' },
  { id: 'avatars', label: 'Avatars', icon: '👤' },
  { id: 'alerts', label: 'Alerts', icon: '⚠️' },
  { id: 'modals', label: 'Modals', icon: '🪟' },
  { id: 'tabs', label: 'Tabs', icon: '📑' },
  { id: 'accordions', label: 'Accordions', icon: '📋' },
  { id: 'tooltips', label: 'Tooltips', icon: '💬' },
  { id: 'inputs', label: 'Inputs', icon: '📝' },
  { id: 'selects', label: 'Selects', icon: '📋' },
  { id: 'checkboxes', label: 'Checkboxes', icon: '☑️' },
  { id: 'radios', label: 'Radio Buttons', icon: '🔘' },
  { id: 'textareas', label: 'Textareas', icon: '📄' },
  { id: 'cards', label: 'Cards', icon: '🃏' },
  { id: 'footer', label: 'Footer', icon: '📄' },
  { id: 'examples', label: 'Examples', icon: '💡' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange, theme, onThemeChange }) => {
  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-700 h-screen fixed left-0 top-0 overflow-y-auto z-50 transition-colors">
      <div className="p-6 border-b border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h1 className="text-xl font-bold text-gray-900 dark:text-white m-0">React UI</h1>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1 m-0">Component Library</p>
          </div>
          <button
            type="button"
            onClick={() => onThemeChange(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-lg border border-gray-200 dark:border-zinc-600 bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors"
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
      </div>
      <nav className="p-4 bg-white dark:bg-zinc-900">
        <ul className="space-y-1 m-0 p-0 list-none">
          {navigationItems.map((item) => (
            <li key={item.id} className="m-0 p-0">
              <button
                type="button"
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  'w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 border-0 cursor-pointer',
                  'focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-900',
                  activeSection === item.id
                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                    : 'text-gray-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 bg-transparent'
                )}
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
