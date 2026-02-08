import React from 'react';
import { Table, TableHead, TableBody, TableRow, TableHeader, TableCell } from '../../../src';

export default function TableStriped() {
  return (
    <Table striped>
      <TableHead>
        <TableRow>
          <TableHeader>Product</TableHeader>
          <TableHeader>Price</TableHeader>
          <TableHeader>Stock</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell>Widget A</TableCell>
          <TableCell>$24.99</TableCell>
          <TableCell>120</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget B</TableCell>
          <TableCell>$19.99</TableCell>
          <TableCell>85</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Widget C</TableCell>
          <TableCell>$34.99</TableCell>
          <TableCell>42</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}
