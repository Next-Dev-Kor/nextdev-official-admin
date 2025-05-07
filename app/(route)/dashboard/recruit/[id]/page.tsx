import prisma from "@/lib/prisma";
import dayjs from "dayjs";

interface RecruitDetailPageProps {
  params: {
    id: string;
  };
}

const RecruitDetailPage = async ({ params }: RecruitDetailPageProps) => {
  const { id } = params;

  const recruit = await prisma.recruitPost.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return (
    <div>
      <div>{recruit?.title}</div>
      <div>{recruit?.description}</div>
      <div>{recruit?.position}</div>
      <div>{dayjs(recruit?.startDate).format("YYYY-MM-DD")}</div>
      <div>{dayjs(recruit?.endDate).format("YYYY-MM-DD")}</div>
    </div>
  );
};

export default RecruitDetailPage;
