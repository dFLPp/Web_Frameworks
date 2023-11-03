import React, {useContext, useState, useEffect, useCallback} from 'react'
const AppContext = React.createContext();
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const ContextProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [textQuery, setTextQuery] = useState('');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async() => {
        setIsLoading(true);
        console.log('fui executado')
        try {
            const resp = await fetch(`${url}${textQuery}`);
            const data = await resp.json();
            const {drinks} = data;
            if(drinks){
                const newCocktails = drinks.map((item) => {
                    const {idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
                    return {id: idDrink, name: strDrink, image: strDrinkThumb, info:strAlcoholic, glass:strGlass}
                })
                setCocktails(newCocktails);
            }
            else setCocktails([])
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }
    }, [textQuery])

    useEffect(() => {
    return fetchDrinks
    }, [textQuery, fetchDrinks])

    return <AppContext.Provider value={{
        isLoading,
        cocktails,
        setTextQuery
    }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext);
export {AppContext, ContextProvider}