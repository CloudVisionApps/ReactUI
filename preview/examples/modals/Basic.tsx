import React, { useState } from 'react';
import { Button, Modal } from '../../../src';

export default function ModalBasic() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
        footer={
          <>
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
          </>
        }
      >
        <p className="text-[#86868B] text-[13px]">
          This is an example modal dialog. You can add any content here.
        </p>
      </Modal>
    </div>
  );
}
