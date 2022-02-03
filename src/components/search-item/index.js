import React from "react";
import { Search } from "react-feather";
export default function SearchItem() {
  return (
    <>
      <div className="mt-5 mx-6 relative rounded-md">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>

        <input
          type="search"
          name="search"
          id="search"
          className="pl-10 shadow-sm focus:ring-blue-800 focus:blue-800 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="Search by name or barcode"
        />
      </div>
    </>
  );
}
