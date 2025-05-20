

import { useState } from "react";
import {
  Bars3Icon,
  ChartBarIcon,
  InboxIcon,
  UserGroupIcon,
  XMarkIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function SideBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 transition-all"
      >
        {isOpen ? (
          <XMarkIcon className="h-6 w-6" />
        ) : (
          <Bars3Icon className="h-6 w-6" />
        )}
      </button>

      {/* Sidebar Content */}
      <div
        className={`fixed h-screen bg-gray-800 text-white w-64 transition-all duration-300 ${
          isOpen ? "left-0" : "-left-64"
        } md:left-0`}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold flex items-center gap-2">
            {isOpen && (
              <XMarkIcon
                className="h-5 w-5 md:hidden cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            )}
            BeyondChats
          </h1>

          <nav className="mt-6">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `p-2 rounded flex items-center gap-2 ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-700"
                    }`
                  }
                >
                  <InboxIcon className="h-5 w-5" />
                  Inbox
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    `p-2 rounded flex items-center gap-2 ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-700"
                    }`
                  }
                >
                  <ChartBarIcon className="h-5 w-5" />
                  Reports
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `p-2 rounded flex items-center gap-2 ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-700"
                    }`
                  }
                >
                  <UserGroupIcon className="h-5 w-5" />
                  Our Team
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/settings"
                  className={({ isActive }) =>
                    `p-2 rounded flex items-center gap-2 ${
                      isActive ? "bg-gray-700" : "hover:bg-gray-700"
                    }`
                  }
                >
                  <Cog6ToothIcon className="h-5 w-5" />
                  Settings
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className="text-center text-xs text-gray-400 mt-4">
          © 2025 BeyondChat
        </div>
      </div>
    </>
  );
}

export default SideBar;
