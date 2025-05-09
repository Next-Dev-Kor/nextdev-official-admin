import { Position } from "@prisma/client";

export const positionLabels: Record<Position, string> = {
  FRONTEND: "프론트엔드 개발자",
  BACKEND: "백엔드 개발자",
  DESIGNER: "디자이너",
  PLANNER: "기획자",
};
