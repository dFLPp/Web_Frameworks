import React, {useState, useEffect} from 'react'

function Render(){
    const [isVisible, setIsVisible] = useState(false);
    return(
        <>
            {/* toggle visibility */}
            <button onClick={() => setIsVisible(!isVisible)}>GO BANANAS</button>
            {/* using short-circuit to display conditionally && dinamically */}
            {isVisible && <Wind/>}
        </>

    )
}

function Wind(){
    const [size, setSize] = useState(window.innerWidth);
    const getSize = () => {
        setSize(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize', getSize);
        return () => window.removeEventListener('resize', getSize);
    }, [])
    return  <h2>Width - {size}</h2>
}

export default Render

//Just one return
/*
//O fato é, React sempre precisa rederizar um 'value', logo sempre precisamos retornar um value
//Em certos casos retornar um value não é tarefa simples, mas existem alguns metodos: 
//short-circuit evaluation: Usamos || ou && para atribuir valor a uma variável.
//ternary operator: Um modo de fazer decisões condicionais em uma linha
Ex:
const [text, useText] = useState('');
const t1 = text || 'bananas'; //(ou t1=text ou o t1='bananas')
const t2 = text && 'bananas'; //(se 'text' existe então t2 = 'bananas')

//OBS: note que o 'if' statement não retorna um valor (porque não é uma função), não sendo ideal
//OBS: Sem a clean-up function iriamos criar centenas de enventListeners quando mudassemos o valor de 'isVisible'
*/