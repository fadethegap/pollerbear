import { createContext, useState, useEffect, useContext, useRef } from "react";
import { supabase } from "../utils/supabase";
const Context = createContext();

const Provider = ({ children }) => {
  const [list, setList] = useState();
  const [selectedName, setSelectedName] = useState();
  const [question, setQuestion] = useState();
  const [person, setPerson] = useState();
  const [listData, setListData] = useState();

  const exposed = {
    list,
    setList,
    selectedName,
    setSelectedName,
    question,
    setQuestion,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useCampaign = () => useContext(Context);

export default Provider;
