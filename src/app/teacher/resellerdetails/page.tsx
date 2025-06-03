"use client";
// import {showNotification} from "@mantine/notifications";
import {FormEvent, useState} from "react";
import NeutralHuman from "../../../../public/icons/NeutralHuman";
import SearchIcon from "../../../../public/icons/SearchIcon";
// import { showNotification } from '@mantine/notifications';

export default function Page() {
  const [searchType, setSearchType] = useState("phone");
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Searching by ${searchType}:`, inputValue);
  }

  const company = [
    {
      id: "1323addd-a4ac-4dd2-8de2-6f934969a0f1",
      name: "Mainak Karmakar",
      phone: "64786583994",
      email: "the@gmail.com",
      location: "Kalyani",
      state: "WB",
    },
    {
      id: "1323addd-a4ac-4dd2-8de2-6f934969a02d2f1",
      name: "Hello World",
      phone: "23425232343",
      email: "the@gmail.com",
      location: "Kalyani",
      state: "OD",
    },
    {
      id: "1323addd-a4ac-4dd2-8de2-6f934969a2d2d0f1",
      name: "Hello City",
      phone: "235552434",
      email: "the@gmail.com",
      location: "Kalyani",
      state: "UP",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-end gap-2">
          <NeutralHuman size="38px" className="align-baseline" />
          <p className="text-3xl font-bold">All Reseller List</p>
        </div>

        <div className="flex items-center gap-4 bg-white p-4 rounded-lg">
          <h2 className="font-semibold text-2xl text-gray-800">Search By</h2>
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

        <div>
          {/* <DataTable
            withTableBorder
            borderRadius="sm"
            withColumnBorders
            striped
            highlightOnHover
            height={400}
            records={company}
            columns={[
              {accessor: "name"},
              {
                accessor: "phone",
                render: ({state}) => (
                  <Box fw={700} c={state === "Democratic" ? "blue" : "red"}>
                    {state.slice(0, 3).toUpperCase()}
                  </Box>
                ),
              },
              {accessor: "email"},
              {accessor: "location"},
              {accessor: "state"},
            ]}
          /> */}

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    State
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {company.map(({id, name, phone, email, location, state}) => (
                  <tr key={id} className="bg-white border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {name}
                    </th>
                    <td className="px-6 py-4">{phone}</td>
                    <td className="px-6 py-4">{email}</td>
                    <td className="px-6 py-4">{location}</td>
                    <td className="px-6 py-4">{state}</td>
                    <td className="px-6 py-4">
                      <button
                        type="button"
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 rounded"
                        aria-label={`Edit ${name}`}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
