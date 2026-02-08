import React, { useState, useMemo } from 'react';
import {
  Search,
  MousePointer,
  Compass,
  Target,
  FileText,
  Square,
  User,
  AlertTriangle,
  SquareStack,
  LayoutList,
  PanelTop,
  ChevronDown,
  MessageCircle,
  Route,
  Loader2,
  BarChart3,
  ToggleLeft,
  Minus,
  Box,
  FileStack,
  Table2,
  Link2,
  Inbox,
  Palette,
  Type,
  ChevronDownCircle,
  CheckSquare,
  CircleDot,
  AlignLeft,
  CreditCard,
  Lightbulb,
  LucideIcon,
} from 'lucide-react';
import { cn } from '../../src/utils/cn';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

interface NavItem {
  id: string;
  label: string;
  Icon: LucideIcon;
}

interface NavGroup {
  label: string;
  items: NavItem[];
}

const navigationGroups: NavGroup[] = [
  {
    label: 'Layout',
    items: [
      { id: 'navigation', label: 'Navigation', Icon: Compass },
      { id: 'hero', label: 'Hero Sections', Icon: Target },
      { id: 'footer', label: 'Footer', Icon: FileText },
    ],
  },
  {
    label: 'Components',
    items: [
      { id: 'buttons', label: 'Buttons', Icon: MousePointer },
      { id: 'badges', label: 'Badges', Icon: Square },
      { id: 'avatars', label: 'Avatars', Icon: User },
      { id: 'alerts', label: 'Alerts', Icon: AlertTriangle },
      { id: 'modals', label: 'Modals', Icon: SquareStack },
      { id: 'tabs', label: 'Tabs', Icon: LayoutList },
      { id: 'accordions', label: 'Accordions', Icon: ChevronDown },
      { id: 'tooltips', label: 'Tooltips', Icon: MessageCircle },
      { id: 'breadcrumbs', label: 'Breadcrumbs', Icon: Route },
      { id: 'spinners', label: 'Spinners', Icon: Loader2 },
      { id: 'progress', label: 'Progress', Icon: BarChart3 },
      { id: 'switches', label: 'Switches', Icon: ToggleLeft },
      { id: 'dividers', label: 'Dividers', Icon: Minus },
      { id: 'skeletons', label: 'Skeletons', Icon: Box },
      { id: 'pagination', label: 'Pagination', Icon: FileStack },
      { id: 'table', label: 'Table', Icon: Table2 },
      { id: 'link', label: 'Link', Icon: Link2 },
      { id: 'emptyState', label: 'Empty State', Icon: Inbox },
      { id: 'appDesigns', label: 'App Designs', Icon: Palette },
    ],
  },
  {
    label: 'Forms',
    items: [
      { id: 'inputs', label: 'Inputs', Icon: Type },
      { id: 'selects', label: 'Selects', Icon: ChevronDownCircle },
      { id: 'checkboxes', label: 'Checkboxes', Icon: CheckSquare },
      { id: 'radios', label: 'Radio Buttons', Icon: CircleDot },
      { id: 'textareas', label: 'Textareas', Icon: AlignLeft },
    ],
  },
  {
    label: 'Display',
    items: [
      { id: 'cards', label: 'Cards', Icon: CreditCard },
      { id: 'examples', label: 'Examples', Icon: Lightbulb },
    ],
  },
];

const allItems = navigationGroups.flatMap((g) => g.items);

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [search, setSearch] = useState('');
  const filteredGroups = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return navigationGroups;
    const matched = allItems.filter(
      (item) =>
        item.label.toLowerCase().includes(q) || item.id.toLowerCase().includes(q)
    );
    if (matched.length === 0) return [];
    const matchedIds = new Set(matched.map((i) => i.id));
    return navigationGroups
      .map((group) => ({
        ...group,
        items: group.items.filter((i) => matchedIds.has(i.id)),
      }))
      .filter((g) => g.items.length > 0);
  }, [search]);

  return (
    <aside className="w-64 bg-surface/80 backdrop-blur-xl border-r border-border h-screen fixed left-0 top-0 flex flex-col z-50 transition-colors overflow-y-auto">
      <div className="p-6 border-b border-border bg-surface">
        <h1 className="text-xl font-bold text-fg m-0">React UI</h1>
        <p className="text-sm text-fg-muted mt-1 m-0">Component Library</p>
      </div>
      <div className="p-3 border-b border-border bg-surface">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-fg-muted pointer-events-none" />
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
        {filteredGroups.length === 0 ? (
          <p className="py-4 text-center text-[13px] text-fg-muted">No results</p>
        ) : (
          <ul className="space-y-6 m-0 p-0 list-none">
            {filteredGroups.map((group) => (
              <li key={group.label} className="m-0 p-0">
                <h2 className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-fg-muted">
                  {group.label}
                </h2>
                <ul className="space-y-1 m-0 p-0 list-none">
                  {group.items.map((item) => {
                    const Icon = item.Icon;
                    return (
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
                          <Icon className="w-4 h-4 shrink-0" strokeWidth={2} />
                          <span className="flex-1 truncate">{item.label}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </aside>
  );
};
