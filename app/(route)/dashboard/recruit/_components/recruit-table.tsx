"use client";

import { useRouter } from "next/navigation";
import { DataTable } from "@/app/(route)/dashboard/waiting/_components/data-table";
import { columns, RecruitPost } from "./columns";

interface RecruitTableProps {
  data: RecruitPost[];
}

export function RecruitTable({ data }: RecruitTableProps) {
  const router = useRouter();

  const handleRowClick = (row: RecruitPost) => {
    router.push(`/dashboard/recruit/${row.id}`);
  };

  return (
    <DataTable
      columns={columns}
      data={data}
      buttonText="공고글 등록"
      onRowClick={handleRowClick}
    />
  );
}
