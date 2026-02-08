import React, { useState, useMemo } from 'react';
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
  { id: 'breadcrumbs', label: 'Breadcrumbs', icon: '🍞' },
  { id: 'spinners', label: 'Spinners', icon: '⏳' },
  { id: 'progress', label: 'Progress', icon: '📊' },
  { id: 'switches', label: 'Switches', icon: '🔀' },
  { id: 'dividers', label: 'Dividers', icon: '➖' },
  { id: 'skeletons', label: 'Skeletons', icon: '▢' },
  { id: 'pagination', label: 'Pagination', icon: '📄' },
  { id: 'table', label: 'Table', icon: '📊' },
  { id: 'link', label: 'Link', icon: '🔗' },
  { id: 'emptyState', label: 'Empty State', icon: '📭' },
  { id: 'appDesigns', label: 'App Designs', icon: '🎨' },
  { id: 'inputs', label: 'Inputs', icon: '📝' },
  { id: 'selects', label: 'Selects', icon: '📋' },
  { id: 'checkboxes', label: 'Checkboxes', icon: '☑️' },
  { id: 'radios', label: 'Radio Buttons', icon: '🔘' },
  { id: 'textareas', label: 'Textareas', icon: '📄' },
  { id: 'cards', label: 'Cards', icon: '🃏' },
  { id: 'footer', label: 'Footer', icon: '📄' },
  { id: 'examples', label: 'Examples', icon: '💡' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [search, setSearch] = useState('');
  const filteredItems = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return navigationItems;
    return navigationItems.filter(
      (item) => item.label.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <aside className="w-64 bg-surface border-r border border-border h-screen fixed left-0 top-0 flex flex-col z-50 transition-colors overflow-y-auto">
      <div className="p-6 border-b border-border bg-surface">
        <h1 className="text-xl font-bold text-fg m-0">React UI</h1>
        <p className="text-sm text-fg-muted mt-1 m-0">Component Library</p>
      </div>
      <div className="p-3 border-b border-border bg-surface">
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-muted pointer-events-none">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search components..."
            className="w-full pl-9 pr-3 py-2 text-[13px] rounded-ui border border-border bg-surface-muted text-fg placeholder:text-fg-subtle focus:outline-none focus:ring-2 focus:ring-primary-ring focus:border-transparent"
            aria-label="Search components"
          />
        </div>
      </div>
      <nav className="p-4 flex-1 overflow-y-auto bg-surface">
        <ul className="space-y-1 m-0 p-0 list-none">
          {filteredItems.length === 0 ? (
            <li className="py-4 text-center text-[13px] text-fg-muted">No results</li>
          ) : (
          filteredItems.map((item) => (
            <li key={item.id} className="m-0 p-0">
              <button
                type="button"
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  'w-full text-left px-4 py-2.5 rounded-ui text-sm font-medium transition-all duration-200 flex items-center gap-3 border-0 cursor-pointer',
                  'focus:outline-none focus:ring-2 focus:ring-primary-ring',
                  activeSection === item.id
                    ? 'bg-primary-muted text-primary'
                    : 'text-fg hover:bg-surface-muted bg-transparent'
                )}
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span className="flex-1">{item.label}</span>
              </button>
            </li>
          )))}
        </ul>
      </nav>
    </aside>
  );
};
