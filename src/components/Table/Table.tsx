import React from 'react';
import { cn } from '../../utils/cn';

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
}

export const Table: React.FC<TableProps> = ({
  striped = false,
  bordered = false,
  className = '',
  children,
  ...props
}) => (
  <div className="overflow-x-auto rounded-ui border border-border">
    <table
      className={cn(
        'w-full text-left text-sm',
        striped && '[&>tbody>tr:nth-child(even)]:bg-surface-muted/50',
        bordered && '[&_td]:border-b [&_td]:border-border [&_th]:border-b [&_th]:border-border',
        className
      )}
      {...props}
    >
      {children}
    </table>
  </div>
);

export const TableHead: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({
  className = '',
  ...props
}) => <thead className={cn('bg-surface-muted text-fg-muted text-[12px] font-semibold uppercase tracking-wide', className)} {...props} />;

export const TableBody: React.FC<React.HTMLAttributes<HTMLTableSectionElement>> = ({ className = '', ...props }) => (
  <tbody className={cn('text-fg', className)} {...props} />
);

export const TableRow: React.FC<React.HTMLAttributes<HTMLTableRowElement>> = ({ className = '', ...props }) => (
  <tr className={cn('transition-colors hover:bg-surface-muted/50', className)} {...props} />
);

export const TableHeader: React.FC<React.ThHTMLAttributes<HTMLTableCellElement>> = ({
  className = '',
  ...props
}) => <th className={cn('px-4 py-3', className)} {...props} />;

export const TableCell: React.FC<React.TdHTMLAttributes<HTMLTableCellElement>> = ({
  className = '',
  ...props
}) => <td className={cn('px-4 py-3', className)} {...props} />;
