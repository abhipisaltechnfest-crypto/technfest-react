




// import { useState } from "react";
// import MainLayout from "./layout/MainLayout";
// // import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Leads from "./pages/Leads";
// import Settings from "./pages/Settings";

// function App() {
//   const [selectedPage, setSelectedPage] = useState("dashboard");

//   const renderPage = () => {
//     if (selectedPage === "dashboard") return <Dashboard />;
//     if (selectedPage === "leads") return <Leads />;
//     if (selectedPage === "settings") return <Settings />;
//   };

//   return (
//     <MainLayout onSelect={setSelectedPage} >
//       {renderPage()}
//     </MainLayout>
//   );
// }

// export default App;



import { useState } from "react";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Settings from "./pages/Settings";

function App() {
  const [selectedPage, setSelectedPage] = useState("dashboard");

  const renderPage = () => {
    switch (selectedPage) {
      case "dashboard":
        return <Dashboard />;
      case "leads":
        return <Leads />;
      case "settings":
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <MainLayout onSelect={setSelectedPage}>
      {renderPage()}
    </MainLayout>
  );
}

export default App;































