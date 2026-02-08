import React, { useState } from 'react';
import { Pagination } from '../../../src';

export default function PaginationCompact() {
  const [page, setPage] = useState(3);
  return (
    <Pagination
      page={page}
      totalPages={5}
      onPageChange={setPage}
      showPrevNext
      siblingCount={0}
    />
  );
}
