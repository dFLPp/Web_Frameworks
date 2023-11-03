import styled from "styled-components";

export const StyledSidebar = styled.div`
    display: ${({theme}) => theme.sidebar.display};
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    max-width: 250px;
    background-color: ${({theme}) => theme.others.backgroundColor};
    color:  ${({theme}) => theme.others.color};
    box-shadow: 5px 5px 15px 5px #000000;

    button{
        border: none;
        background-color: transparent;
        font-size: 2em;
        font-weight: 200;
        transform: translateY(20px);
        color:  ${({theme}) => theme.others.color};
        cursor: pointer;
    }
    div{
        padding: 1em;
        text-align: center;
    }

    ul{
        list-style: none;
        padding: 1em;
    }

    li{
        padding: .5em;
        font-size: 1.5em;
    }

`
export const StyledOverlay = styled.div`
    display: ${({theme}) => theme.sidebar.display};
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(1, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
`