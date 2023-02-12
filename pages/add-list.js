import Button from "@/components/Button";
import FileLoader from "@/components/FileLoader";
import Input from "@/components/Input";
import React from "react";

export default function AddList() {
  return (
    <div className="grid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      <div className="w-1/4 mb-5">
        <Input label="List Name" placeholder="XYZ List" type="text" />
      </div>
      <div className="w-1/2 mb-5">
        <Input
          label="List Description"
          placeholder="This list is for..."
          type="text"
        />
      </div>
      <div className="grid justify-start">
        <FileLoader />
      </div>
      <Button label="Save List" />
    </div>
  );
}
