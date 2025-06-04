"use client";
// import {showNotification} from "@mantine/notifications";
import CommonModal from "@/components/common/CommonModal";
import {FormEvent, useState} from "react";
import SearchIcon from "../../../../public/icons/SearchIcon";
// import { showNotification } from '@mantine/notifications';

type Company = {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  state: string;
};

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [selectedReseller, setSelectedReseller] = useState<Company | null>(
    null
  );

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`Searching by : ${inputValue}`);
  }

  const company = [
    {
      id: "1",
      name: "Mainak Karmakar",
      phone: "64786583994",
      email: "the@gmail.com",
      location: "Kalyani",
      state: "WB",
    },
    {
      id: "2",
      name: "Hello World",
      phone: "23425232343",
      email: "the@gmail.com",
      location: "Kalyani",
      state: "OD",
    },
    {
      id: "3",
      name: "Hello City",
      phone: "235552434",
      email: "the@gmail.com",
      location: "Kalyani",
      state: "UP",
    },
  ];

  const [companyList, setCompanyList] = useState<Company[]>(company);
  const handleSave = (updated: Company) => {
    setCompanyList((prev) =>
      prev.map((item) => (item.id === updated.id ? updated : item))
    );
    setSelectedReseller(null);
  };

  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-2 justify-between">
          <p className="text-3xl font-bold">All Reseller List</p>

          <div className="flex justify-end items-center gap-4 p-4 rounded-lg">
            {/* <h2 className="font-semibold text-2xl text-gray-800">Search</h2> */}
            <form onSubmit={handleSubmit}>
              <div className="flex gap-3">
                <input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSubmit(e as any);
                    }
                  }}
                  placeholder="type to search"
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

        <div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    id
                  </th>
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
                {company.map((c) => (
                  <tr key={c.id} className="bg-white border-b border-gray-200">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {c.id}
                    </th>
                    <td className="px-6 py-4">{c.name}</td>
                    <td className="px-6 py-4">{c.phone}</td>
                    <td className="px-6 py-4">{c.email}</td>
                    <td className="px-6 py-4">{c.location}</td>
                    <td className="px-6 py-4">{c.state}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedReseller(c)}
                        className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
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
      {selectedReseller && (
        <CommonModal
          data={selectedReseller}
          open={!!selectedReseller}
          onClose={() => setSelectedReseller(null)}
          onSave={handleSave}
        />
      )}
    </>
  );
}
