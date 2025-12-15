



import React from "react";

// Static leads array
const leads = [
  { id: 1, name: "Rahul", mobile: "9999999999", status: "New" },
  { id: 2, name: "Amit", mobile: "8888888888", status: "Hot" },
  { id: 3, name: "Sneha", mobile: "7777777777", status: "Closed" },
  { id: 4, name: "Priya", mobile: "6666666666", status: "New" },
  { id: 5, name: "Vikram", mobile: "5555555555", status: "Hot" },
];

const Leads = () => {
  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {leads.map((lead) => (
          <div
            key={lead.id}
            className="bg-white p-4 rounded-lg shadow flex flex-col justify-between"
          >
            <div>
              <p className="font-semibold text-lg">{lead.name}</p>
              <p className="text-gray-500">{lead.mobile}</p>
            </div>
            <span
              className={`mt-2 font-bold ${
                lead.status === "Hot"
                  ? "text-red-500"
                  : lead.status === "Closed"
                  ? "text-green-500"
                  : "text-blue-500"
              }`}
            >
              {lead.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
