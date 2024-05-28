const { createContext, useState } = require("react");

export const AdminContext = createContext({
   fullView: false,
   setFullView: () => null,
   isTokenExpired: true,
   setIsTokenExpired: () => null,
});

export const AdminProvider = ({ children }) => {
   const [fullView, setFullView] = useState(false);
   const [isTokenExpired, setIsTokenExpired] = useState(true);
   const value = { fullView, setFullView, isTokenExpired, setIsTokenExpired };
   return (
      <AdminContext.Provider value={value}>{children}</AdminContext.Provider>
   );
};
