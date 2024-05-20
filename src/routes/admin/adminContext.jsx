const { createContext, useState } = require("react");

export const AdminContext = createContext({
   fullView: false,
   setFullView: () => null,
});

export const AdminProvider = ({ children }) => {
   const [fullView, setFullView] = useState(false);
   const value = { fullView, setFullView };
   return (
      <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
   );
};
