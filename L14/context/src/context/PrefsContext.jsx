import React from "react";

const PrefsContext = React.createContext({
  language: "English",
  mode: "Light",
});

export default PrefsContext;
