import CampaignList from "../components/CampaignList";
import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";
import Campaign from "../components/Campaign";

export default function Example() {
  return (
    <div className="grid mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      {/* <Campaign /> */}
      <CampaignList />
    </div>
  );
}
