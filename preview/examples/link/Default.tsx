import React from 'react';
import { Link } from '../../../src';

export default function LinkDefault() {
  return (
    <div className="space-y-2">
      <p>
        <Link href="#">Default link</Link>
      </p>
      <p>
        <Link href="#" variant="muted">Muted link</Link>
      </p>
      <p>
        <Link href="#" variant="underline">Underline link</Link>
      </p>
    </div>
  );
}
