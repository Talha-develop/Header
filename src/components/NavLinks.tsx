import React from "react";

export type NavLinksProps = {
  onClickLink?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ onClickLink }) => {
  const Link: React.FC<{ children: React.ReactNode; href?: string }> = ({
    children,
    href = "#",
  }) => (
    <a
      href={href}
      onClick={onClickLink}
      className="text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md"
    >
      {children}
    </a>
  );

  return (
    <>
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Contact</Link>
    </>
  );
};

export default NavLinks;
