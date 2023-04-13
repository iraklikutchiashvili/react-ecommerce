import React, { createContext, useEffect, useState } from "react";

export const PageContext = createContext();

const PageContextProvider = (props) => {
  const [page, setPage] = useState();
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {props.children}
    </PageContext.Provider>
  );
};
export default PageContextProvider;
