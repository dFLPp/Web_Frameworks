import React, {useContext} from 'react';
import data from '../db/data'

const AppContext = React.createContext();

function AppProvider({children}){
    const [list, setList] = React.useState(data);
    const [user, setUser] = React.useState({});
    const removeItem = (id) => {
      const newList = list.filter(product => product.id !== id);
      setList(newList);
    }
    return(

    <AppContext.Provider value={{list, removeItem, user, setUser}}>
    {children}
    </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext);
export {AppContext, AppProvider}