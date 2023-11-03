import React, {useState, useContext} from 'react'

const AppContext = React.createContext();

function AppProvider({children}) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); 

  const openSidebar = () => {
    setIsSidebarOpen(true);
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  }

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false);
  }

  return (
    <AppContext.Provider value={{
        isModalOpen,
        isSidebarOpen,
        openSidebar,
        openModal,
        closeSidebar,
        closeModal
    }}>
        {children}
    </AppContext.Provider>
  )
}

//Custom hook (same functionality)
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}