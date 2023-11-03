import React from 'react' // (1)
import ReactDom from 'react-dom/client' // (2)
import './index.css'
import BookList from './components/bookList'

// (1) criando uma function component (Stateless)
const App = () => {
  return (
    <> 
      <BookList/>
    </>
  )
}
//Normalmente vamos criar vários components diferentes, em um arquivo ou em varios,
//e então juntar todos eles em um único component, normalmente chamado de 'App'


// (2) renderizando o component dentro do 'index.html'
const container =  document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<App/>);
// Você pode considerar a div com id="root" como o "root component", onde todo o app ficará

//No final das contas estamos retornando JSX, que possue as regras/boas práticas:
//1. sempre deve retornar e só pode retornar 1 elemento
//2. envolver toda o conteúdo em uma div ou em um 'fragment'
//3. usar camelCase em HTML atributes
//4. usa-se 'className' ao invés de 'class'
//5. Fazer a formatação corretamente
//6. utilizar a "closing tag": </>