import prisma from "@/lib/prisma";
import { WaitingTable } from "@/app/(route)/dashboard/waiting/_components/waiting-table";

export default async function WaitingPage() {
  const data = await prisma.recruitWaitlist.findMany({
    include: {
      user: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">공고 대기 목록</h1>
      <WaitingTable data={data} />
    </div>
  );
}
