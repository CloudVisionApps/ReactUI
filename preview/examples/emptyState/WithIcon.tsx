import React from 'react';
import { EmptyState } from '../../../src';

const FolderIcon = () => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
  </svg>
);

export default function EmptyStateWithIcon() {
  return (
    <EmptyState
      icon={<FolderIcon />}
      title="No documents"
      description="Upload a file or create a new document to get started."
    />
  );
}
