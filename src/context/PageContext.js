import React, { createContext, useEffect, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [page, setPage] = useState(() => {
    const localData = localStorage.getItem("page");
    return localData ? Number(localData) : 0;
  });

  useEffect(() => {
    localStorage.setItem("page", page);
  }, [page]);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
