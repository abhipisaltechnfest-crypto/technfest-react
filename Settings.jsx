


import React, { useState } from "react";

const Settings = () => {
  // Toggle state
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">Settings</h1>

      {/* Dummy Text */}
      <p className="mb-6 text-gray-600">
        This is the settings page. 
      </p>

      {/* Toggle Button */}
      <button
        onClick={() => setEnabled(!enabled)}
        className={`px-4 py-2 rounded font-semibold transition-colors ${
          enabled ? "bg-green-500 text-white" : "bg-gray-400 text-black"
        }`}
      >
        {enabled ? "Enabled" : "Disabled"}
      </button>
    </div>
  );
};

export default Settings;
