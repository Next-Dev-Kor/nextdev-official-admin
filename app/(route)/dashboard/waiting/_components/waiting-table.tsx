"use client";

import { columns } from "@/app/(route)/dashboard/waiting/_components/column";
import { DataTable } from "@/app/(route)/dashboard/waiting/_components/data-table";
import { RecruitWaitlist, User } from "@prisma/client";

type WaitingTableProps = {
  data: (RecruitWaitlist & { user: User })[];
};

export function WaitingTable({ data }: WaitingTableProps) {
  return <DataTable columns={columns} data={data} buttonText="전체 보내기" />;
}
