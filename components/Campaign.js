import React, { useState, useEffect, useRef } from "react";
import CampaignQuestion from "./CampaignQuestion";
import FileLoader from "./FileLoader";
import { useCampaign } from "../context/campaign";
import ListsCombobox from "./ListsCombobox";
import Input from "./Input";

export default function Campaign() {
  return (
    // <div className="grid md:grid-cols-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
    <div className="grid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      {/* <FileLoader /> */}
      <div className="mb-3 w-1/4">
        <Input
          label="Campaign Name"
          placeholder="XYZ Campaign"
          type="campaign"
        />
      </div>
      <ListsCombobox />
      <CampaignQuestion />
    </div>
  );
}
