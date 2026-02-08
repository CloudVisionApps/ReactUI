import React, { useState } from 'react';
import { Alert } from '../../../src';

export default function AlertDismissible() {
  const [visible, setVisible] = useState(true);
  if (!visible) return <button onClick={() => setVisible(true)} className="text-sm text-gray-600 underline">Show again</button>;
  return (
    <Alert variant="info" onClose={() => setVisible(false)}>
      This alert can be dismissed by clicking the close button.
    </Alert>
  );
}
