import React, { useState } from 'react';
import { Pagination } from '../../../src';

export default function PaginationDefault() {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      page={page}
      totalPages={10}
      onPageChange={setPage}
      showPrevNext
    />
  );
}
