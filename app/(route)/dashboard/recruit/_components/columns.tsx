"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Position } from "@prisma/client";

export type RecruitPost = {
  id: number;
  title: string;
  description: string;
  position: Position;
  startDate: string;
  endDate: string;
  createdAt: string;
};

export const columns: ColumnDef<RecruitPost>[] = [
  {
    accessorKey: "title",
    header: "제목",
  },
  {
    accessorKey: "description",
    header: "설명",
    size: 300,
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "position",
    header: "포지션",
  },
  {
    accessorKey: "startDate",
    header: "시작일",
  },
  {
    accessorKey: "endDate",
    header: "종료일",
  },
  {
    accessorKey: "createdAt",
    header: "생성일",
  },
];
