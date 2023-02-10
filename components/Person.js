import React from "react";
import { useCampaign } from "../context/campaign";

export default function Person(props) {
  const { name, number } = props;
  const { person, setPerson } = useCampaign();

  return <div></div>;
}
