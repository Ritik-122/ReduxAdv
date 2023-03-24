const { createSlice, configureStore } = require("@reduxjs/toolkit");

const showCartSlice=createSlice({
    name:'showCart',
    initialState:{isShown:false},
    reducers:{
      showCart(state){
        state.isShown=!state.isShown

      }
    }
})
export const showCartActions=showCartSlice.actions
const store=configureStore({
    reducer:{showCart:showCartSlice.reducer}
})
export default store