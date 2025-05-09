import prisma from "@/lib/prisma";
import dayjs from "dayjs";
import { notFound } from "next/navigation";

interface RecruitDetailPageProps {
  params: {
    id: string;
  };
}

const RecruitDetailPage = async ({ params }: RecruitDetailPageProps) => {
  const { id } = params;

  // id가 유효한 숫자인지 확인
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{recruit.title}</h1>
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">포지션</h2>
          <p>{recruit.position}</p>
        </div>
        <div>
          <h2 className="font-semibold">설명</h2>
          <p>{recruit.description}</p>
        </div>
        <div>
          <h2 className="font-semibold">채용 기간</h2>
          <p>
            {dayjs(recruit.startDate).format("YYYY-MM-DD")} ~{" "}
            {dayjs(recruit.endDate).format("YYYY-MM-DD")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruitDetailPage;
