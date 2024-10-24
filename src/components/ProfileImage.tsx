interface Props {
  size: "large" | "medium";
  children: string;
}

export default function ProfileImage({size, children}: Props) {
  const profileWidth = {
    large: "w-[38px]",
    medium: "w-[34px]"
  }
  const profileHeight = {
    large: "h-[38px]",
    medium: "h-[34px]"
  }
  const backgroundColor = children.charAt(0) === "+" ? "bg-vanillaIce-200" : "bg-blue";
  const firstText = children.charAt(0) === "+" ? children : children.charAt(0);
  const textColorValue = children.charAt(0) === "+" ? "text-mandy-500" : "text-white";

  return (
      <div className={`${profileWidth[size]} ${profileHeight[size]} ring-2 ring-white ${backgroundColor} rounded-full flex items-center justify-center`}>
        <small className={`${textColorValue} text-sm font-semibold`}>{firstText}</small>
      </div>
  )
}