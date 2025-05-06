import { columns, RecruitPost } from "./_components/columns";

import prisma from "@/lib/prisma";
import dayjs from "dayjs";
import { DataTable } from "@/app/(route)/dashboard/waiting/_components/data-table";

const getData = async (): Promise<RecruitPost[]> => {
  const posts = await prisma.recruitPost.findMany();
  return posts.map((p) => ({
    ...p,
    position: p.position ?? "-",
    startDate: dayjs(p.startDate).format("YYYY-MM-DD"),
    endDate: dayjs(p.endDate).format("YYYY-MM-DD"),
    createdAt: dayjs(p.createdAt).format("YYYY-MM-DD"),
  }));
};

export default async function RecruitPage() {
  const data = await getData();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">공고글 목록</h1>
      <DataTable columns={columns} data={data} buttonText="공고글 등록" />
    </div>
  );
}
