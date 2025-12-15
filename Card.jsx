  


export default function Card({ title, value, icon }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow border border-black/20 w-full">
      
      <div className="flex items-center gap-2">
      
        <p className="text-gray-500 font-semibold">{title}</p>
      </div>

      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
}
