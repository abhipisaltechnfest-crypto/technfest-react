



import { useState } from "react";

// Initial leads
const initialLeads = [
  { id: 1, name: "Rahul", mobile: "9999999999", status: "New" },
  { id: 2, name: "Amit", mobile: "8888888888", status: "Hot" },
  { id: 3, name: "Sneha", mobile: "7777777777", status: "Closed" },
  { id: 4, name: "Priya", mobile: "6666666666", status: "New" },
  { id: 5, name: "Vikram", mobile: "5555555555", status: "Hot" },
];

const Leads = () => {
  const [leads, setLeads] = useState(initialLeads);
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    source: "",
    notes: "",
    status: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editLead, setEditLead] = useState(null);

  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [deleteLead, setDeleteLead] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!form.name || form.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";

    if (!/^\d{10}$/.test(form.mobile))
      newErrors.mobile = "Mobile must be 10 digits";

    if (!form.city) newErrors.city = "City is required";
    if (!form.source) newErrors.source = "Source is required";
    if (!form.status) newErrors.status = "Status is required";

    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email format";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ FINAL FIXED handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newLead = {
      id: Date.now(),
      name: form.name,
      mobile: form.mobile,
      status: form.status,
    };

    setLeads([newLead, ...leads]);

    setForm({
      name: "",
      mobile: "",
      email: "",
      city: "",
      source: "",
      notes: "",
      status: "",
    });

    setErrors({});
    setSuccessMsg("✅ Lead added successfully");

    // 🔥 IMPORTANT FIX
    setSearch("");
    setStatusFilter("All");

    setTimeout(() => setSuccessMsg(""), 3000);
  };

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      lead.name.toLowerCase().includes(search.toLowerCase()) ||
      lead.mobile.includes(search);

    const matchesStatus =
      statusFilter === "All" || lead.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Leads</h1>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        + Add Lead
      </button>

      <input
        placeholder="Search by name or mobile..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2 rounded w-full md:w-1/2 mb-4"
      />

      <select
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
        className="border p-2 rounded mb-6 w-full md:w-1/4"
      >
        <option value="All">All Status</option>
        <option>New</option>
        <option>Hot</option>
        <option>Closed</option>
      </select>

      {successMsg && (
        <div className="bg-green-100 text-green-700 px-4 py-2 rounded mb-4">
          {successMsg}
        </div>
      )}
      {/* 🟢 ADD LEAD FORM */}
{showForm && (
  <form
    onSubmit={handleSubmit}
    className="bg-white p-4 rounded shadow mb-6 grid gap-4 md:grid-cols-2"
  >
    <div className="flex flex-col">
  <input
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Full Name *"
    className={`border p-2 rounded ${errors.name && "border-red-500"}`}
  />
  {errors.name && (
    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
  )}
</div>

    <div className="flex flex-col">
  <input
    name="mobile"
    value={form.mobile}
    onChange={handleChange}
    placeholder="Mobile *"
    className={`border p-2 rounded ${errors.mobile && "border-red-500"}`}
  />
  {errors.mobile && (
    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
  )}
</div>

    <div className="flex flex-col">
    <input
      name="email"
      value={form.email}
      onChange={handleChange}
      placeholder="Email"
      className="border p-2 rounded"
    />
    {errors.email && (
  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
)}
</div>

    <div className="flex flex-col">
    <input
      name="city"
      value={form.city}
      onChange={handleChange}
      placeholder="City *"
      className={`border p-2 rounded ${errors.city && "border-red-500"}`}
    />
    {errors.city && (
  <p className="text-red-500 text-sm mt-1">{errors.city}</p>
)}
</div>

    <div className="flex flex-col">
    <select
      name="source"
      value={form.source}
      onChange={handleChange}
      className={`border p-2 rounded ${errors.source && "border-red-500"}`}
    >
      <option value="">Select Source *</option>
      <option>Walk-in</option>
      <option>Reference</option>
      <option>WhatsApp</option>
      <option>Website</option>
      <option>Instagram</option>
    </select>
    {errors.source && (
  <p className="text-red-500 text-sm">{errors.source}</p>
)}</div>

    <div className="flex flex-col">
    <select
      name="status"
      value={form.status}
      onChange={handleChange}
      className={`border p-2 rounded ${errors.status && "border-red-500"}`}
    >
      <option value="">Select Status *</option>
      <option>New</option>
      <option>Hot</option>
      <option>Closed</option>
    </select>
{errors.status && (
  <p className="text-red-500 text-sm">{errors.status}</p>
)}
</div>

    <textarea
      name="notes"
      value={form.notes}
      onChange={handleChange}
      placeholder="Notes"
      className="border p-2 rounded md:col-span-2"
    />

    <button
      type="submit"
      className="bg-green-600 text-white px-4 py-2 rounded md:col-span-2"
    >
      Save Lead
    </button>
  </form>
)}


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredLeads.map((lead) => (
          <div key={lead.id} className="bg-white p-4 rounded shadow">
            <p className="font-semibold">{lead.name}</p>
            <p className="text-gray-500">{lead.mobile}</p>
            <span className="font-bold">{lead.status}</span>

            <div className="flex gap-4 mt-2">
              <button
                onClick={() => {
                  setEditLead(lead);
                  setIsEditOpen(true);
                }}
                className="text-sm text-blue-600"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setDeleteLead(lead);
                  setIsDeleteOpen(true);
                }}
                className="text-sm text-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditOpen && editLead && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Lead</h2>

            <input
              value={editLead.name}
              disabled
              className="border p-2 rounded w-full mb-3 bg-gray-100"
            />

            <select
              value={editLead.status}
              onChange={(e) =>
                setEditLead({ ...editLead, status: e.target.value })
              }
              className="border p-2 rounded w-full mb-4"
            >
              <option>New</option>
              <option>Hot</option>
              <option>Closed</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsEditOpen(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setLeads(
                    leads.map((l) =>
                      l.id === editLead.id ? editLead : l
                    )
                  );
                  setIsEditOpen(false);
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {isDeleteOpen && deleteLead && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-full max-w-sm">
            <h2 className="text-lg font-bold text-red-600 mb-4">
              Delete Lead
            </h2>

            <p className="mb-6">
              Are you sure you want to delete{" "}
              <b>{deleteLead.name}</b>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsDeleteOpen(false)}
                className="border px-4 py-2 rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setLeads(
                    leads.filter((l) => l.id !== deleteLead.id)
                  );
                  setIsDeleteOpen(false);
                }}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leads;
