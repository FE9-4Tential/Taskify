import React, { useState } from "react";
import SelectColorCircle from "./SelectColorCircle";
import { updateDashboard } from "@/libs/api/dashboards";

interface EditDashboardCardProps {
  dashboardId: number;
  dashboardTitle: string;
}

export default function EditDashboardCard({
  dashboardId,
  dashboardTitle,
}: EditDashboardCardProps) {
  const [title, setTitle] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  // 대시보드 변경요청 api
  const editDashboard = async (): Promise<void> => {
    try {
      const data = await updateDashboard(dashboardId, {
        title: title,
        color: selectedColor,
      });
      console.log("대시보드가 성공적으로 업데이트되었습니다:", data);
    } catch (error) {
      console.error("대시보드 업데이트 실패:", error);
    }
  };

  return (
    <>
      <div className="h-[344px] w-[620px] gap-3 rounded-2xl bg-white p-9 shadow-lg">
        {/* 대시보드 title을 받아서 출력 */}
        <div>
          <h2 className="mb-7 text-2xl font-bold">
            비브리지
            {dashboardTitle}
          </h2>
          <label htmlFor="대시보드" className={"text-lg font-medium"}>
            대시보드 이름
          </label>
          {/* 변경할 대시보드 title 입력 */}
          <input
            type="text"
            placeholder="생성할 대시보드 이름을 입력해 주세요"
            className="mb-5 mt-4 w-full rounded-lg border p-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div>
            {/* 색상 선택 동그라미 */}
            <ul className="flex gap-2">
              {["#7AC555", "#760DDE", "#FFA500", "#76A5EA", "#E876EA"].map(
                (color) => (
                  <SelectColorCircle
                    key={color}
                    color={color}
                    setColor={setColor}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                  />
                ),
              )}
            </ul>
          </div>
          {/* 변경 요청을 보내는 버튼 */}
          <div className="mt-8 flex justify-end gap-2 rounded-lg border border-gray-200">
            <button
              className={
                "h-14 w-full rounded px-4 py-2 hover:bg-violet hover:text-white"
              }
              onClick={editDashboard}
            >
              변경
            </button>
          </div>
        </div>
      </div>
    </>
  );
}