import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true
}

//lida com chamadas assincronas que envolvem alterar algum estado
export const getCartItems = createAsyncThunk('cart/getCartItems', async (a, thunkAPI) => {
    console.log(thunkAPI);
    console.log(thunkAPI.getState());
    return await fetch(url).then(resp => resp.json()).catch(err => console.log(thunkAPI.rejectWithValue('an error ocourred')))
})

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        clearCart: (state) =>{
            state.cartItems = [];
        },
        removeItem: (state, action) =>{
            console.log(action)
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        },
        addQtd: (state, {payload}) =>{
            const targetItem = state.cartItems.find(item => item.id === payload);
            targetItem.amount += 1;
        },
        subQtd: (state, {payload}) =>{
            const targetItem = state.cartItems.find(item => item.id === payload);
            targetItem.amount -= 1;
        },
        getTotals: (state) =>{
            let fullCart = 0;
            let totalBill = 0;
            state.cartItems.forEach((item) => {
                fullCart += item.amount;
                totalBill += item.amount * item.price;
            })
            state.total = totalBill;
            state.amount = fullCart;
        },
    },
    extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state, action) => {
      console.log(action);
      state.isLoading = false;
    }
    }
})
export const {clearCart, removeItem, addQtd, subQtd, getTotals} = cartSlice.actions;
export default cartSlice.reducer;

//entenda cartSlice como se fosse o estado do carrinho de compras.
// cartSlice.reducer é a unica função que pode alterar o estado do carrinho de comprar
// e por isso estamos passando ela para a nossa 'central' (store)

// a property 'reducers' de cartSlice são todas as funções que pode alterar o estado
// graças ao package 'immer' podemos alterar o estado diratamente, como se você uma variável normal
// esse reducer é uma ação, basicamente: evento -->  dispatcher --> ação ---> altera o estado --> react re-render...

//Existe ainda os extraReducers, que trabalham com life-cicle actions. Normalmente usada quando requisições assincrionas são usadas