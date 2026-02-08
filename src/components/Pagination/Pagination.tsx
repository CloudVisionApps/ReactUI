import React from 'react';
import { cn } from '../../utils/cn';

export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showPrevNext?: boolean;
  siblingCount?: number;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPages,
  onPageChange,
  showPrevNext = true,
  siblingCount = 1,
  className = '',
  ...props
}) => {
  const range = (start: number, end: number) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, i) => start + i);
  };

  const getItems = () => {
    const totalNumbers = siblingCount * 2 + 3;
    const totalBlocks = totalNumbers + 2;
    if (totalPages <= totalBlocks) return range(1, totalPages);
    const leftSibling = Math.max(page - siblingCount, 1);
    const rightSibling = Math.min(page + siblingCount, totalPages);
    const showLeftDots = leftSibling > 2;
    const showRightDots = rightSibling < totalPages - 1;
    if (!showLeftDots && showRightDots) return [...range(1, totalNumbers - 1), 'ellipsis', totalPages];
    if (showLeftDots && !showRightDots) return [1, 'ellipsis', ...range(totalPages - totalNumbers + 2, totalPages)];
    return [1, 'ellipsis', ...range(leftSibling, rightSibling), 'ellipsis', totalPages];
  };

  const items = getItems();
  const prevDisabled = page <= 1;
  const nextDisabled = page >= totalPages;

  const btnClass = 'min-w-[36px] h-9 px-2 rounded-ui text-[13px] font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-ring focus-visible:ring-offset-2';

  return (
    <nav aria-label="Pagination" className={cn('flex items-center gap-1', className)} {...props}>
      {showPrevNext && (
        <button
          type="button"
          aria-label="Previous page"
          disabled={prevDisabled}
          onClick={() => onPageChange(page - 1)}
          className={cn(
            btnClass,
            'text-fg hover:bg-surface-muted disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
          )}
        >
          ‹
        </button>
      )}
      {items.map((item, i) =>
        item === 'ellipsis' ? (
          <span key={`ellipsis-${i}`} className="min-w-[36px] h-9 flex items-center justify-center text-fg-muted text-[13px]">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            aria-label={item === page ? `Page ${item}, current` : `Go to page ${item}`}
            aria-current={item === page ? 'page' : undefined}
            onClick={() => onPageChange(item as number)}
            className={cn(
              btnClass,
              item === page
                ? 'bg-primary text-white hover:bg-primary-hover'
                : 'text-fg hover:bg-surface-muted'
            )}
          >
            {item}
          </button>
        )
      )}
      {showPrevNext && (
        <button
          type="button"
          aria-label="Next page"
          disabled={nextDisabled}
          onClick={() => onPageChange(page + 1)}
          className={cn(
            btnClass,
            'text-fg hover:bg-surface-muted disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-transparent'
          )}
        >
          ›
        </button>
      )}
    </nav>
  );
};
