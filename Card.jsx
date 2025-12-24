

export default function Card({ title, value, icon }) {
return (<div className="bg-white rounded-xl border-2 border-gray-200 p-6 shadow-md hover:shadow-xl transition">
  <div className="flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-500">{title}</p>
      <h2 className="text-3xl font-bold text-gray-800">{value}</h2>
    </div>
    <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
      {icon}
    </div>
  </div>
</div>

);
}

