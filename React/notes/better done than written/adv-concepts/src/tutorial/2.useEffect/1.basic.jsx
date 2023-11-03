import React from 'react'
function Basics(){
    const [state, setState] = React.useState(0);
    const [NewState, setNewState] = React.useState(0);
    React.useEffect(() => {
        document.title = `useEffect runs ${state+1} times`
    }, [state])

    const [size, setSize] = React.useState(window.innerWidth);
    const getSize = () => {
        setSize(window.innerWidth);
    }
    React.useEffect(() => {
        console.log('useEffect')
        window.addEventListener('resize', getSize)
        return () => {
            console.log("clean-up")
            window.removeEventListener('resize', getSize)
        }
    }, [size])
    console.log('re-render')
    return (
    <>
    <h2 onClick={() => setState(state + 1)}>{state} Bananas </h2>
    <h2 onClick={() => setNewState(NewState + 1)}>{NewState} renegade Bananas </h2>

    <h2>Width - {size} pixels</h2>
    </>
    )
}

export default Basics

/*
Recapitulando:
- "hook" é uma função que controla o app. hooks não podem ser declarados/criados condicionalmente 
- useState é um hook. É responsavel por alterar o estado de um component e então re-renderizar ele
 
- useEffect é um hook que vai que vai rodar depois de cada re-render. Como o React tem muito re-render...
- Utiliza-se 'useEffect' quando você realiza algum efeito/mudança no browser/app, então vai re-renderizar fora do components não alterados
- useEffect tem a 'Dependency List' como 2 parametro. Se é '[]', então só vai rodar 1 vez, quando a pagina carregar, 
agora se você passa '[value]', então useEffect vai rodar toda vez que a variável 'value' (normalmente a variavel do useState) é modificada
- Além disso você pode ter quantos useEffects, dentro de 1 arquivo, quanto você quiser

- Existem casos onde o useEffect pode estourar a memoria do seu app, por descuido/falta de atenção. Ex: Quando você adiciona/roda um
eventListener quando o browser muda de tamanho, Toda a vez que o app re-renderizar ele vai adicionar um novo eventListener, aumentando a resposta
exponencialmente. Para resolver isso basta usar uma clean-up function. Basicamente é uma função feito pelo 'return' do use Effect que vai 'desfazer' o que foi re-renderizado

-OBS: useEffect cannot be async (but can have async functions inside)
*/