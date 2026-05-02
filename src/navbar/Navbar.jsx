import { FaBook, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { MdWork } from "react-icons/md";
import { NavLink } from "react-router";
import { memo } from "react";

const navItems = [
  { to: "/", icon: FaUser, label: "About" },
  { to: "/resume", icon: FaBook, label: "Resume" },
  { to: "/portfolio", icon: MdWork, label: "Portfolio" },
  { to: "/contact", icon: FaMessage, label: "Contact" },
];

const Navbar = memo(() => {
  return (
    <nav
      aria-label="Main navigation"
      className="fixed bottom-0 left-0 w-full z-[100] bg-[#222222] border-t-2 border-gray-50/20 flex flex-row justify-around items-center py-1.5 px-2 lg:static lg:h-full lg:w-16 lg:flex-col lg:justify-between lg:items-center lg:py-5 lg:px-0 lg:border-t-0 lg:border-r-2"
    >
      {/* Rotated logo — desktop only */}
      <div className="hidden lg:flex items-start justify-center h-64 mt-10 pt-5 shrink-0">
        <h2
          className="-rotate-90 whitespace-nowrap text-[34px] font-black uppercase tracking-[0.15em] flex items-baseline select-none"
          aria-label="Babor"
        >
          <span className="text-white">Ba</span>
          <span className="text-[#78cc6d]">bor</span>
          <span className="text-[#78cc6d] text-[46px] leading-none">.</span>
        </h2>
      </div>

      {/* Nav links */}
      <div className="flex flex-row w-full justify-around lg:flex-col lg:w-auto lg:justify-center lg:gap-1">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex flex-col justify-center gap-1 items-center transition-all duration-300 py-2 px-2 rounded-md text-sm lg:text-xs ${
                isActive
                  ? "text-[#78cc6d] font-semibold"
                  : "text-[#999999] hover:text-[#78cc6d]"
              }`
            }
            aria-label={label}
          >
            <Icon size={18} />
            <span className="text-[10px] sm:text-[11px] lg:text-[12px] font-medium tracking-wide">
              {label}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
});

Navbar.displayName = "Navbar";
export default Navbar;
