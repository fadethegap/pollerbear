import PersonLists from "../components/ClientLists";
import React from "react";
import ListsList from "@/components/ListsList";

const names = [
  {
    name: "Bill",
    phone: "5304012353",
  },
  {
    name: "John",
    phone: "5304012353",
  },
  {
    name: "Andrew",
    phone: "5304012353",
  },
  {
    name: "Bill",
    phone: "5304012353",
  },
];

export default function Lists() {
  return (
    <div className="grid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4 w-1/2">
      <ListsList />
    </div>
  );
}
