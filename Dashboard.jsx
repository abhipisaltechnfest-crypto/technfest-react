

import Card from "../components/Card";

const Dashboard = () => {
  // 🔹 Dynamic cards data
  const cardsData = [
    {
      id: 1,
      title: "Total Leads",
      value: "120",
      icon: ""
    },
    {
      id: 2,
      title: "Total Clients",
      value: "450",
      icon: ""
    },
    {
      id: 3,
      title: "Revenue",
      value: "₹2,50,000",
      icon: ""
     
    },

  ];


  return (
    <div className="bg-yellow-50 flex flex-col gap-4 p-4 border bg-gradient-to-br from-blue-1
    00 via-purple-100 to-blue-100 to-cyan-100  border-gray-200 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
     

      {/* 🔹 Responsive Grid */}
  
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  <Card title="Total Leads" value="120" icon="📈" />
  <Card title="Total Clients" value="45" icon="👥" />
  <Card title="Revenue" value="₹2,50,000" icon="💰" />
</div>


       <p className="mt-0 text-gray-600">This is the dashboard displaying quick stats.</p>
   
    </div>
  );
};

export default Dashboard;




