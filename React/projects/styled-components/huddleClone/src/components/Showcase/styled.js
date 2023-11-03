import styled from "styled-components";

export const StyledShowcase = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
img{
    width: 100%;
    margin: 1em;
    border-radius: 12px;
    cursor: pointer;
}

div:first-child img:first-child{
    width: 50%;
    cursor: default;
}

div{
    overflow: hidden;
    max-height: 70%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

`