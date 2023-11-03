import React, { useState } from 'react'
import {Navbar, Modal, Product, Sidebar} from './components'
import GlobalStyle from './components/global.styled'
import { ThemeProvider } from 'styled-components'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cart, setCart] = useState(0);
  const [temp, setTemp] = useState(0);

  const addCart = () => {
    setTemp(prev => prev+1);
  }
  const removeCart = () => {
    setTemp(prev => {
      if(prev === 0) return 0;
      return prev-1;
    });
  }
  const updateCart = () => {
     setCart(prev => prev+temp);
     setTemp(0);
  }

  const theme = {
    global: {
      backgroundColor: isDarkTheme ? '#1B2430' : '#D6D5A8',
      color: isDarkTheme ? '#D6D5A8' : '#1B2430'
    },
    others:{
      backgroundColor: isDarkTheme ? '#51557E' : '#816797',
      color: isDarkTheme ? '#D6D5A8' : '#D6D5A8'
    },
    sidebar:{
      display: isSidebarOpen ? 'block' : 'none'
    }
  }

  return (<ThemeProvider theme={theme}>
  <>
    <GlobalStyle/>
    <Navbar openSidebar={() => setIsSidebarOpen(true)} cart={cart}/>
    <Sidebar closeSidebar={ () => setIsSidebarOpen(false)}/>
    <main>
    <Product utils={{addCart, removeCart, updateCart, temp}}/>
    </main>
  </>
  </ThemeProvider>)
}

export default App
