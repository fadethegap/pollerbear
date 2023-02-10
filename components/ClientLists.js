import React from "react";
import { supabase } from "../utils/supabase";

export default function ClientLists() {
  const getList = async (listId) => {
    let { data, error } = await supabase
      .from("books")
      .select("metadata")
      .eq("id", listId)
      .single();

    if (error) {
      console.error(error);
    } else {
      // console.log(data);
      setListData(data);
      return data;
    }
  };

  return (
    <div className="grid md:grid-cols-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-4">
      Lists...
    </div>
  );
}
