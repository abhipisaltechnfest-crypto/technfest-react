


import React from "react";

/* ---------------- Reusable Button ---------------- */
const SidebarBtn = ({ label, isActive, onClick }) => {
  return (
    <button
     onClick={onClick}
   

  className={`w-full text-left px-4 py-3 rounded-lg transition cursor-pointer
    ${isActive ? "bg-blue-600 text-white" : "text-black  hover:bg-blue-300 hover:text-white"}
  `}
>
 {label}
</button>

  );
};

/* ---------------- Sidebar Wrapper ---------------- */
const SidebarButton = ({ selectedPage, setSelectedPage }) => {
  return (

 <div className=" w-72 shadow-md
   p-5 text-white 
  bg-gradient-to-br from-pink-300 via-purple-100 to-black-100
   hover:shadow-2xl transition
">
  <div className="shadow-lg rounded-lg h-200">
      <h2 className="text-2xl font-extrabold mb-6 text-gray-700">
        Menu Items
      </h2>

      <div className="flex flex-col gap-4">
        <SidebarBtn
          label="Dashboard"
          isActive={selectedPage === "dashboard"}
          onClick={() => setSelectedPage("dashboard")}
        />

        <SidebarBtn
          label="Leads"
          isActive={selectedPage === "leads"}
          onClick={() => setSelectedPage("leads")}
        />

        <SidebarBtn
          label="Settings"
          isActive={selectedPage === "settings"}
          onClick={() => setSelectedPage("settings")}
        />
    
        <SidebarBtn
          label="Data"
          isActive={selectedPage === "data"}
          onClick={() => setSelectedPage("data")}
        />

        <SidebarBtn
          label="New Leads"
          isActive={selectedPage === "newleads"}
          onClick={() => setSelectedPage("newleads")}
        />

        <SidebarBtn
          label="Old Leads"
          isActive={selectedPage === "oldleads"}
          onClick={() => setSelectedPage("oldleads")}
        />
     </div>
    </div>
    </div>
  
  );
};

export default SidebarButton;





