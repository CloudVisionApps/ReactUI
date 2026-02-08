import React, { useState } from 'react';
import { Button } from '../../../src';

export default function ButtonStates() {
  const [isLoading, setIsLoading] = useState(false);
  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };
  return (
    <div className="flex flex-wrap gap-4 items-center">
      <Button isLoading={isLoading} onClick={handleClick}>
        {isLoading ? 'Loading...' : 'Click to Load'}
      </Button>
      <Button disabled>Disabled</Button>
    </div>
  );
}
