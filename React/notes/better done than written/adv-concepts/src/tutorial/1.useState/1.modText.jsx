import React, { useState } from "react";

const TitleEX = () => {
    const [text, setText] = useState('bananas');
    const changeT = () => {
        if(text === 'bananas') setText('BANANAS')
        else setText('bananas')
    };

    return(
        <>
            <h2>{text}</h2>
            <button type="button" onClick={changeT}> change </button>
        </>
    )
}

export default TitleEX;

/*
useState é um hook. Um hook é uma função que permite manipular a página de maineiras especificas
Nesse exemplo, o react renderiza a página  com 'bananas' e, por mais que cliquemos, o titulo não troca
É necessário fazer o "re-ender", e essa é uma das utilidades do useState. useState retorna uma array
onde o [0] é um valor e o [1] é uma função. Essa função vai alterar/modificar [0] e re-renderizar o component

*/