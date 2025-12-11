// import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function MainLayout({ children }) {
//   return (
//     <div className="h-screen flex flex-col">
      
//       {/* Navbar */}
//       <Navbar />

//       <div className="flex flex-1">
        
//         {/* Sidebar */}
//         <Sidebar />

//         {/* Content Area */}
//         <div className="flex-1 p-6 overflow-y-auto">
//           {children}
//         </div>

//       </div>
//     </div>
//   );
// }

// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function MainLayout({ children, onSelect }) {
//   return (
//     <div className="h-screen flex flex-col">
//       <Navbar />

//       <div className="flex flex-1">
        
//         {/* Sidebar only once */}
//         <Sidebar onSelect={onSelect} />

//         <div className="flex-1 p-6 overflow-y-auto">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MainLayout({ children, onSelect }) {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar receives onSelect for navigation */}
        <Sidebar onSelect={onSelect} />

        <div className="flex-1 p-6 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
