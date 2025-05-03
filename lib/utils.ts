import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTitleByPath = (pathname: string) => {
  const pathMap: Record<string, string> = {
    "/dashboard": "대시보드",
    "/dashboard/waiting": "대기 목록",
    "/dashboard/recruit": "모집 관리",
    "/dashboard/users": "사용자 관리",
    "/dashboard/team": "팀 관리",
  };

  return pathMap[pathname] || "";
};
