import React from 'react';
import { cn } from '../../src/utils/cn';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
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

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-50">
      <div className="p-6 border-b border-gray-200 bg-white">
        <h1 className="text-xl font-bold text-gray-900 m-0">React UI</h1>
        <p className="text-sm text-gray-500 mt-1 m-0">Component Library</p>
      </div>
      <nav className="p-4 bg-white">
        <ul className="space-y-1 m-0 p-0 list-none">
          {navigationItems.map((item) => (
            <li key={item.id} className="m-0 p-0">
              <button
                type="button"
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  'w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-3 border-0 cursor-pointer',
                  'focus:outline-none focus:ring-2 focus:ring-blue-200',
                  activeSection === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100 bg-transparent'
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
