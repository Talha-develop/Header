import React from "react";
import { NavLink } from "react-router-dom";

export type NavLinksProps = {
  onClickLink?: () => void;
};

const CustomLink: React.FC<{
  children: React.ReactNode;
  to: string;
  onClickLink?: () => void;
}> = ({ children, to, onClickLink }) => (
  <NavLink
    to={to}
    onClick={onClickLink}
    className={({ isActive }) =>
      `block px-3 py-2 rounded-md ${
        isActive
          ? "text-blue-600 font-semibold"
          : "text-gray-700 hover:text-gray-900"
      }`
    }
  >
    {children}
  </NavLink>
);

const NavLinks: React.FC<NavLinksProps> = ({ onClickLink }) => {
  return (
    <>
      <CustomLink to="/" onClickLink={onClickLink}>
        Home
      </CustomLink>
      <CustomLink to="/about" onClickLink={onClickLink}>
        About
      </CustomLink>
      <CustomLink to="/contact" onClickLink={onClickLink}>
        Contact
      </CustomLink>
    </>
  );
};

export default NavLinks;
