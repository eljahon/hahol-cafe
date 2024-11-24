"use client";
import { useState } from "react";

export default function BottomSheet() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setIsOpen(false)}
      >
        Open Bottom Sheet
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-end"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-white w-full max-w-md rounded-t-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold">Bottom Sheet</h2>
            <p className="text-gray-600">This is a Tailwind-based Bottom Sheet.</p>
            <button
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
