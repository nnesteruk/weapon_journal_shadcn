import type { SxProps } from "@mui/material";
import type { GridColDef, GridRenderPaginationProps } from "@mui/x-data-grid";
import type { JSXElementConstructor } from "react";

export type ColumnType<T> = {
  key: keyof T;
  label: string;
  type?: "number" | "string" | "date" | "boolean";
  attributes?: Partial<{
    align: "center" | "left" | "right";
    className: string;
    onClick: (e?: React.MouseEvent<HTMLTableCellElement>) => void;
  }>;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
};

export type TableProps<T extends Record<string, unknown>> = {
  columns: ColumnType<T>[];
  data: T[] | null;
  tableContainerSx?: SxProps;
  tableSx?: SxProps;
  tableHeadSx?: SxProps;
  tableHeadRowSx?: SxProps;
  tableHeadCellSx?: SxProps;
  tableBodySx?: SxProps;
  tableBodyRowSx?: SxProps;
  tableBodyRowCellSx?: SxProps;
};

export type EntityTableProps<T extends { id: number | string }> = {
  rows: T[];
  columns: GridColDef<T>[];
  CustomPagination?: JSXElementConstructor<GridRenderPaginationProps>;
};
