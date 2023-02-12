import React from "react";

export default function Button({ label }) {
  return (
    <div className="mr-3 mt-3">
      <div className="flex-shrink-0">
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        >
          {label}
        </button>
      </div>
    </div>
  );
}
