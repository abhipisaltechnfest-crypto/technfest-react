



import React from "react";
import SidebarButton from "../components/SidebarButton";
import Navbar from "../styles/Navbar";

const MainLayout = ({ children, selectedPage, setSelectedPage }) => {
  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <SidebarButton
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
