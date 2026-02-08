import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'react-ui-theme-config';

export type RadiusPreset = 'none' | 'sm' | 'md' | 'lg' | 'full';

export type BorderWidthPreset = '1' | '2';

export interface ThemeConfig {
  primary: string;
  radius: RadiusPreset;
  borderWidth: BorderWidthPreset;
}

const DEFAULT_CONFIG: ThemeConfig = {
  primary: '#6366F1',
  radius: 'md',
  borderWidth: '1',
};

const RADIUS_MAP: Record<RadiusPreset, { ui: string; uiLg: string; uiXl: string }> = {
  none: { ui: '0', uiLg: '0', uiXl: '0' },
  sm: { ui: '4px', uiLg: '6px', uiXl: '8px' },
  md: { ui: '10px', uiLg: '12px', uiXl: '16px' },
  lg: { ui: '14px', uiLg: '18px', uiXl: '22px' },
  full: { ui: '9999px', uiLg: '9999px', uiXl: '9999px' },
};

function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
  if (!m) return null;
  return { r: parseInt(m[1], 16), g: parseInt(m[2], 16), b: parseInt(m[3], 16) };
}

function darkenHex(hex: string, pct: number): string {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;
  const r = Math.round(rgb.r * (1 - pct));
  const g = Math.round(rgb.g * (1 - pct));
  const b = Math.round(rgb.b * (1 - pct));
  return `#${[r, g, b].map((x) => Math.max(0, x).toString(16).padStart(2, '0')).join('')}`;
}

function applyConfig(config: ThemeConfig) {
  const root = document.documentElement;
  root.style.setProperty('--ui-primary', config.primary);
  root.style.setProperty('--ui-primary-hover', darkenHex(config.primary, 0.1));
  root.style.setProperty('--ui-primary-active', darkenHex(config.primary, 0.2));
  const r = hexToRgb(config.primary);
  if (r) {
    root.style.setProperty('--ui-primary-muted', `rgba(${r.r}, ${r.g}, ${r.b}, 0.12)`);
    root.style.setProperty('--ui-primary-ring', `rgba(${r.r}, ${r.g}, ${r.b}, 0.35)`);
  }
  const rad = RADIUS_MAP[config.radius];
  root.style.setProperty('--ui-radius', rad.ui);
  root.style.setProperty('--ui-radius-lg', rad.uiLg);
  root.style.setProperty('--ui-radius-xl', rad.uiXl);
  root.style.setProperty('--ui-border-width', `${config.borderWidth}px`);
}

function loadConfig(): ThemeConfig {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Partial<ThemeConfig>;
      return { ...DEFAULT_CONFIG, ...parsed };
    }
  } catch {
    // ignore
  }
  return { ...DEFAULT_CONFIG };
}

function saveConfig(config: ThemeConfig) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {
    // ignore
  }
}

export function useThemeConfig(): [ThemeConfig, (patch: Partial<ThemeConfig>) => void, () => void] {
  const [config, setConfigState] = useState<ThemeConfig>(loadConfig);

  useEffect(() => {
    applyConfig(config);
  }, [config]);

  const setConfig = useCallback((patch: Partial<ThemeConfig>) => {
    setConfigState((prev) => {
      const next = { ...prev, ...patch };
      saveConfig(next);
      return next;
    });
  }, []);

  const resetConfig = useCallback(() => {
    setConfigState(DEFAULT_CONFIG);
    saveConfig(DEFAULT_CONFIG);
    applyConfig(DEFAULT_CONFIG);
  }, []);

  return [config, setConfig, resetConfig];
}
