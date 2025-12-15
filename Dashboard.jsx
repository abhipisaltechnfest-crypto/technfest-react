



import Card from "../components/Card";

const Dashboard = () => {
  // 🔹 Dynamic cards data
  const cardsData = [
    {
      id: 1,
      title: "Total Leads",
      value: "120",
    },
    {
      id: 2,
      title: "Total Clients",
      value: "45",
    },
    {
      id: 3,
      title: "Revenue",
      value: "₹2,50,000",
     
    },
  ];

  return (
    <div className="bg-yellow-50 flex flex-col gap-4 p-4 border border-gray-300 rounded shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
     

      {/* 🔹 Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
          />
        ))}
      </div>
       <p className="mt-0 text-gray-600">This is the dashboard displaying quick stats.</p>
   
    </div>
  );
};

export default Dashboard;



