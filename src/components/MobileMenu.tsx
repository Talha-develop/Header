import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export type MobileMenuProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ open, setOpen }) => {
  const menuVariants = {
    hidden: { opacity: 0, y: -12, pointerEvents: "none" },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: "auto",
      transition: { type: "spring", stiffness: 300, damping: 26 },
    },
  } as const;

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.18 } },
  } as const;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="md:hidden"
        >
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={overlayVariants}
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setOpen(false)}
          />

          <motion.nav
            variants={menuVariants}
            className="z-40 relative bg-white shadow-md border-t border-gray-100 max-w-md mx-4 my-4 rounded-lg p-4"
          >
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-md text-gray-800 hover:bg-gray-50"
                >
                  Contact
                </a>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => setOpen(false)}
                  className="w-full px-4 py-2 rounded-md bg-indigo-600 text-white font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                  Get Started
                </button>
              </li>
            </ul>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
