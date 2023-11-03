import styled from "styled-components";

export const StyledProduct = styled.div`
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  aside{
    padding: 1em;
    text-align: center;
    width: 100%;
    font-size: 1.8em;
  }
  aside div{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .5em;
  }

  aside div button{
    font-size: 1.3em;
    cursor: pointer;
    padding: .5em;
    border: none;
    background-color: #D6D5A8;
    border-radius: 12px;
  }
  
  aside div button:last-child{
    font-size: 1.3em;
    padding: .5em;
  }

  aside div p:last-child{
    text-decoration: line-through;
  }

  @media(min-width: 728px){
    flex-direction: row;
    justify-content: space-evenly;
    aside{
        width: 50%;
    }
    aside div{
    justify-content: space-evenly;
   }
  }
`