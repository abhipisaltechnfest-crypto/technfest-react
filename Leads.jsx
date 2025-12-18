import { useState } from "react";

import Input from "../components/Input";
import Select from "../components/Select";
import Textarea from "../components/Textarea";



// Initial leads
const initialLeads = [
  { id: 1, name: "Rahul", mobile: "9999999999", status: "New" },
  { id: 2, name: "Amit", mobile: "8888888888", status: "Hot" },
  { id: 3, name: "Sneha", mobile: "7777777777", status: "Closed" },
  { id: 4, name: "Priya", mobile: "6666666666", status: "New" },
  { id: 5, name: "Vikram", mobile: "5555555555", status: "Hot" },
];

// ✅ STATUS COLORS
const statusColor = {
  New: "text-blue-600 bg-blue-100",
  Hot: "text-orange-600 bg-orange-100",
  Closed: "text-green-600 bg-green-100",
};

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

  // ✅ STEP 8 — Lead Count Summary Logic
const totalCount = filteredLeads.length;

const newCount = filteredLeads.filter(
  (lead) => lead.status === "New"
).length;

const hotCount = filteredLeads.filter(
  (lead) => lead.status === "Hot"
).length;

const closedCount = filteredLeads.filter(
  (lead) => lead.status === "Closed"
).length;


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

{/* ✅ Lead Count Summary UI */}


<div className="mb-3 text-sm font-medium text-gray-700">
  Total: {totalCount} |{" "}
  <span className="text-blue-600">New: {newCount}</span> |{" "}
  <span className="text-orange-600">Hot: {hotCount}</span> |{" "}
  <span className="text-green-600">Closed: {closedCount}</span>
</div>

      {statusFilter !== "All" && (
  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded mb-4">
    Active Filter: {statusFilter}
    <button
      type="button"
      onClick={() => setStatusFilter("All")}
      className="text-sm underline"
    >
      Clear
    </button>
  </div>
)}


      {successMsg && (
        <div className="text-green-600 bg-green-100 px-3 py-2 rounded mb-3">
          {successMsg}
        </div>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="bg-white p-4 rounded shadow mb-6 grid gap-4 md:grid-cols-2"
        >
   <div className="flex flex-col">
  <Input
  label="Full Name"
  name="name"
  value={form.name}
  onChange={handleChange}
  error={errors.name}
/>
</div>

<div className="flex flex-col">

  <Input
  label="Mobile"
  name="mobile"
  type="number"
  value={form.mobile}
  onChange={handleChange}
  error={errors.mobile}
/>
</div>

<div className="flex flex-col">

    <Input
  label="Email"
  name="email"
  type="email"
  value={form.email}
  onChange={handleChange}
  error={errors.email}
/>
</div>

<div className="flex flex-col">
    <Input
  label="City"
  name="city"
  value={form.city}
  onChange={handleChange}
  error={errors.city}
/>
</div>



<div className="flex flex-col">
     <Select
  label="Source"
  name="source"
  value={form.source}
  onChange={handleChange}
  options={["Walk-in", "Reference", "WhatsApp", "Website", "Instagram"]}
  error={errors.source}
/></div>
<div className="flex flex-col">

          <Select
  label="Status"
  name="status"
  value={form.status}
  onChange={handleChange}
  options={["New", "Hot", "Closed"]}
  error={errors.status}
/>
</div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded md:col-span-2"
          >
            Save Lead
          </button>
        </form>
      )}

      {/* ✅ LEADS CARDS? */}
{/* 
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div> */}
<div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

  {filteredLeads.length === 0 && (
    
  <div className="h-screen font-extrabold align-middle text-black-100 py-10">
    No leads found
  </div>

)}

  {filteredLeads.map((lead, index) => (
    <div
      key={lead.id}
      className={`pointer-events-auto border-2 border-gray-300 p-4 rounded shadow
        ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}
        hover:bg-gray-100`}
    >
      <h3 className="font-semibold text-lg">{lead.name}</h3>

      <p className="text-sm text-gray-600">{lead.mobile}</p>

      {/* Status Badge */}
      <span
        className={`inline-block mt-2 px-2 py-1 text-xs rounded
          ${lead.status === "New" && "bg-blue-100 text-blue-700"}
          ${lead.status === "Hot" && "bg-orange-100 text-orange-700"}
          ${lead.status === "Closed" && "bg-green-100 text-green-700"}
        `}
      >
        {lead.status}
      </span>

      {/* Actions */}
      <div className="flex gap-3 mt-4">
        {/* View */}
        <button
          type="button"
          className="text-sm text-white bg-indigo-600 px-3 py-1 rounded cursor-pointer hover:bg-indigo-700"
        >
          View
        </button>

        {/* Edit */}
        <button
          type="button"
          onClick={() => {
            setEditLead(lead);
            setIsEditOpen(true);
          }}
          className="text-sm text-blue-600 cursor-pointer"
        >
          Edit
        </button>

        {/* Delete */}
        <button
          type="button"
          onClick={() => {
            setDeleteLead(lead);
            setIsDeleteOpen(true);
          }}
          className="text-sm text-red-600 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  ))}

  
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

    </div>
  );
};

export default Leads;



