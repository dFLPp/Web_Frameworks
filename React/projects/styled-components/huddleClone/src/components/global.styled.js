import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body{
    font-family: 'Courier New', Courier, monospace;
    background-color: ${({theme}) => theme.global.backgroundColor};
    color: ${({theme}) => theme.global.color};
  }

  img{
    max-width: 100%;
  }
  main{
    width: 100%;
    height: 90vh;
  }
`
export default GlobalStyle