import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();
const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState([]);

  const onSent = async (prompt) => {
    if (prompt.trim() === "") return;

    setPrevPrompt((prev) => [...prev, prompt]);
    setLoading(true);
    setShowResult(true);
    const response = await run(prompt);
    setResultData((prev) => [...prev, response]);
    setLoading(false);
    setInput("");
  };

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    loading,
    setLoading,
    showResult,
    input,
    setInput,
    resultData,
    setResultData,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};
export default ContextProvider;
