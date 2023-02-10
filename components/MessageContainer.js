import React, { useState, useEffect } from "react";
import CampaignsCombobox from "./CampaignsCombobox";
import TextArea from "./TextArea";

export default function Messages() {
  const [clients, setClients] = useState();

  const clientData = [
    {
      id: 1,
      name: "Eddard Stark",
    },
    {
      id: 2,
      name: "Catelyn Stark",
    },
    {
      id: 3,
      name: "Jon Snow",
    },
    {
      id: 4,
      name: "Sansa Stark",
    },
    {
      id: 5,
      name: "Bran Stark",
    },
    {
      id: 6,
      name: "Arya Stark",
    },
    {
      id: 7,
      name: "Robb Stark",
    },
    {
      id: 8,
      name: "Theon Greyjoy",
    },
    {
      id: 9,
      name: "Tyrion Lannister",
    },
    {
      id: 10,
      name: "Cersei Lannister",
    },
    {
      id: 11,
      name: "Jaime Lannister",
    },
    {
      id: 12,
      name: "Joffrey Baratheon",
    },
    {
      id: 13,
      name: "Daenerys Targaryen",
    },
    {
      id: 14,
      name: "Viserys Targaryen",
    },
    {
      id: 15,
      name: "Petyr Baelish",
    },
    {
      id: 16,
      name: "Sandor Clegane (The Hound)",
    },
    {
      id: 17,
      name: "Brienne of Tarth",
    },
    {
      id: 18,
      name: "Davos Seaworth",
    },
    {
      id: 19,
      name: "Samwell Tarly",
    },
    {
      id: 20,
      name: "Stannis Baratheon",
    },
  ];

  useEffect(() => {
    setClients(clientData);
  }, []);

  const regular = "min-w-[250px]";
  const bold = "min-w-[250px] font-extrabold";

  return (
    <div className="message-grid-container">
      <div className="client-header">Clients</div>
      <div className="messaging-header">Messaging</div>
      <div className="people">
        <ul>
          {clients &&
            clients.map((client) => (
              <li key={client.id}>
                <div className="flex items-center">
                  <div className={client.id === 1 ? bold : regular}>
                    {client.name}
                  </div>
                  <div
                    className="flex-shrink-0 w-2.5 h-2.5 rounded-full bg-emerald-600 ml-3"
                    aria-hidden="true"
                  />
                </div>
              </li>
            ))}
        </ul>
      </div>
      <div className="campaign">
        <div>
          <CampaignsCombobox />
        </div>
        <div className="mt-5 w-1/2">
          <TextArea label="Modify your question" />
          <div className="flex justify-end mr-3 mt-3">
            <div className="flex-shrink-0">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="message"></div>
    </div>
  );
}
