import React, { useState, useContext } from 'react';
import menus from '../db/data'
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [menu, setMenu] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const openSubmenu = (text, coordinates) => {
    const page = menus.find((menu) => menu.page === text);
    setMenu(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSidebarOpen, isSubmenuOpen,
        openSidebar, closeSidebar,
        openSubmenu, closeSubmenu,
        menu, location
      }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook to setup context
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };