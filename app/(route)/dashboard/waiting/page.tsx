import { columns } from "@/app/(route)/dashboard/waiting/_components/column";
import { DataTable } from "@/app/(route)/dashboard/waiting/_components/data-table";
import prisma from "@/lib/prisma";

async function getData() {
  const waitlist = await prisma.recruitWaitlist.findMany({
    include: {
      user: true,
    },
  });

  return waitlist;
}

export default async function WaitingPage() {
  const data = await getData();

  console.log(data, "<<<<< waiting list");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">대기 목록</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
