
import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4 p-3 border border-gray-200 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 border-gray-200 rounded shadow-lg">

        <div  className="border border-gray-200 rounded shadow-lg "><Card title="Total Leads" value="320" /></div>
       
       
        <div className="border border-gray-200 rounded shadow-lg "><Card title="Total Clients" value="87" /></div>
       
        <div className="border border-gray-200 rounded shadow-lg "><Card title="Revenue" value="Rs12,450" /></div>
       
        <div className="border border-gray-200 rounded shadow-lg "><Card title="Reviews" value="4.8/5" /></div>

      </div>  

      <p className="mt-0">This is the dashboard displaying quick stats.</p>
    </div>
  );
}







