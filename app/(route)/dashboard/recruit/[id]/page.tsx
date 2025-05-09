import prisma from "@/lib/prisma";
import { notFound } from "next/navigation";
import RecruitDetailForm from "@/app/(route)/dashboard/recruit/[id]/recruit-detail-form";

interface RecruitDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

const RecruitDetailPage = async ({ params }: RecruitDetailPageProps) => {
  const { id } = await params;

  const recruitId = parseInt(id);
  if (isNaN(recruitId)) {
    notFound();
  }

  const recruit = await prisma.recruitPost.findUnique({
    where: {
      id: recruitId,
    },
  });

  if (!recruit) {
    notFound();
  }

  return <RecruitDetailForm recruit={recruit} />;
};

export default RecruitDetailPage;
