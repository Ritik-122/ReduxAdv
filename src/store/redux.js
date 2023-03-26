const { createSlice, configureStore } = require("@reduxjs/toolkit");

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const find_id = action.payload[0].id;

      const indxOfItem = state.items.findIndex((i) => i.id === find_id);

      if (indxOfItem === -1) {
        state.items = [...state.items, ...action.payload];
      } else {
        state.items[indxOfItem].quantity =
          Number(state.items[indxOfItem].quantity) + 1;
        state.items = [...state.items];
      }
    },
    removeItem(state,action){
      const find_id = action.payload[0].id;
      const quantity=action.payload[0].quantity

      

      const indxOfItem = state.items.findIndex((i) => i.id === find_id);

      if (quantity>1) {
        state.items[indxOfItem].quantity =Number(state.items[indxOfItem].quantity) - 1;
        state.items = [...state.items];
        
      } else {
        const leftArray = state.items.filter((i) => i.id !== find_id);
        state.items = [...leftArray];
      }
  

    },
    replaceCart(state,action){
      state.items=action.payload
    }
  },
});
const uiSlice=createSlice({
  name:'ui',
  initialState:{alertmessage:{}},
  reducers:{
    showMessage(state,action){
      state.alertmessage=action.payload


    }
  }
})
const showCartSlice = createSlice({
  name: "showCart",
  initialState: { isShown: false },
  reducers: {
    showCart(state) {
      state.isShown = !state.isShown;
    },
  },
});
export const showCartActions = showCartSlice.actions;
export const cartItemActions = cartItemSlice.actions;
export const uiActions=uiSlice.actions
const store = configureStore({
  reducer: { showCart: showCartSlice.reducer, cartItem: cartItemSlice.reducer,ui:uiSlice.reducer },
});
export default store;
