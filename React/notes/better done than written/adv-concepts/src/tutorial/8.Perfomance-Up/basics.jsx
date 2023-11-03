import React, {useState, useEffect, useCallback, useMemo} from 'react'
import {useFetch} from '../6.Best-Pratices/1.customHook'

//A url, novamente, não funciona
const url = 'https://course-api.netlify.app/api/javascript-store-products';

const getExpensive = (data) => {
    return data.reduce((cumulative, iterable) => {
        const higherPrice = iterable.fields.price;
        if(higherPrice >= cumulative) cumulative = higherPrice;
        return cumulative
    }, 0) / 100;
}

export default function Basics() {
    const { products } = useFetch(url);
    const [counter, setCounter] = useState(0);
    const [cart, setCart] = useState(0);

    //Controla a função de modo a só executar ela novamente, se o argumento dela for novo/diferente, ou o que está na depedency array mudar
    const addToCart = useCallback(() => {
        setCart(cart+1)
    }, [cart])

    //Relembra o ultimo Valor, se o que está na depedency array muda, re-executa a função e salva o novo Valor
    const optGetExpensive = useMemo(() => getExpensive(products), [products])

    return (<>
    <h2>Counter: {counter}</h2>
    <button onClick={() => setCounter(counter + 1)}>+</button>
    <h2>Most expensive is: {optGetExpensive}</h2>
    <BigList products={products} addToCart={addToCart}/>
    </>)
}

//Só re-renderiza o Component se seus props ou states são alterados/mudam
const BigList = React.memo(({products, addToCart}) => {
    useEffect(() => {
        console.log("i am been called")
    })
    return(<>
    <section>
        {
        products.map((product) => <Product key={product.id} {...product} addToCart={addToCart}/>)
        }
    </section>
    </>)
})

const Product = ({filds, addToCart}) => {
    useEffect(() => {
        console.log("i am been called")
    })
    const {name, price} = filds;
    price = price/100;
    const image = filds.image[0].url;
    return(<>
    <article>
        <img src={image} alt={name} />
        <h4>{name}</h4>
        <p>{price}</p>
        <button onClick={addToCart}>add to cart</button>
    </article>
    </>)
}

//Optimization não é algo que você faz em todo app. Ele tem seus custos. Quanto mais simples é um app,
//menos efetivo React.memo, useMemo e useCallback são. Existem casos aonde chegam a ser prejudiciais
//Para saber quando usar basta procrar no google. Aqui vamos mostrar funcionaldiade basica, só para ilustrar

//Nesse exemplo, sempre que clicamos no counter Todo o app re-renderiza, ou seja, o app refaz o fetch, o que é custoso
//Para evitar isso, nos colocamos todo o component dentro de 'React.memo', que vai fazer o 'memoizing'
//Basicamene ele vai guarda todo o component em cache, onde se esse componenent/seu prop não for alterado, não re-renderiza ele

//Suponha agora, que você repassa uma função que modifica um estado em algum outro lugar, recaimos no mesmo problema, pois
//o re-render é feito. Para evitar isso nos usamos o useCallback, que age semelhante ao React.memo, so que com funções.
//Ela também é parecida com o useEffect, pois você deve passar a dependency list, para dizer quando re-renderizar ao executar a função

//Existe ainda outro caso. E se você tem uma função separada que serve só para mostrar um valor ou um dado ao user, ela será re-executada quando um estado mudar ?
//Sim, ela será. E se ela for uma função pesada ? Pois é... É por isso que usa-se o useMemo, onde basicamente nos armazenamos em cache o ultimo valor retornado por essa função.
//Mas fica a observação: Ela vai salvar o ultimo resultado/valor. Quem controla a criação/chamada/execução da função é o useCallback


//useCallback --> usado para escolher/manipular quando executar/re-renderizar uma função
//React.memo --> usada para só re-renderizar um component, se algum de seus props ou states mudar
///useMemo --> usado para salvar um Valor resultando de uma função, só execuntando a função se o que gera o valor mudar

//No final das contas, você só vai aprender/lembrar quando começar a usar.