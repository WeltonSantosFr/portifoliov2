import { useState } from "react";
import { userData } from "@/utils/userData";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export const NavBar = (): JSX.Element => {
  document.title = userData.nameUser;
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent hover:from-neon-green hover:to-neon-blue transition-all duration-300 cursor-pointer">
              {userData.nameUser}
            </span>
          </div>

          {/* Desktop NavLinks */}
          <div className="hidden md:flex space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors"
              aria-label={!open ? "Open Menu" : "Close Menu"}
            >
              {!open ? <FaBars className="h-6 w-6" /> : <IoClose className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile NavLinks Panel */}
      {open && (
        <div className="md:hidden glass border-b border-white/5 px-2 pt-2 pb-4 space-y-1 sm:px-3 animate-in fade-in slide-in-from-top-5 duration-200">
          <NavLinks mobile onClick={() => setOpen(false)} />
        </div>
      )}
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  onClick?: () => void;
}

const NavLinks = ({ mobile, onClick }: NavLinksProps): JSX.Element => {
  const links = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Social Media", href: "#social-media" },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className={`${
            mobile
              ? "block px-3 py-2 rounded-md text-base font-medium text-neutral-300 hover:text-white hover:bg-white/5"
              : "text-sm font-medium text-neutral-300 hover:text-white hover:scale-105 transition-all duration-200"
          } relative group`}
        >
          {link.name}
          {!mobile && (
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-300 group-hover:w-full" />
          )}
        </a>
      ))}
    </>
  );
};
