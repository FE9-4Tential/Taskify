import { ReactNode } from "react";

interface ButtonProps {
  paddingTopBottom: string;
  paddingRightLeft: string;
  radius: "4" | "6" | "8";
  backgroundColor: "purple" | "white" | "white2";
  fontSize: "12" | "14" | "16" | "18";
  children: ReactNode;
  disabled: boolean;
  onClick: () => void;
}

export default function BoxButton({
  paddingTopBottom,
  paddingRightLeft,
  radius,
  backgroundColor,
  fontSize,
  children,
  disabled = false,
  onClick,
}: ButtonProps) {
  const borderValue = {
    purple: "",
    white: "border-solid border-gray-300 border",
    white2: "border-solid border-gray-300 border",
  };

  const radiusValue = {
    "4": "rounded",
    "6": "rounded-md",
    "8": "rounded-lg",
  };

  const backgroundColorValue = {
    purple: "bg-indigo-700",
    white: "bg-white",
    white2: "bg-white",
  };

  const hoverColorValue = {
    purple: "hover:bg-indigo-600",
    white: "hover:bg-gray-100",
    white2: "hover:bg-gray-100",
  };

  const textColorValue = {
    purple: "text-white",
    white: "text-indigo-700",
    white2: "text-gray-500"
  };

  const fontSizeValue = {
    "12": "text-xs",
    "14": "text-sm",
    "16": "text-base",
    "18": "text-lg",
  };

  return (
    <button
      style={{
        padding: `${paddingTopBottom}px ${paddingRightLeft}px`,
      }}
      className={`${borderValue[backgroundColor]} ${radiusValue[radius]} ${backgroundColorValue[backgroundColor]} ${hoverColorValue[backgroundColor]} ${textColorValue[backgroundColor]} ${fontSizeValue[fontSize]} flex items-center gap-x-2 text-center font-medium  disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:text-white disabled:cursor-not-allowed`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
