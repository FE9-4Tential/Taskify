import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import BoxButton from "./BoxButton";
import ProfileImage from "./ProfileImage";
import settingIcon from '@/../public/icons/setting.svg';
import addBoxIcon from '@/../public/icons/addBox.svg';

interface Props {
  myNickName: string;
  members: string[];
  children: ReactNode;
}

export default function NavBar({myNickName, members, children}: Props) {
  const [screenSize, setScreenSize] = useState<string>("mobile");
  const [displayCount, setDisplayCount] = useState(2);

  const visibleMembers = members.slice(0, displayCount);
  const remainingCount = members.length - displayCount;
  const buttonBorder = members.length === 0 ? "border-r border-solid border-gray-300 pr-4 mr-4  md:pr-8 md:mr-8 xl:pr-9 xl:mr-9"  : "mr-4";
  const profileImageSize = screenSize === "mobile" ? "medium" as "medium" : "large" as "large";
  const buttonProps = {
    paddingTopBottom: screenSize === "mobile" ? "6" : "10",
    paddingRightLeft: screenSize === "mobile" ? "12" : "16",
    radius: screenSize === "mobile" ? "6" as "6" : "8" as "8",
    backgroundColor: "white2" as "white2",
    fontSize: screenSize === "pc" ? "16" as "16" : "14" as "14",
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("mobile");
        setDisplayCount(2);
      } else if (width < 1280) {
        setScreenSize("tablet");
        setDisplayCount(2);
      } else {
        setScreenSize("pc");
        setDisplayCount(4);
      }
    };

    handleResize(); // 초기 사이즈 설정
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 리스너 등록

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return(
    <nav className="pr-3 pl-[56px] py-3.5 w-full bg-white border-b border-solid border-gray-300 flex justify-between items-center md:py-4 md:pr-10 md:pl-[200px] xl:py-4 xl:pr-20 xl:pl-[340px]">  
      {(screenSize === "pc" || members.length === 0) && <span className={`flex items-center gap-x-2 ${screenSize === "mobile" ? "text-[16px]" : "text-[20px]"} font-bold`}>{children}</span>}
      <div className="flex items-center">
        <div className={`${buttonBorder} flex gap-x-1.5 md:mr-8 md:gap-x-3 xl:mr-10 xl:gap-x-4`}>
          {screenSize === "mobile" ? <BoxButton {...buttonProps} disabled={false} onClick={() => {alert('관리')}}>관리</BoxButton> : <BoxButton {...buttonProps} disabled={false} onClick={() => {alert('관리')}}><div><Image src={settingIcon} alt="설정"/></div>관리</BoxButton>}
          {screenSize === "mobile" ?<BoxButton {...buttonProps} disabled={false} onClick={() => {alert('초대하기')}}>초대하기</BoxButton> : <BoxButton {...buttonProps} disabled={false} onClick={() => {alert('관리')}}><div><Image src={addBoxIcon} alt="초대하기"/></div>초대하기</BoxButton>}
        </div>
        {members.length !== 0 && <div className="flex -space-x-2 pr-3 mr-3 border-r border-solid border-gray-300 md:pr-6 md:mr-6 xl:pr-9 xl:mr-9">
          {visibleMembers?.map((item, index) => (
            <ProfileImage key={index} size={profileImageSize}>{item}</ProfileImage>
          ))}
          {remainingCount > 0 && (<ProfileImage size={profileImageSize}>{"+" + remainingCount.toString()}</ProfileImage>)}
        </div>}
        <ProfileImage size={profileImageSize}>{myNickName}</ProfileImage>
        {screenSize !== "mobile" && <span className="pl-3 text-base">{myNickName}</span>}
      </div>
    </nav>
  )
}