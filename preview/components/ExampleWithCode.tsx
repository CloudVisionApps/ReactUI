import React, { useState } from 'react';

export interface ExampleWithCodeProps {
  title?: string;
  code: string;
  children: React.ReactNode;
  /** If true, code block is expanded by default */
  defaultShowCode?: boolean;
}

export function ExampleWithCode({
  title,
  code,
  children,
  defaultShowCode = false,
}: ExampleWithCodeProps) {
  const [showCode, setShowCode] = useState(defaultShowCode);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-sm dark:shadow-none transition-colors">
      {title && (
        <div className="px-5 py-3.5 border-b border-gray-200 dark:border-zinc-700 bg-gray-50/80 dark:bg-zinc-800/60">
          <h3 className="text-[13px] font-semibold text-gray-900 dark:text-white tracking-tight">{title}</h3>
        </div>
      )}
      <div className="p-6 min-h-[60px] flex items-center">
        {children}
      </div>
      <div className="border-t border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/60 px-4 py-2.5 flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium text-gray-500 dark:text-zinc-400 uppercase tracking-wider">Code</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCode((v) => !v)}
            className="text-[13px] font-medium text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-md px-2 py-1"
          >
            {showCode ? 'Hide' : 'Show'}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[13px] font-medium px-3 py-1.5 rounded-lg bg-gray-800 dark:bg-zinc-700 text-white hover:bg-gray-700 dark:hover:bg-zinc-600 transition-colors"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      {showCode && (
        <div className="border-t border-gray-200 dark:border-zinc-700 bg-zinc-900 dark:bg-zinc-950 overflow-x-auto">
          <pre className="p-5 text-[13px] text-zinc-100 font-mono leading-relaxed m-0">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
