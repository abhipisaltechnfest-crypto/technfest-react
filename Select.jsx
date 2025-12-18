const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded
          ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <option value="">Select {label}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default Select;
