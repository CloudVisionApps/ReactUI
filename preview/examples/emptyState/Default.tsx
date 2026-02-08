import React from 'react';
import { EmptyState, Button } from '../../../src';

export default function EmptyStateDefault() {
  return (
    <EmptyState
      title="No items yet"
      description="Get started by creating your first item."
      action={<Button variant="primary" size="small">Create item</Button>}
    />
  );
}
