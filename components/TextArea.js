export default function TextArea({ label }) {
  return (
    <div>
      <label
        htmlFor="comment"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <textarea
          rows={4}
          name="comment"
          id="comment"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          defaultValue={""}
        />
      </div>
    </div>
  );
}
