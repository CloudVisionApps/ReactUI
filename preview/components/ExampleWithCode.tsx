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
    <div className="rounded-ui-lg overflow-hidden bg-surface border border-border shadow-sm transition-colors">
      {title && (
        <div className="px-5 py-3.5 border-b border-border bg-surface-subtle">
          <h3 className="text-[13px] font-semibold text-fg tracking-tight">{title}</h3>
        </div>
      )}
      <div className="p-6 min-h-[60px] flex items-center">
        {children}
      </div>
      <div className="border-t border-border bg-surface-subtle px-4 py-2.5 flex items-center justify-between gap-3">
        <span className="text-[11px] font-medium text-fg-muted uppercase tracking-wider">Code</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowCode((v) => !v)}
            className="text-[13px] font-medium text-fg-muted hover:text-fg transition-colors rounded-ui px-2 py-1"
          >
            {showCode ? 'Hide' : 'Show'}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="text-[13px] font-medium px-3 py-1.5 rounded-ui bg-primary text-white hover:bg-primary-hover transition-colors focus:outline-none focus:ring-2 focus:ring-primary-ring"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      {showCode && (
        <div className="border-t border-border bg-surface-muted overflow-x-auto">
          <pre className="p-5 text-[13px] text-fg font-mono leading-relaxed m-0">
            <code>{code}</code>
          </pre>
        </div>
      )}
    </div>
  );
}
