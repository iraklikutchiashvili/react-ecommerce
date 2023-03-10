import React, { createContext, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [page, setPage] = useState(0);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
