// src/Component/Layout/MainLayout.jsx
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import { useTheme } from "../../contexts/theme/hook/useTheme";

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { theme } = useTheme(); // Access the theme

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: theme.colors.background }}
    >
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ${
          isSidebarOpen ? "ml-64" : "ml-16"
        }`}
      >
        {/* Header */}
        <Header toggleSidebar={toggleSidebar} />

        {/* Page Content */}
        <main
          className="flex-1 p-6 overflow-y-auto"
          style={{
            backgroundColor: theme.colors.background,
            color: theme.colors.textPrimary,
          }}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
