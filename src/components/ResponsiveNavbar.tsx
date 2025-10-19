import React, { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import CTAButton from "./CTAButton";
import MobileToggle from "./MobileToggle";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";

const ResponsiveNavbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const nagivate = useNavigate();
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLinks onClickLink={() => {}} />
            <CTAButton
              onClick={() => {
                nagivate("/about");
              }}
            />
          </nav>

          {/* Mobile controls */}
          <MobileToggle open={open} setOpen={setOpen} />
        </div>
      </div>

      {/* MobileMenu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

export default ResponsiveNavbar;
