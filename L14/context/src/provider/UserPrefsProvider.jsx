import PrefsContext from "../context/PrefsContext";
import { useState } from "react";

const UserPrefsProvider = ({ children }) => {
  const [language, setLanguage] = useState("Swedish");
  const [mode, setMode] = useState("Light");

  return (
    <PrefsContext.Provider
      value={{ language: language, mode: mode, setLanguage: setLanguage }}
    >
      {children}
    </PrefsContext.Provider>
  );
};

export default UserPrefsProvider;
