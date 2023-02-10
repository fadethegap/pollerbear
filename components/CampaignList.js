// import { profileHandler } from "@auth0/nextjs-auth0/dist/handlers";
import React, { useState, useEffect, useRef } from "react";

export default function CampaignList() {
  const [people, setPeople] = useState();

  const data = [
    {
      name: "Bexar Campaign",
      title: "Bexar",
      email: "555-212-1234",
      role: "Active",
    },
    {
      name: "Caldwell Campaign",
      title: "Caldwell",
      email: "555-212-1111",
      role: "Active",
    },
    {
      name: "Williamson Campaign",
      title: "Williamson",
      email: "555-212-2222",
      role: "Active",
    },
    {
      name: "Travis Campaign",
      title: "Travis",
      email: "555-212-3333",
      role: "Inactive",
    },
    {
      name: "Bastrop Campaign",
      title: "Bastrop",
      email: "555-212-4444",
      role: "Active",
    },
    {
      name: "Comal Campaign",
      title: "Comal",
      email: "555-212-5555",
      role: "Active",
    },
  ];

  useEffect(() => {
    setPeople(data);
  }, []);
  return (
    <>
      {people && (
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto invisible">
              <h1 className="text-xl font-semibold text-gray-900">Users</h1>
              <p className="mt-2 text-sm text-gray-700">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
              <a href="/add-campaign">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto"
                >
                  Add Campaign
                </button>
              </a>
            </div>
          </div>
          <div className="mt-8 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                        >
                          Campaign Name
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          List
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Phone Number
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Active
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {people.map((person, personIdx) => (
                        <tr
                          key={person.email}
                          className={
                            personIdx % 2 === 0 ? undefined : "bg-gray-50"
                          }
                        >
                          <a href="#">
                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                              {person.name}
                            </td>
                          </a>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.title}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.email}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {person.role}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <a
                              href="#"
                              className="text-gray-600 hover:text-gray-900"
                            >
                              Edit
                              <span className="sr-only">, {person.name}</span>
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
