import { ReactNode } from "react";
import { FaHome } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import NavLink from "../ui/NavLink";
import { CiClock1 } from "react-icons/ci";

interface NavItem {
  name: string;
  path: string;
  icon: ReactNode;
}

const Navbar = () => {
  const navItems: NavItem[] = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "Timeline", path: "/timeline", icon: <CiClock1 /> },
    { name: "Stats", path: "/stats", icon: <IoStatsChart /> },
  ];

  const link = (
    <>
      {navItems.map((item, idx) => (
        <NavLink key={idx} href={item.path} icon={item.icon}>
          {item.name}
        </NavLink>
      ))}
    </>
  );

  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <h2 className="text-2xl font-bold">
            Keen
            <span className="text-green-800">Keeper</span>
          </h2>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
