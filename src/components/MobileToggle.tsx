import React from "react";
import { Menu, X } from "lucide-react";

export type MobileToggleProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const MobileToggle: React.FC<MobileToggleProps> = ({ open, setOpen }) => {
  return (
    <div className="md:hidden flex items-center">
      <button
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
};

export default MobileToggle;
