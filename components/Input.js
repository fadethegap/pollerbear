export default function Input({ label, placeholder, type }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type="text"
          name={type}
          id={type}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}
