import Image from "next/image";

interface DashboardCardProps {
  width: number;
  height: number;
  border?: string;
  isArrowOpen?: boolean;
}

export default function DashboardCard({
  width,
  height,
  border,
  isArrowOpen,
}: DashboardCardProps) {
  return (
    <div className={"flex"}>
      <div
        className={
          "bg-white flex items-center justify-between rounded-lg	p-5 hover:bg-violet active:bg-violet-8"
        }
        style={{
          width: `${width}px`,
          height: `${height}px`,
          border: `${border}`,
        }}
      >
        <div className={"flex gap-3"}>
          <span role="colorCircle"> 🔴 </span>
          <span role="dashboardName"> 비브리지 </span>
          <Image src="/svg/crown.svg" alt="왕관" width={18} height={14} />
        </div>
        {isArrowOpen ? (
          <Image src="/svg/dashboardArrow.svg" alt=">" width={18} height={18} />
        ) : null}
      </div>
    </div>
  );
}
