export default function Button({ label, type = "primary", onClick }) {
  const styles =
    type === "primary"
      ? "bg-blue-600 text-white"
      : "bg-gray-200 text-black";

  return (
    <button
      className={`w-full p-3 rounded mb-3 text-left ${styles}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
