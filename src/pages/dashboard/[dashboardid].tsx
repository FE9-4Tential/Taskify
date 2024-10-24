import NavBar from "@/components/NavBar";
import { useRouter } from "next/router"
import crownIcon from '@/../public/icons/crown_icon.svg'
import Image from "next/image";
import { useEffect, useState } from "react";

const nickName: string = "포텐셜"
const mockData: string[] = ["TIGER", "BEAR", "DOG", "CAT", "RABBIT"];

export default function Page() {
  const [members, setMembers] = useState<string[]>([]);
  const router = useRouter();
  const id = router.query['dashboardid'];

  useEffect(() => {

    setMembers(mockData);
  }, [])

  return (
    <div>
      {/* <NavBar members={members}>
        내 대시보드
      </NavBar> */}
      <NavBar myNickName={nickName} members={members}>
        비브리지
        <div><Image src={crownIcon} alt="왕관"/></div>
      </NavBar>
    </div>
  )
}