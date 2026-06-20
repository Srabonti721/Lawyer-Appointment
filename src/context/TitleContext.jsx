import { createContext, useEffect, useState } from "react";

export const TitleContext = createContext();

const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState("Law.BD");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <TitleContext.Provider value={{ title, setTitle, loading, setLoading }}>
      {children}
    </TitleContext.Provider>
  );
};

export default TitleProvider;