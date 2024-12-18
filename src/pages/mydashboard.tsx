import InvitedDashboard from "@/components/card-table/InvitedDashboard";
import CreateDashboardModal from "@/components/modal/CreateDashboardModal";
import DashboardCard from "@/components/modal/DashboardCard";
import DashboardPagination from "@/components/modal/DashboardPagination";
import { Dashboard, getDashboardList } from "@/libs/api/dashboards";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Mydashboard() {
  // 새로운 대시보드 모달창 열기
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  // 대시보드 데이터 불러오기
  const [dashboardData, setDashboardData] = useState<Dashboard[]>([]);
  const [dashboardPage, setDashboardPage] = useState<number>(1);
  const [dashboardCount, setDashboardCount] = useState<number>(0);
  const router = useRouter();

  const loadDashboard = async (): Promise<void> => {
    const data = await getDashboardList({
      navigationMethod: "pagination",
      page: dashboardPage,
      size: 5,
    });
    setDashboardData(data.dashboards);
    setDashboardCount(data.totalCount);
  };

  useEffect(() => {
    loadDashboard();
  }, [dashboardPage]);

  // 대시보드 상세페이지 이동
  const handleNavigate = (id: number | string) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <div className={"mb-10 min-h-screen bg-gray-100"}>
      <Head>
        <title> Taskify | mydashboard</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <div className={"min-h-screen w-full"}>
        <main className={"flex h-screen grow flex-col p-5"}>
          <section>
            <ul className="grid grid-rows-1 gap-2 xl:max-w-[1024px] xl:grid-cols-3 xl:grid-rows-3">
              <li className={"w-full"}>
                <div
                  className={
                    "flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white p-4 hover:bg-violet-8"
                  }
                  onClick={openModal}
                >
                  새로운 대시보드
                  <Image src="/svg/plus.svg" alt="+" width={20} height={20} />
                </div>
              </li>
              {dashboardData.map((dashboard) => {
                return (
                  <li
                    key={dashboard.id}
                    className={
                      "cursor-pointer rounded-lg border border-gray-300 bg-white hover:bg-violet-8"
                    }
                    onClick={() => handleNavigate(dashboard.id)}
                  >
                    <DashboardCard
                      dashboard={dashboard}
                      isArrow={true}
                      isResponse={true}
                    />
                  </li>
                );
              })}
              <div className="flex max-h-10 justify-end md:col-span-2 xl:col-span-3">
                {/* 페이지네이션 버튼 */}
                <DashboardPagination
                  dashboardCount={dashboardCount}
                  dashboardPage={dashboardPage}
                  setDashboardPage={setDashboardPage}
                  data={5}
                />
              </div>
            </ul>
          </section>
          <section
            className={"mt-12 h-[500px] w-full rounded-lg xl:max-w-[1024px]"}
          >
            <InvitedDashboard />
          </section>

          {/* 모달창  */}
          <CreateDashboardModal
            isOpen={isModalOpen}
            refresh={loadDashboard}
            closeModal={closeModal}
          />
        </main>
      </div>
    </div>
  );
}

const getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

Mydashboard.getLayout = getLayout;
