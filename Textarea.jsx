



const Textarea = ({ label, name, value, onChange, error }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium mb-1">{label}</label>

      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default Textarea;
