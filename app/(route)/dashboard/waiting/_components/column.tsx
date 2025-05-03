"use client";

import { ColumnDef } from "@tanstack/react-table";
import { UserRole } from "@prisma/client";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export type WaitlistUser = {
  id: number;
  userId: number;
  createdAt: Date;
  user: {
    id: number;
    email: string | null;
    nickname: string;
    phoneNumber: string | null;
    profileImage: string | null;
    role: UserRole;
    createdAt: Date;
  };
};

export const columns: ColumnDef<WaitlistUser>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "user.nickname",
    header: "닉네임",
  },
  {
    accessorKey: "user.email",
    header: "이메일",
  },
  {
    accessorKey: "user.phoneNumber",
    header: "전화번호",
    cell: ({ row }) => {
      const phoneNumber = row.original.user.phoneNumber;
      return phoneNumber || "-";
    },
  },
  {
    accessorKey: "createdAt",
    header: "등록일",
    cell: ({ row }) => {
      return dayjs(row.original.createdAt).format("YYYY-MM-DD");
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const user = row.original;

      return (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            // TODO: 승인 처리 로직 구현
            console.log("승인할 사용자:", user);
          }}
        >
          승인
        </Button>
      );
    },
  },
];
