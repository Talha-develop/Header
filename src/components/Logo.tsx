import React from "react";

type LogoProps = {
  title?: string;
};

const Logo: React.FC<LogoProps> = ({ title = "Megalodon" }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-600 to-teal-400 flex items-center justify-center shadow-md">
        <span className="text-white font-extrabold">M</span>
      </div>
      <span className="font-semibold text-lg">{title}</span>
    </div>
  );
};

export default Logo;
