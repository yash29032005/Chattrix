import { createContext, useContext, useState } from "react";

const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [showmessagesection, setShowmessagesection] = useState(false);
  const [selecteduser, setSelecteduser] = useState(null);
  return (
    <>
      <PageContext.Provider
        value={{
          showmessagesection,
          setShowmessagesection,
          selecteduser,
          setSelecteduser,
        }}
      >
        {children}
      </PageContext.Provider>
    </>
  );
};

export const usePage = () => {
  return useContext(PageContext);
};
