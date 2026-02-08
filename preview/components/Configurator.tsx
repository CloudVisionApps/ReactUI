import React from 'react';
import type { ThemeConfig, RadiusPreset, BorderWidthPreset } from '../useThemeConfig';

interface ConfiguratorProps {
  config: ThemeConfig;
  onConfigChange: (patch: Partial<ThemeConfig>) => void;
  onReset: () => void;
}

const PRIMARY_PRESETS = [
  { name: 'Indigo', value: '#6366F1' },
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Green', value: '#10B981' },
  { name: 'Amber', value: '#F59E0B' },
  { name: 'Rose', value: '#F43F5E' },
  { name: 'Violet', value: '#8B5CF6' },
];

const RADIUS_OPTIONS: { value: RadiusPreset; label: string }[] = [
  { value: 'none', label: 'None (0)' },
  { value: 'sm', label: 'Small' },
  { value: 'md', label: 'Medium' },
  { value: 'lg', label: 'Large' },
  { value: 'full', label: 'Full (pill)' },
];

const BORDER_WIDTH_OPTIONS: { value: BorderWidthPreset; label: string }[] = [
  { value: '1', label: '1px' },
  { value: '2', label: '2px' },
];

export function Configurator({ config, onConfigChange, onReset }: ConfiguratorProps) {
  return (
    <div className="p-4 border-t border-gray-200 dark:border-zinc-700 bg-gray-50/50 dark:bg-zinc-800/30">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold text-gray-500 dark:text-zinc-400 uppercase tracking-wider">
          Theme
        </h2>
        <button
          type="button"
          onClick={onReset}
          className="text-[12px] font-medium text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-200 transition-colors"
        >
          Reset
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-[12px] font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Primary color
          </label>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {PRIMARY_PRESETS.map((preset) => (
              <button
                key={preset.value}
                type="button"
                title={preset.name}
                onClick={() => onConfigChange({ primary: preset.value })}
                className="w-7 h-7 rounded-md border-2 border-transparent hover:border-gray-400 dark:hover:border-zinc-500 transition-colors"
                style={{
                  backgroundColor: preset.value,
                  borderColor: config.primary === preset.value ? 'var(--ui-fg)' : undefined,
                }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="color"
              value={config.primary}
              onChange={(e) => onConfigChange({ primary: e.target.value })}
              className="w-9 h-9 rounded border border-gray-200 dark:border-zinc-600 cursor-pointer bg-transparent p-0"
            />
            <span className="text-[12px] text-gray-500 dark:text-zinc-400 font-mono">
              {config.primary}
            </span>
          </div>
        </div>
        <div>
          <label className="block text-[12px] font-medium text-gray-700 dark:text-zinc-300 mb-1.5">
            Border radius
          </label>
          <select
            value={config.radius}
            onChange={(e) => onConfigChange({ radius: e.target.value as RadiusPreset })}
            className="w-full text-[13px] rounded-lg border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {RADIUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[12px] font-medium text-gray-700 dark:text-zinc-300 mb-1.5">
            Border width
          </label>
          <select
            value={config.borderWidth}
            onChange={(e) => onConfigChange({ borderWidth: e.target.value as BorderWidthPreset })}
            className="w-full text-[13px] rounded-lg border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-800 text-gray-900 dark:text-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {BORDER_WIDTH_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
