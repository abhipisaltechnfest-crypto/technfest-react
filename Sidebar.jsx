


import React from "react";
import Button from "./Button";

const Sidebar = ({ selectedPage, setSelectedPage }) => {
  return (
    <div className="w-64 bg-white p-4 shadow space-y-2">
      <Button
        label="Dashboard"
        type={selectedPage === "dashboard" ? "primary" : "secondary"}
        onClick={() => setSelectedPage("dashboard")}
      />
      <Button
        label="Leads"
        type={selectedPage === "leads" ? "primary" : "secondary"}
        onClick={() => setSelectedPage("leads")}
      />
      <Button
        label="Settings"
        type={selectedPage === "settings" ? "primary" : "secondary"}
        onClick={() => setSelectedPage("settings")}
      />
    </div>
  );
};

export default Sidebar;







