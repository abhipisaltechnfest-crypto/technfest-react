




import React from "react";

export default function Button({ label, type = "primary", onClick }) {
  const styles =
    type === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "bg-gray-200 text-black hover:bg-gray-300";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full p-3 rounded mb-3 text-left font-semibold transition-all ${styles}`}
    >
      {label}
    </button>
  );
}
