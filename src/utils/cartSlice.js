import { createSlice } from '@reduxjs/toolkit';
const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItemToCart:(state,action)=>{
            //mutating the state here with immer library
            state.items.push(action.payload);
        },
        removeItemFromCart:(state,action) =>{
            const index=state.items.findIndex(
                (items)=>items.id===action.payload.id);
            state.items.splice(index,1);
        },
        clearCart:(state)=>{
            state.items.length=0;        
        },
    },
});

export const {addItemToCart,removeItemFromCart,clearCart}=cartSlice.actions;

export default cartSlice.reducer;