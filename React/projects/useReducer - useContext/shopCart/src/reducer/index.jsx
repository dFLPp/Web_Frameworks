export default function reducer(oldState, action){
    if(action.type === 'GET_CART_ITEMS'){
        return {...oldState, loading: true}
    }
    if(action.type === 'DISPLAY_CART_ITEMS'){
        return {...oldState, loading: false, cart: action.payload}
    }
    if(action.type === 'REMOVE_ALL'){
        return {...oldState, cart: []}
    }
    if(action.type === 'INCREASE_QTD_ITEM'){
        let tempCart = oldState.cart.map((cartItem) => {
        if (cartItem.id === action.payload) {
            return { ...cartItem, amount: cartItem.amount + 1 }
        }
        return cartItem
        })
        return { ...oldState, cart: tempCart }
    }
    if(action.type === 'DECREASE_QTD_ITEM'){
        let tempCart = oldState.cart.map((item) => {
            if(item.id === action.payload){
                return {...item, amount: item.amount - 1 }
            }
            return item
        }).filter((newItem) => newItem.amount !== 0)
        return {...oldState, cart: tempCart}
    }
    if(action.type === 'REMOVE_OF_CART'){
        return {
        ...oldState,
        cart: oldState.cart.filter((cartItem) => cartItem.id !== action.payload),
        }
    }

    if(action.type === 'GET_TOTALS'){
        let {totalPrice, allQtd} = oldState.cart.reduce((cumulative, item)=>{
            const {amount, price} = item;
            cumulative.totalPrice += amount * price;
            cumulative.allQtd += amount;
            return cumulative
        }, {
            totalPrice: 0,
            allQtd: 0
        })
        totalPrice = parseFloat(totalPrice.toFixed(2));
        return {...oldState, amount:allQtd, total: totalPrice}
    }

    
   

    throw new Error('this action not exist')
}
