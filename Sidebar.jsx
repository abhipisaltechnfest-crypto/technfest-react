

import React from "react";

export default function Sidebar({ onSelect }) {
  return (
    <div className="w-60 bg-white h-screen shadow-md  pt-6 px-4">
      <h2 className="text-xl font-bold mb-6 text-gray-700">Menu Items:</h2>

      <nav className="flex flex-col gap-4">
        <button
          onClick={() => onSelect("dashboard")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Dashboard
        </button>

        <button
          onClick={() => onSelect("leads")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Leads
        </button>

        <button
          onClick={() => onSelect("settings")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow"
        >
          Settings
        </button>
      </nav>
    </div>
  );
}









