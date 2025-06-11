import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineDashboard,
  AiOutlineTeam,
  AiOutlineFileText,
  AiOutlineBell,
  AiOutlineSetting,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import { useTheme } from "../../contexts/theme/hook/useTheme";
import clsx from "clsx"; 

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { theme } = useTheme(); 
  const location = useLocation();

  const menuItems = [
    { name: "Home", href: "/", icon: AiOutlineHome },
    { name: "Dashboard", href: "/dashboard", icon: AiOutlineDashboard },
    { name: "Users", href: "/user", icon: AiOutlineTeam },
    { name: "Reports", href: "/#", icon: AiOutlineFileText },
    { name: "Notifications", href: "/#", icon: AiOutlineBell },
    { name: "Settings", href: "/#", icon: AiOutlineSetting },
  ];

  return (
    <div
      style={{
        backgroundColor: theme.colors.background,
        color: theme.colors.textPrimary,
      }}
      className={clsx(
        "fixed left-0 top-0 h-full shadow-2xl z-40 transition-all duration-300 ease-in-out",
        isOpen ? "w-64" : "w-16"
      )}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          backgroundColor: theme.colors.background,
          borderColor: theme.colors.borderLight,
        }}
        className={clsx(
          "absolute -right-3 top-8 border-2 rounded-full p-1.5 transition-colors duration-200",
          !isOpen && "rotate-180"
        )}
      >
        {isOpen ? (
          <AiOutlineLeft
            className="w-4 h-4"
            style={{ color: theme.colors.textPrimary }}
          />
        ) : (
          <AiOutlineRight
            className="w-4 h-4"
            style={{ color: theme.colors.textPrimary }}
          />
        )}
      </button>

      {/* Logo Section */}
      <div
        className={clsx(
          "flex items-center p-4 border-b",
          !isOpen && "justify-center px-2"
        )}
        style={{
          borderColor: theme.colors.border,
        }}
      >
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-lg">L</span>
        </div>
        {true && (
          <div className="ml-3 overflow-hidden">
            <h1
              className="text-xl font-bold"
              style={{ color: theme.colors.textPrimary }}
            >
              MyApp
            </h1>
            <p
              className="text-xs"
              style={{ color: theme.colors.textSecondary }}
            >
              Admin Panel
            </p>
          </div>
        )}
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6">
        <ul className="space-y-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href;

            return (
              <li
                key={item.name}
                style={{
                  backgroundColor: isActive
                    ? theme.colors.sidebarActive
                    : undefined,
                  color: theme.colors.textPrimary,
                  borderRadius: theme.borderRadius.lg,
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.backgroundColor =
                      theme.colors.sidebarHover;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.backgroundColor = "";
                }}
              >
                <NavLink
                  to={item.href}
                  className={clsx(
                    "group flex items-center px-3 py-3 rounded-xl transition-all duration-200",
                    isActive
                      ? `bg-${theme.colors.sidebarActive} text-${theme.colors.textPrimary} shadow-lg`
                      : `text-${theme.colors.textPrimary} `,
                    !isOpen && "justify-center px-2"
                  )}
                  style={{
                    backgroundColor: isActive
                      ? theme.colors.sidebarActive
                      : undefined,
                    color: theme.colors.textPrimary,
                  }}
                  title={!isOpen ? item.name : ""}
                >
                  <Icon className="w-6 h-6 flex-shrink-0" />
                  {isOpen && (
                    <span className="ml-3 font-medium text-sm overflow-hidden whitespace-nowrap">
                      {item.name}
                    </span>
                  )}

                  {/* Tooltip for collapsed state */}
                  {!isOpen && (
                    <div
                      className="absolute left-16 bg-gray-900 text-white px-2 py-1 rounded text-sm 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                        pointer-events-none whitespace-nowrap z-50"
                    >
                      {item.name}
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
