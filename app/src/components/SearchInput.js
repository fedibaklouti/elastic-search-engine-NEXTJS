"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SearchInput = ({ defaultValue = "" }) => {
  const [searchQuery, setSearchQuery] = useState(defaultValue);

  const [link, setLink] = useState(`/${searchQuery}/1`);

  useEffect(() => {
    setLink(`/${searchQuery}/1`);
  }, [searchQuery]);

  return (
    <div className="z-10 max-w-5xl w-full sm:w-3/5 items-center justify-between font-mono text-sm">
      <div className="flex gap-4">
        <input
          className="w-full p-2 border border-gray-300 rounded-lg h-auto hover:border-gray-500 focus:outline-none focus:border-blue-500 transition-colors duration-300 ease-in-out"
          id="searchInput"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search"
          value={searchQuery}
        />
        <Link href={searchQuery.length <= 0 ? "" : link}>
          <button
            className="bg-blue-500  text-white font-bold py-2 px-4 rounded hover:bg-blue-400 disabled:bg-gray-400 duration-300 ease-in-out "
            disabled={searchQuery.length <= 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              fill="#fff"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchInput;
