import { TextAlignJustify } from "lucide-react";
import { useState } from "react";
import { navItems } from "../../../Utils/navbardata";
import { NavLink } from "react-router-dom";

export default function Mobilenav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <div
        className="flex justify-end items-center lg:hidden cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <TextAlignJustify size={28}  />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute w-full top-16 left-0 z-50">
          <div className="bg-white/95 shadow-[0_4px_15px_rgba(0,0,0,0.1)] rounded-xl mx-4 p-5">
            <ul className="flex flex-col gap-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                >
                  <li
                    className="
                      text-[#1b246b] text-lg font-medium
                      p-3 rounded-lg
                      hover:bg-[#50cefcc9]
                      border border-transparent
                      hover:border-[#d3d8ff]
                      transition-all duration-200
                    " >
                    {item.name}
                  </li>
                </NavLink>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
