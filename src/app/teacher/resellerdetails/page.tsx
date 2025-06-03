"use client";
import {FormEvent, useState} from "react";
import NeutralHuman from "../../../../public/icons/NeutralHuman";
import SearchIcon from "../../../../public/icons/SearchIcon";

export default function Page() {
  const [searchType, setSearchType] = useState("phone");
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Searching by ${searchType}:`, inputValue);
  }

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-end gap-2">
          <NeutralHuman size="38px" className="align-baseline" />
          <p className="text-3xl font-bold">All Reseller List</p>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <h2 className="font-semibold text-2xl text-gray-800">SearchBar</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <select
                value={searchType}
                onChange={(e) => {
                  setSearchType(e.target.value);
                  setInputValue("");
                }}
                className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="phone">Phone Number</option>
                <option value="email">Email</option>
              </select>

              <input
                type={searchType === "phone" ? "tel" : "email"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleSubmit(e as any);
                  }
                }}
                placeholder={
                  searchType === "phone" ? "Enter phone number" : "Enter email"
                }
                className="border border-gray-300 rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              <button
                type="submit"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <SearchIcon size="16px" />
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
