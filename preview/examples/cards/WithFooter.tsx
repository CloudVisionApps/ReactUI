import React from 'react';
import { Card, Button } from '../../../src';

export default function CardWithFooter() {
  return (
    <Card title="Card with Footer" footer={<Button>Action</Button>}>
      Title, body, and footer with an action button.
    </Card>
  );
}
