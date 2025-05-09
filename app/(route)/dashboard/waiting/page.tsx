"use client";

import { columns } from "@/app/(route)/dashboard/waiting/_components/column";
import { DataTable } from "@/app/(route)/dashboard/waiting/_components/data-table";
import { useEffect, useState } from "react";

export default function WaitingPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/waiting");
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleButtonClick = () => {
    // TODO: 일괄 승인 처리 로직 구현
    console.log("전체 보내기");
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-4">공고 대기 목록</h1>
      <DataTable
        columns={columns}
        data={data}
        buttonText="전체 보내기"
        onButtonClick={handleButtonClick}
      />
    </div>
  );
}
