import React from 'react';
import { Alert } from '../../../src';

export default function AlertVariants() {
  return (
    <div className="space-y-4">
      <Alert variant="info" title="Information">
        This is an informational alert message.
      </Alert>
      <Alert variant="success" title="Success">
        Your action was completed successfully!
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review this important information.
      </Alert>
      <Alert variant="danger" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </div>
  );
}
