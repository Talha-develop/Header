import React from "react";

export type CTAButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
};

const CTAButton: React.FC<CTAButtonProps> = ({
  children = "Get Started",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
    >
      {children}
    </button>
  );
};

export default CTAButton;
