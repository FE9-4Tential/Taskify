import Image from "next/image";

interface CustomBtnProps {
  content?: string;
  paddingTopBottom: number;
  paddingRightLeft: number;
  fontSize?: number;
  fontWeight?: "500" | "600" | "700";
  borderRadius: number;
  onClick?: () => void;
}

export default function CustomBtn({
  content,
  paddingTopBottom,
  paddingRightLeft,
  fontSize,
  fontWeight,
  borderRadius,
  onClick,
}: CustomBtnProps) {
  return (
    <div className={"flex"}>
      <button
        onClick={onClick}
        className={
          "bg-white flex items-center justify-center gap-3 border border-gray-400"
        }
        style={{
          padding: `${paddingTopBottom}px ${paddingRightLeft}px`,
          fontSize: `${fontSize}px`,
          fontWeight: `${fontWeight}`,
          borderRadius: `${borderRadius}px`,
        }}
      >
        <span>{content}</span>
        {content !== "대시보드 삭제하기" ? (
          <Image src="/svg/plus.svg" alt="+" width={20} height={20} />
        ) : null}
      </button>
    </div>
  );
}
