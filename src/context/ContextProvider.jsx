/* eslint-disable react/prop-types */
import { useState } from "react";
import context from "./context";

export default function ContextProvider({ children }) {
  const [isWarned, setIsWarned] = useState(true);
  const [isWriting, setIsWriting] = useState(false);

  return (
    <context.Provider
      value={{ isWarned, setIsWarned, isWriting, setIsWriting }}
    >
      {children}
    </context.Provider>
  );
}
