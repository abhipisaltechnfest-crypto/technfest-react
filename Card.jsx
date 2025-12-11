export default function Card({ title, value }) {
  return (
    <div className="bg-white shadow-md p-5 rounded-lg w-full">
      <h3 className="text-gray-600 text-sm font-semibold">{title}</h3>
      <p className="text-3xl font-bold mt-2">{value}</p>
    </div>
  );
}
