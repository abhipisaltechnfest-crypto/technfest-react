

const Input = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  error,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`border p-2 rounded focus:outline-none
          ${error ? "border-red-500" : "border-gray-300"}`}
      />

      {error && (
        <p className="text-red-500 text-xs">{error}</p>
      )}
    </div>
  );
};

export default Input;
