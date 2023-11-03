import styled from "styled-components";

export const StyledNav = styled.nav`
    width: 100%;
    padding: 1em;
    background-color: ${({theme}) => theme.others.backgroundColor};
    color:  ${({theme}) => theme.others.color};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 10vh;

    div{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: .5em;
    }
    
    button{
        border: none;
        background-color: transparent;
        font-size: 2em;
        font-weight: 200;
        transform: translateY(-2.5px);
        color:  ${({theme}) => theme.others.color};
        cursor: pointer;
    }

    ul{
        display: flex;
        list-style: none;
    }

    li{
        margin-left: 1em;
        margin-right: 1em;
    }

    @media(min-width: 728px){
        div:first-child{
            display: none;
        }
    }
    @media(max-width: 728px){
        div:nth-child(3){
            display: none;
        }
    }
`